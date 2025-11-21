#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const nodemailer = require('nodemailer');
require('dotenv').config({ path: path.join(__dirname, '..', '.env.local') });

// Simple email validation (avoid extra deps)
function isEmail(email) {
  return typeof email === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

class WSLMailService {
  constructor() {
    // initialization promise to allow async transporter creation
    this._init = this._createTransporter();
  }

  async _createTransporter() {
    const env = process.env.NODE_ENV || 'development';

    if (env === 'production') {
      const host = process.env.SMTP_HOST || 'smtp.gmail.com';
      const port = parseInt(process.env.SMTP_PORT || '587', 10);
      const secure = (process.env.SMTP_SECURE === 'true') || port === 465;

      if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
        throw new Error('Missing SMTP_USER or SMTP_PASS in production environment');
      }

      const transporter = nodemailer.createTransport({
        host,
        port,
        secure,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
        pool: process.env.SMTP_POOL === 'true' || false,
      });

      // verify connection (will throw on invalid config)
      await transporter.verify();
      this.transporter = transporter;
      this._isPreview = false;
      return;
    }

    // development: create a test account using Ethereal
    const testAccount = await nodemailer.createTestAccount();
    const transporter = nodemailer.createTransport({
      host: testAccount.smtp.host,
      port: testAccount.smtp.port,
      secure: testAccount.smtp.secure,
      auth: { user: testAccount.user, pass: testAccount.pass },
    });
    await transporter.verify();
    this.transporter = transporter;
    this._isPreview = true;
  }

  // Basic template rendering (safe interpolation)
  _escapeHtml(str) {
    return String(str || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  _renderContactHtml({ name, email, subject, message, userAgent, timestamp }) {
    return `
      <div style="font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif; max-width:700px; margin:0 auto;">
        <h2 style="background:#0ea5e9;color:#fff;padding:12px;border-radius:6px;">New Contact Message</h2>
        <p><strong>Name:</strong> ${this._escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${this._escapeHtml(email)}</p>
        <p><strong>Subject:</strong> ${this._escapeHtml(subject)}</p>
        <div style="white-space:pre-wrap;background:#f8fafc;border-left:4px solid #0ea5e9;padding:12px;border-radius:4px;">${this._escapeHtml(message)}</div>
        <p style="font-size:12px;color:#6b7280;margin-top:12px;">User Agent: ${this._escapeHtml(userAgent || 'Not provided')}</p>
        <p style="font-size:12px;color:#6b7280;">Timestamp: ${this._escapeHtml(timestamp)}</p>
      </div>
    `;
  }

  _renderAutoReplyHtml({ name, subject, timestamp }) {
    return `
      <div style="font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif; max-width:700px;margin:0 auto;">
        <h2 style="background:#10b981;color:#fff;padding:12px;border-radius:6px;">Thank you</h2>
        <p>Hi ${this._escapeHtml(name)},</p>
        <p>Thanks for contacting WSL Guide about "${this._escapeHtml(subject)}". We'll respond as soon as we can.</p>
        <p style="font-size:12px;color:#6b7280;">Submitted: ${this._escapeHtml(timestamp)}</p>
        <p>— WSL Guide Team</p>
      </div>
    `;
  }

  async sendContactEmail({ name, email, subject, message, userAgent } = {}) {
    await this._init;

    name = (name || '').trim();
    email = (email || '').trim();
    subject = (subject || 'No subject').trim();
    message = (message || '').trim();
    userAgent = userAgent || '';

    const missing = [];
    if (!name) missing.push('name');
    if (!email || !isEmail(email)) missing.push('email');
    if (!message) missing.push('message');
    if (missing.length) {
      return { success: false, error: `Missing or invalid fields: ${missing.join(', ')}` };
    }

    const timestamp = new Date().toISOString();
    const from = process.env.FROM_EMAIL || `noreply@${process.env.SITE_DOMAIN || 'example.com'}`;
    const to = process.env.TO_EMAIL || from;

    const mailOptions = {
      from,
      to,
      subject: `${process.env.SITE_NAME || 'WSL Guide'} contact: ${subject}`,
      html: this._renderContactHtml({ name, email, subject, message, userAgent, timestamp }),
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\n${message}\n\nUser Agent: ${userAgent || 'Not provided'}\nTimestamp: ${timestamp}`,
      replyTo: email,
      headers: { 'X-Mailer': 'WSLGuide-MailService' },
    };

    try {
      const info = await this.transporter.sendMail(mailOptions);
      const result = { success: true, messageId: info.messageId };
      if (this._isPreview) {
        result.previewUrl = nodemailer.getTestMessageUrl(info) || null;
      }

      // send auto-reply to sender (non-blocking but awaited here to report errors)
      if (isEmail(email)) {
        const autoReply = {
          from,
          to: email,
          subject: process.env.AUTO_REPLY_SUBJECT || 'Thank you for contacting WSL Guide',
          html: this._renderAutoReplyHtml({ name, subject, timestamp }),
          text: `Hi ${name},\n\nThanks for contacting WSL Guide about "${subject}". We'll reply soon.\n\n— WSL Guide Team`,
        };
        try {
          const replyInfo = await this.transporter.sendMail(autoReply);
          if (this._isPreview) result.autoReplyPreview = nodemailer.getTestMessageUrl(replyInfo) || null;
          result.autoReplyId = replyInfo.messageId;
        } catch (err) {
          // Auto-reply failure should not fail the main request; log and continue
          console.error('Auto-reply failed:', err && err.message ? err.message : err);
        }
      }

      return result;
    } catch (err) {
      console.error('Error sending contact email:', err && err.message ? err.message : err);
      return { success: false, error: err && err.message ? err.message : 'Failed to send email' };
    }
  }

  async testConnection() {
    await this._init;
    try {
      await this.transporter.verify();
      return { success: true };
    } catch (err) {
      return { success: false, error: err && err.message ? err.message : 'verify failed' };
    }
  }
}

// CLI
async function main() {
  const args = process.argv.slice(2);
  const cmd = args[0] || 'help';
  const svc = new WSLMailService();

  switch (cmd) {
    case 'test': {
      const res = await svc.testConnection();
      if (res.success) console.log('✓ SMTP connection is ready'); else { console.error('✗ SMTP connection failed:', res.error); process.exit(1); }
      break;
    }
    case 'send-contact': {
      if (args.length < 5) {
        console.error('Usage: node scripts/mail.js send-contact <name> <email> <subject> <message>');
        process.exit(1);
      }
      const contact = { name: args[1], email: args[2], subject: args[3], message: args[4], userAgent: 'CLI' };
      const result = await svc.sendContactEmail(contact);
      if (result.success) {
        console.log('✓ Email sent. Message ID:', result.messageId);
        if (result.previewUrl) console.log('Preview URL:', result.previewUrl);
      } else {
        console.error('✗ Failed to send email:', result.error);
        process.exit(1);
      }
      break;
    }
    case 'send-test': {
      const testData = { name: 'Test User', email: process.env.TO_EMAIL || 'test@example.com', subject: 'Test message', message: 'This is a test', userAgent: 'CLI Test' };
      const res = await svc.sendContactEmail(testData);
      if (res.success) console.log('✓ Test email sent:', res.messageId); else { console.error('✗ Test failed:', res.error); process.exit(1); }
      break;
    }
    case 'help':
    default:
      console.log('\nWSL Guide Mail Script\n\nCommands:\n  test             - Verify SMTP connection\n  send-contact     - Send a contact email (usage below)\n  send-test        - Send a test email to TO_EMAIL or test@example.com\n\nUsage:\n  node scripts/mail.js send-contact "Name" "email@example.com" "Subject" "Message"\n');
  }
}

if (require.main === module) main().catch(err => { console.error(err); process.exit(1); });

module.exports = WSLMailService;