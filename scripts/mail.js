#!/usr/bin/env node#!/usr/bin/env node#!/usr/bin/env node#!/usr/bin/env node



const nodemailer = require('nodemailer');

const path = require('path');

require('dotenv').config({ path: path.join(__dirname, '..', '.env.local') });/**



class WSLMailService { * WSL Guide Mail Script

  constructor() {

    this.transporter = this.createTransporter(); * A comprehensive email utility for the WSL Guide website/**/**

  }

 * 

  createTransporter() {

    if (process.env.NODE_ENV === 'production') { * Features: * WSL Guide Mail Script * WSL Guide Mail Script

      return nodemailer.createTransport({

        host: process.env.SMTP_HOST || 'smtp.gmail.com', * - Send contact form emails

        port: parseInt(process.env.SMTP_PORT || '587'),

        secure: false, * - Newsletter notifications * A comprehensive email utility for the WSL Guide website * A comprehensive email utility for the WSL Guide website

        auth: {

          user: process.env.SMTP_USER, * - Admin notifications

          pass: process.env.SMTP_PASS,

        }, * - Template management *  * 

      });

    } else { * - CLI interface

      return nodemailer.createTransport({

        host: 'smtp.ethereal.email', */ * Features: * Features:

        port: 587,

        secure: false,

        auth: {

          user: 'ethereal.user@ethereal.email',const nodemailer = require('nodemailer'); * - Send contact form emails * - Send contact form emails

          pass: 'ethereal.pass',

        },const path = require('path');

      });

    }const fs = require('fs'); * - Newsletter notifications * - Newsletter notifications

  }

require('dotenv').config({ path: path.join(__dirname, '..', '.env.local') });

  async sendContactEmail(contactData) {

    const { name, email, subject, message, userAgent } = contactData; * - Admin notifications * - Admin notifications

    

    const mailOptions = {class WSLMailService {

      from: process.env.FROM_EMAIL || 'noreply@wslguide.dev',

      to: process.env.TO_EMAIL || 'admin@wslguide.dev',  constructor() { * - Template support * - Template support

      subject: `WSL Guide Contact: ${subject}`,

      html: `    this.transporter = this.createTransporter();

        <h2>New Contact Form Message</h2>

        <p><strong>Name:</strong> ${name}</p>    this.templates = this.loadTemplates(); * - Multiple email providers (SMTP, SendGrid, Mailgun) * - Multiple email providers (SMTP, SendGrid, Mailgun)

        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Subject:</strong> ${subject}</p>  }

        <p><strong>Message:</strong></p>

        <div style="background: #f5f5f5; padding: 15px; border-left: 4px solid #0066cc;"> */ */

          ${message.replace(/\n/g, '<br>')}

        </div>  createTransporter() {

        <hr>

        <p><small>User Agent: ${userAgent || 'Not provided'}</small></p>    if (process.env.NODE_ENV === 'production') {

        <p><small>Timestamp: ${new Date().toISOString()}</small></p>

      `,      return nodemailer.createTransport({

      text: `

New Contact Form Message        host: process.env.SMTP_HOST || 'smtp.gmail.com',const nodemailer = require('nodemailer');const nodemailer = require('nodemailer');



Name: ${name}        port: parseInt(process.env.SMTP_PORT || '587'),

Email: ${email}

Subject: ${subject}        secure: false, // true for 465, false for other portsconst dotenv = require('dotenv');const dotenv = require('dotenv');



Message:        auth: {

${message}

          user: process.env.SMTP_USER,const path = require('path');

User Agent: ${userAgent || 'Not provided'}

Timestamp: ${new Date().toISOString()}          pass: process.env.SMTP_PASS,

      `,

    };        },// Load environment variablesconst fs = require('fs');



    try {      });

      const info = await this.transporter.sendMail(mailOptions);

      console.log('Contact email sent:', info.messageId);    } else {dotenv.config({ path: '.env.local' });

      

      const autoReplyOptions = {      // Development - use Ethereal Email for testing

        from: process.env.FROM_EMAIL || 'noreply@wslguide.dev',

        to: email,      return nodemailer.createTransport({// Load environment variables

        subject: 'Thank you for contacting WSL Guide!',

        html: `        host: 'smtp.ethereal.email',

          <h2>Thank You!</h2>

          <p>Hi ${name},</p>        port: 587,// Email configurationdotenv.config({ path: '.env.local' });

          <p>Thank you for reaching out to WSL Guide! We've received your message about "${subject}" and will get back to you as soon as possible.</p>

          <p>We typically respond within 24-48 hours during business days.</p>        secure: false,

          <p>Best regards,<br>The WSL Guide Team</p>

          <hr>        auth: {const EMAIL_CONFIG = {

          <p><a href="https://vinberg88.github.io">Visit WSL Guide</a></p>

        `,          user: 'ethereal.user@ethereal.email',

        text: `

Hi ${name},          pass: 'ethereal.pass',  smtp: {const __filename = fileURLToPath(import.meta.url);



Thank you for reaching out to WSL Guide! We've received your message about "${subject}" and will get back to you as soon as possible.        },



We typically respond within 24-48 hours during business days.      });    host: process.env.SMTP_HOST || 'smtp.gmail.com',const __dirname = dirname(__filename);



Best regards,    }

The WSL Guide Team

  }    port: parseInt(process.env.SMTP_PORT || '587'),

Visit WSL Guide: https://vinberg88.github.io

        `,

      };

        loadTemplates() {    secure: process.env.SMTP_SECURE === 'true',// Email configuration

      const autoReplyInfo = await this.transporter.sendMail(autoReplyOptions);

      console.log('Auto-reply sent:', autoReplyInfo.messageId);    return {

      

      return { success: true, messageId: info.messageId };      contact: {    auth: {const EMAIL_CONFIG = {

    } catch (error) {

      console.error('Error sending contact email:', error);        subject: 'WSL Guide Contact: {{subject}}',

      return { success: false, error: error.message };

    }        html: `      user: process.env.SMTP_USER,  smtp: {

  }

          <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8fafc;">

  async testConnection() {

    try {            <div style="background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%); padding: 30px; border-radius: 12px 12px 0 0; text-align: center;">      pass: process.env.SMTP_PASS,    host: process.env.SMTP_HOST || 'smtp.gmail.com',

      await this.transporter.verify();

      console.log('✓ SMTP connection is ready');              <h1 style="color: white; margin: 0; font-size: 24px; font-weight: bold;">WSL Guide Contact Form</h1>

      return true;

    } catch (error) {              <p style="color: #e0e7ff; margin: 10px 0 0 0;">New message received</p>    },    port: parseInt(process.env.SMTP_PORT || '587'),

      console.error('✗ SMTP connection failed:', error.message);

      return false;            </div>

    }

  }              },    secure: process.env.SMTP_SECURE === 'true',

}

            <div style="background: white; padding: 30px; border-radius: 0 0 12px 12px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">

async function main() {

  const args = process.argv.slice(2);              <div style="margin-bottom: 20px; padding-bottom: 20px; border-bottom: 2px solid #f1f5f9;">  from: {    auth: {

  const command = args[0];

                  <h2 style="color: #1e293b; margin: 0 0 15px 0; font-size: 20px;">Contact Information</h2>

  const mailService = new WSLMailService();

                <p style="margin: 8px 0; color: #475569;"><strong>Name:</strong> {{name}}</p>    email: process.env.FROM_EMAIL,      user: process.env.SMTP_USER,

  switch (command) {

    case 'test':                <p style="margin: 8px 0; color: #475569;"><strong>Email:</strong> {{email}}</p>

      console.log('Testing SMTP connection...');

      const isConnected = await mailService.testConnection();                <p style="margin: 8px 0; color: #475569;"><strong>Subject:</strong> {{subject}}</p>    name: process.env.FROM_NAME || 'WSL Guide',      pass: process.env.SMTP_PASS,

      process.exit(isConnected ? 0 : 1);

                    </div>

    case 'send':

      if (args.length < 5) {                },    },

        console.error('Usage: node mail.js send <name> <email> <subject> <message>');

        process.exit(1);              <div style="margin-bottom: 20px;">

      }

                      <h3 style="color: #1e293b; margin: 0 0 15px 0; font-size: 18px;">Message</h3>  to: process.env.TO_EMAIL,  },

      const contactData = {

        name: args[1],                <div style="background: #f8fafc; padding: 20px; border-radius: 8px; border-left: 4px solid #3b82f6;">

        email: args[2],

        subject: args[3],                  <p style="margin: 0; color: #334155; line-height: 1.6; white-space: pre-wrap;">{{message}}</p>  siteUrl: process.env.SITE_URL || 'https://vinberg88.github.io',  from: {

        message: args[4],

        userAgent: 'CLI Script'                </div>

      };

                    </div>};    email: process.env.FROM_EMAIL,

      console.log('Sending contact email...');

      const result = await mailService.sendContactEmail(contactData);              

      

      if (result.success) {              <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0;">    name: process.env.FROM_NAME || 'WSL Guide',

        console.log('✓ Email sent successfully!');

        console.log('Message ID:', result.messageId);                <h4 style="color: #64748b; margin: 0 0 10px 0; font-size: 14px;">Technical Information</h4>

      } else {

        console.error('✗ Failed to send email:', result.error);                <p style="margin: 5px 0; color: #64748b; font-size: 12px;"><strong>User Agent:</strong> {{userAgent}}</p>// Email templates  },

        process.exit(1);

      }                <p style="margin: 5px 0; color: #64748b; font-size: 12px;"><strong>Timestamp:</strong> {{timestamp}}</p>

      break;

                    </div>const EMAIL_TEMPLATES = {  to: process.env.TO_EMAIL,

    default:

      console.log(`            </div>

WSL Guide Mail Script

          </div>  contactForm: {  siteUrl: process.env.SITE_URL || 'https://vinberg88.github.io',

Usage:

  node mail.js test                                - Test SMTP connection        `,

  node mail.js send <name> <email> <subject> <msg> - Send contact email

        text: `    subject: '📧 New Contact Form Submission - WSL Guide',};

Examples:

  node mail.js testWSL Guide - New Contact Form Message

  node mail.js send "John Doe" "john@example.com" "Help" "Need WSL help"

    html: (data) => `

Environment Variables (set in .env.local):

  SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSName: {{name}}

  FROM_EMAIL, TO_EMAIL

      `);Email: {{email}}      <!DOCTYPE html>// Email templates

      break;

  }Subject: {{subject}}

}

      <html>const EMAIL_TEMPLATES = {

module.exports = WSLMailService;

Message:

if (require.main === module) {

  main().catch(console.error);{{message}}      <head>  contactForm: {

}


Technical Info:        <meta charset="utf-8">    subject: '📧 New Contact Form Submission - WSL Guide',

User Agent: {{userAgent}}

Timestamp: {{timestamp}}        <title>New Contact Form Submission</title>    html: (data: any) => `

        `

      },        <style>      <!DOCTYPE html>

      autoReply: {

        subject: 'Thank you for contacting WSL Guide!',          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; }      <html>

        html: `

          <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8fafc;">          .container { max-width: 600px; margin: 0 auto; padding: 20px; }      <head>

            <div style="background: linear-gradient(135deg, #10b981 0%, #3b82f6 100%); padding: 30px; border-radius: 12px 12px 0 0; text-align: center;">

              <h1 style="color: white; margin: 0; font-size: 24px; font-weight: bold;">Thank You!</h1>          .header { background: linear-gradient(135deg, #0078d4, #1e88e5); color: white; padding: 20px; border-radius: 8px 8px 0 0; }        <meta charset="utf-8">

              <p style="color: #d1fae5; margin: 10px 0 0 0;">Your message has been received</p>

            </div>          .content { background: #f8f9fa; padding: 30px; border-radius: 0 0 8px 8px; }        <title>New Contact Form Submission</title>

            

            <div style="background: white; padding: 30px; border-radius: 0 0 12px 12px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">          .field { margin-bottom: 20px; }        <style>

              <p style="color: #374151; margin: 0 0 20px 0; font-size: 16px;">Hi {{name}},</p>

                        .label { font-weight: bold; color: #0078d4; display: block; margin-bottom: 5px; }          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; }

              <p style="color: #374151; margin: 0 0 20px 0; line-height: 1.6;">

                Thank you for reaching out to WSL Guide! We've received your message about "{{subject}}" and will get back to you as soon as possible.          .value { background: white; padding: 12px; border-radius: 4px; border: 1px solid #e0e0e0; }          .container { max-width: 600px; margin: 0 auto; padding: 20px; }

              </p>

                        .footer { text-align: center; margin-top: 30px; color: #666; font-size: 14px; }          .header { background: linear-gradient(135deg, #0078d4, #1e88e5); color: white; padding: 20px; border-radius: 8px 8px 0 0; }

              <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; border-left: 4px solid #0ea5e9; margin: 20px 0;">

                <p style="margin: 0; color: #0c4a6e; font-weight: 600;">Expected Response Time</p>          .terminal { background: #0c0c0c; color: #cccccc; padding: 15px; font-family: 'Courier New', monospace; border-radius: 4px; margin: 15px 0; }          .content { background: #f8f9fa; padding: 30px; border-radius: 0 0 8px 8px; }

                <p style="margin: 5px 0 0 0; color: #075985;">We typically respond within 24-48 hours during business days.</p>

              </div>        </style>          .field { margin-bottom: 20px; }

              

              <p style="color: #374151; margin: 20px 0; line-height: 1.6;">      </head>          .label { font-weight: bold; color: #0078d4; display: block; margin-bottom: 5px; }

                In the meantime, feel free to explore our comprehensive WSL guides and resources. If you have urgent technical questions, consider checking our troubleshooting section or visiting the WSL community forums.

              </p>      <body>          .value { background: white; padding: 12px; border-radius: 4px; border: 1px solid #e0e0e0; }

              

              <div style="text-align: center; margin: 30px 0;">        <div class="container">          .footer { text-align: center; margin-top: 30px; color: #666; font-size: 14px; }

                <a href="https://vinberg88.github.io" style="display: inline-block; background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%); color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: 600;">

                  Visit WSL Guide          <div class="header">          .terminal { background: #0c0c0c; color: #cccccc; padding: 15px; font-family: 'Courier New', monospace; border-radius: 4px; margin: 15px 0; }

                </a>

              </div>            <h1>🐧 WSL Guide - New Contact</h1>        </style>

              

              <p style="color: #6b7280; margin: 20px 0 0 0; font-size: 14px;">            <div class="terminal">      </head>

                Best regards,<br>

                The WSL Guide Team              <div style="color: #10b981;">user@wsl-guide:~$</div>      <body>

              </p>

            </div>              <div>📧 New message received</div>        <div class="container">

          </div>

        `,            </div>          <div class="header">

        text: `

Hi {{name}},          </div>            <h1>🐧 WSL Guide - New Contact</h1>



Thank you for reaching out to WSL Guide! We've received your message about "{{subject}}" and will get back to you as soon as possible.                      <div class="terminal">



Expected Response Time: We typically respond within 24-48 hours during business days.          <div class="content">              <div style="color: #10b981;">user@wsl-guide:~$</div>



In the meantime, feel free to explore our comprehensive WSL guides and resources at https://vinberg88.github.io            <div class="field">              <div>📧 New message received</div>



Best regards,              <span class="label">👤 Name:</span>            </div>

The WSL Guide Team

        `              <div class="value">${data.name}</div>          </div>

      }

    };            </div>          

  }

                      <div class="content">

  processTemplate(template, data) {

    let processed = template;            <div class="field">            <div class="field">

    Object.keys(data).forEach(key => {

      const regex = new RegExp(`{{${key}}}`, 'g');              <span class="label">📧 Email:</span>              <span class="label">👤 Name:</span>

      processed = processed.replace(regex, data[key] || '');

    });              <div class="value">${data.email}</div>              <div class="value">${data.name}</div>

    return processed;

  }            </div>            </div>



  async sendContactEmail(contactData) {                        

    const { name, email, subject, message, userAgent } = contactData;

                <div class="field">            <div class="field">

    const templateData = {

      name,              <span class="label">📝 Subject:</span>              <span class="label">📧 Email:</span>

      email,

      subject,              <div class="value">${data.subject}</div>              <div class="value">${data.email}</div>

      message,

      userAgent: userAgent || 'Not provided',            </div>            </div>

      timestamp: new Date().toISOString()

    };                        



    const mailOptions = {            <div class="field">            <div class="field">

      from: process.env.FROM_EMAIL || 'noreply@wslguide.dev',

      to: process.env.TO_EMAIL || 'admin@wslguide.dev',              <span class="label">💬 Message:</span>              <span class="label">📝 Subject:</span>

      subject: this.processTemplate(this.templates.contact.subject, templateData),

      html: this.processTemplate(this.templates.contact.html, templateData),              <div class="value" style="white-space: pre-wrap;">${data.message}</div>              <div class="value">${data.subject}</div>

      text: this.processTemplate(this.templates.contact.text, templateData),

    };            </div>            </div>



    try {                        

      const info = await this.transporter.sendMail(mailOptions);

      console.log('Contact email sent:', info.messageId);            <div class="field">            <div class="field">

      

      // Send auto-reply              <span class="label">🕒 Submitted:</span>              <span class="label">💬 Message:</span>

      const autoReplyOptions = {

        from: process.env.FROM_EMAIL || 'noreply@wslguide.dev',              <div class="value">${new Date().toLocaleString()}</div>              <div class="value" style="white-space: pre-wrap;">${data.message}</div>

        to: email,

        subject: this.templates.autoReply.subject,            </div>            </div>

        html: this.processTemplate(this.templates.autoReply.html, templateData),

        text: this.processTemplate(this.templates.autoReply.text, templateData),                        

      };

                  <div class="field">            <div class="field">

      const autoReplyInfo = await this.transporter.sendMail(autoReplyOptions);

      console.log('Auto-reply sent:', autoReplyInfo.messageId);              <span class="label">🌐 User Agent:</span>              <span class="label">🕒 Submitted:</span>

      

      return { success: true, messageId: info.messageId };              <div class="value">${data.userAgent || 'Not provided'}</div>              <div class="value">${new Date().toLocaleString()}</div>

    } catch (error) {

      console.error('Error sending contact email:', error);            </div>            </div>

      return { success: false, error: error.message };

    }          </div>            

  }

                      <div class="field">

  async testConnection() {

    try {          <div class="footer">              <span class="label">🌐 User Agent:</span>

      await this.transporter.verify();

      console.log('✓ SMTP connection is ready');            <p>This message was sent from the WSL Guide contact form.</p>              <div class="value">${data.userAgent || 'Not provided'}</div>

      return true;

    } catch (error) {            <p><a href="${EMAIL_CONFIG.siteUrl}">Visit WSL Guide</a></p>            </div>

      console.error('✗ SMTP connection failed:', error.message);

      return false;          </div>          </div>

    }

  }        </div>          

}

      </body>          <div class="footer">

// CLI Interface

async function main() {      </html>            <p>This message was sent from the WSL Guide contact form.</p>

  const args = process.argv.slice(2);

  const command = args[0];    `,            <p><a href="${EMAIL_CONFIG.siteUrl}">Visit WSL Guide</a></p>

  

  const mailService = new WSLMailService();    text: (data) => `          </div>



  switch (command) {WSL Guide - New Contact Form Submission        </div>

    case 'test':

      console.log('Testing SMTP connection...');      </body>

      const isConnected = await mailService.testConnection();

      process.exit(isConnected ? 0 : 1);Name: ${data.name}      </html>

      

    case 'send-contact':Email: ${data.email}    `,

      if (args.length < 5) {

        console.error('Usage: node mail.js send-contact <name> <email> <subject> <message>');Subject: ${data.subject}    text: (data: any) => `

        process.exit(1);

      }WSL Guide - New Contact Form Submission

      

      const contactData = {Message:

        name: args[1],

        email: args[2],${data.message}Name: ${data.name}

        subject: args[3],

        message: args[4],Email: ${data.email}

        userAgent: 'CLI Script'

      };Submitted: ${new Date().toLocaleString()}Subject: ${data.subject}

      

      console.log('Sending contact email...');User Agent: ${data.userAgent || 'Not provided'}

      const contactResult = await mailService.sendContactEmail(contactData);

      Message:

      if (contactResult.success) {

        console.log('✓ Contact email sent successfully!');---${data.message}

        console.log('Message ID:', contactResult.messageId);

      } else {This message was sent from the WSL Guide contact form.

        console.error('✗ Failed to send contact email:', contactResult.error);

        process.exit(1);Visit: ${EMAIL_CONFIG.siteUrl}Submitted: ${new Date().toLocaleString()}

      }

      break;    `,User Agent: ${data.userAgent || 'Not provided'}

      

    default:  },

      console.log(`

WSL Guide Mail Script  ---



Usage:  autoReply: {This message was sent from the WSL Guide contact form.

  node mail.js test                                          - Test SMTP connection

  node mail.js send-contact <name> <email> <subject> <msg>   - Send contact form email    subject: '✅ Thank you for contacting WSL Guide',Visit: ${EMAIL_CONFIG.siteUrl}



Examples:    html: (data) => `    `,

  node mail.js test

  node mail.js send-contact "John Doe" "john@example.com" "Help needed" "I need help with WSL setup"      <!DOCTYPE html>  },



Environment Variables:      <html>  

  SMTP_HOST     - SMTP server hostname (default: smtp.gmail.com)

  SMTP_PORT     - SMTP server port (default: 587)      <head>  autoReply: {

  SMTP_USER     - SMTP username

  SMTP_PASS     - SMTP password        <meta charset="utf-8">    subject: '✅ Thank you for contacting WSL Guide',

  FROM_EMAIL    - From email address (default: noreply@wslguide.dev)

  TO_EMAIL      - Default recipient email (default: admin@wslguide.dev)        <title>Thank you for your message</title>    html: (data: any) => `

      `);

      break;        <style>      <!DOCTYPE html>

  }

}          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; }      <html>



// Export for use in Next.js API routes          .container { max-width: 600px; margin: 0 auto; padding: 20px; }      <head>

module.exports = WSLMailService;

          .header { background: linear-gradient(135deg, #10b981, #059669); color: white; padding: 20px; border-radius: 8px 8px 0 0; }        <meta charset="utf-8">

// Run CLI if called directly

if (require.main === module) {          .content { background: #f0f9ff; padding: 30px; border-radius: 0 0 8px 8px; }        <title>Thank you for your message</title>

  main().catch(console.error);

}          .terminal { background: #0c0c0c; color: #cccccc; padding: 15px; font-family: 'Courier New', monospace; border-radius: 4px; margin: 15px 0; }        <style>

          .links { display: flex; gap: 15px; margin: 20px 0; flex-wrap: wrap; }          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; }

          .link { background: #0078d4; color: white; padding: 10px 15px; text-decoration: none; border-radius: 4px; display: inline-block; }          .container { max-width: 600px; margin: 0 auto; padding: 20px; }

          .footer { text-align: center; margin-top: 30px; color: #666; font-size: 14px; }          .header { background: linear-gradient(135deg, #10b981, #059669); color: white; padding: 20px; border-radius: 8px 8px 0 0; }

        </style>          .content { background: #f0f9ff; padding: 30px; border-radius: 0 0 8px 8px; }

      </head>          .terminal { background: #0c0c0c; color: #cccccc; padding: 15px; font-family: 'Courier New', monospace; border-radius: 4px; margin: 15px 0; }

      <body>          .links { display: flex; gap: 15px; margin: 20px 0; flex-wrap: wrap; }

        <div class="container">          .link { background: #0078d4; color: white; padding: 10px 15px; text-decoration: none; border-radius: 4px; display: inline-block; }

          <div class="header">          .footer { text-align: center; margin-top: 30px; color: #666; font-size: 14px; }

            <h1>🚀 Thank You, ${data.name}!</h1>        </style>

            <div class="terminal">      </head>

              <div style="color: #10b981;">user@wsl-guide:~$</div>      <body>

              <div>✅ Message received successfully</div>        <div class="container">

              <div style="color: #fbbf24;">⏳ Processing your request...</div>          <div class="header">

            </div>            <h1>🚀 Thank You, ${data.name}!</h1>

          </div>            <div class="terminal">

                        <div style="color: #10b981;">user@wsl-guide:~$</div>

          <div class="content">              <div>✅ Message received successfully</div>

            <p>Thanks for reaching out to WSL Guide! We've received your message about "<strong>${data.subject}</strong>" and will get back to you as soon as possible.</p>              <div style="color: #fbbf24;">⏳ Processing your request...</div>

                        </div>

            <p>While you wait, feel free to explore our comprehensive WSL resources:</p>          </div>

                      

            <div class="links">          <div class="content">

              <a href="${EMAIL_CONFIG.siteUrl}/installation" class="link">📦 Installation Guide</a>            <p>Thanks for reaching out to WSL Guide! We've received your message about "<strong>${data.subject}</strong>" and will get back to you as soon as possible.</p>

              <a href="${EMAIL_CONFIG.siteUrl}/configuration" class="link">⚙️ Configuration</a>            

              <a href="${EMAIL_CONFIG.siteUrl}/development" class="link">💻 Development Setup</a>            <p>While you wait, feel free to explore our comprehensive WSL resources:</p>

              <a href="${EMAIL_CONFIG.siteUrl}/troubleshooting" class="link">🔧 Troubleshooting</a>            

            </div>            <div class="links">

                          <a href="${EMAIL_CONFIG.siteUrl}/installation" class="link">📦 Installation Guide</a>

            <div class="terminal">              <a href="${EMAIL_CONFIG.siteUrl}/configuration" class="link">⚙️ Configuration</a>

              <div style="color: #10b981;">user@wsl-guide:~$</div>              <a href="${EMAIL_CONFIG.siteUrl}/development" class="link">💻 Development Setup</a>

              <div>echo "Happy WSL coding! 🐧"</div>              <a href="${EMAIL_CONFIG.siteUrl}/troubleshooting" class="link">🔧 Troubleshooting</a>

              <div style="color: #60a5fa;">Happy WSL coding! 🐧</div>            </div>

            </div>            

          </div>            <div class="terminal">

                        <div style="color: #10b981;">user@wsl-guide:~$</div>

          <div class="footer">              <div>echo "Happy WSL coding! 🐧"</div>

            <p>Best regards,<br>The WSL Guide Team</p>              <div style="color: #60a5fa;">Happy WSL coding! 🐧</div>

            <p><a href="${EMAIL_CONFIG.siteUrl}">WSL Guide</a> | Making WSL accessible for everyone</p>            </div>

          </div>          </div>

        </div>          

      </body>          <div class="footer">

      </html>            <p>Best regards,<br>The WSL Guide Team</p>

    `,            <p><a href="${EMAIL_CONFIG.siteUrl}">WSL Guide</a> | Making WSL accessible for everyone</p>

    text: (data) => `          </div>

Thank You, ${data.name}!        </div>

      </body>

Thanks for reaching out to WSL Guide! We've received your message about "${data.subject}" and will get back to you as soon as possible.      </html>

    `,

While you wait, feel free to explore our comprehensive WSL resources:    text: (data: any) => `

- Installation Guide: ${EMAIL_CONFIG.siteUrl}/installationThank You, ${data.name}!

- Configuration: ${EMAIL_CONFIG.siteUrl}/configuration  

- Development Setup: ${EMAIL_CONFIG.siteUrl}/developmentThanks for reaching out to WSL Guide! We've received your message about "${data.subject}" and will get back to you as soon as possible.

- Troubleshooting: ${EMAIL_CONFIG.siteUrl}/troubleshooting

While you wait, feel free to explore our comprehensive WSL resources:

Happy WSL coding! 🐧- Installation Guide: ${EMAIL_CONFIG.siteUrl}/installation

- Configuration: ${EMAIL_CONFIG.siteUrl}/configuration  

Best regards,- Development Setup: ${EMAIL_CONFIG.siteUrl}/development

The WSL Guide Team- Troubleshooting: ${EMAIL_CONFIG.siteUrl}/troubleshooting



WSL Guide | Making WSL accessible for everyoneHappy WSL coding! 🐧

${EMAIL_CONFIG.siteUrl}

    `,Best regards,

  },The WSL Guide Team

};

WSL Guide | Making WSL accessible for everyone

// Email service class${EMAIL_CONFIG.siteUrl}

class WSLMailService {    `,

  constructor() {  },

    this.transporter = nodemailer.createTransporter(EMAIL_CONFIG.smtp);};

  }

// Email service class

  async verifyConnection() {class WSLMailService {

    try {  private transporter: nodemailer.Transporter;

      await this.transporter.verify();

      console.log('✅ SMTP connection verified successfully');  constructor() {

      return true;    this.transporter = nodemailer.createTransporter(EMAIL_CONFIG.smtp);

    } catch (error) {  }

      console.error('❌ SMTP connection failed:', error);

      return false;  async verifyConnection(): Promise<boolean> {

    }    try {

  }      await this.transporter.verify();

      console.log('✅ SMTP connection verified successfully');

  async sendContactFormEmail(formData) {      return true;

    try {    } catch (error) {

      // Send notification to admin      console.error('❌ SMTP connection failed:', error);

      const adminMailOptions = {      return false;

        from: `"${EMAIL_CONFIG.from.name}" <${EMAIL_CONFIG.from.email}>`,    }

        to: EMAIL_CONFIG.to,  }

        subject: EMAIL_TEMPLATES.contactForm.subject,

        html: EMAIL_TEMPLATES.contactForm.html(formData),  async sendContactFormEmail(formData: any): Promise<boolean> {

        text: EMAIL_TEMPLATES.contactForm.text(formData),    try {

      };      // Send notification to admin

      const adminMailOptions = {

      await this.transporter.sendMail(adminMailOptions);        from: `"${EMAIL_CONFIG.from.name}" <${EMAIL_CONFIG.from.email}>`,

      console.log('✅ Admin notification sent successfully');        to: EMAIL_CONFIG.to,

        subject: EMAIL_TEMPLATES.contactForm.subject,

      // Send auto-reply to user        html: EMAIL_TEMPLATES.contactForm.html(formData),

      const userMailOptions = {        text: EMAIL_TEMPLATES.contactForm.text(formData),

        from: `"${EMAIL_CONFIG.from.name}" <${EMAIL_CONFIG.from.email}>`,      };

        to: formData.email,

        subject: EMAIL_TEMPLATES.autoReply.subject,      await this.transporter.sendMail(adminMailOptions);

        html: EMAIL_TEMPLATES.autoReply.html(formData),      console.log('✅ Admin notification sent successfully');

        text: EMAIL_TEMPLATES.autoReply.text(formData),

      };      // Send auto-reply to user

      const userMailOptions = {

      await this.transporter.sendMail(userMailOptions);        from: `"${EMAIL_CONFIG.from.name}" <${EMAIL_CONFIG.from.email}>`,

      console.log('✅ Auto-reply sent successfully');        to: formData.email,

        subject: EMAIL_TEMPLATES.autoReply.subject,

      return true;        html: EMAIL_TEMPLATES.autoReply.html(formData),

    } catch (error) {        text: EMAIL_TEMPLATES.autoReply.text(formData),

      console.error('❌ Failed to send emails:', error);      };

      return false;

    }      await this.transporter.sendMail(userMailOptions);

  }      console.log('✅ Auto-reply sent successfully');



  async sendCustomEmail(options) {      return true;

    try {    } catch (error) {

      const mailOptions = {      console.error('❌ Failed to send emails:', error);

        from: `"${EMAIL_CONFIG.from.name}" <${EMAIL_CONFIG.from.email}>`,      return false;

        ...options,    }

      };  }



      await this.transporter.sendMail(mailOptions);  async sendCustomEmail(options: {

      console.log('✅ Custom email sent successfully');    to: string;

      return true;    subject: string;

    } catch (error) {    html?: string;

      console.error('❌ Failed to send custom email:', error);    text?: string;

      return false;  }): Promise<boolean> {

    }    try {

  }      const mailOptions = {

}        from: `"${EMAIL_CONFIG.from.name}" <${EMAIL_CONFIG.from.email}>`,

        ...options,

// CLI interface      };

async function main() {

  const args = process.argv.slice(2);      await this.transporter.sendMail(mailOptions);

  const command = args[0];      console.log('✅ Custom email sent successfully');

      return true;

  const mailService = new WSLMailService();    } catch (error) {

      console.error('❌ Failed to send custom email:', error);

  switch (command) {      return false;

    case 'test':    }

      console.log('🧪 Testing email configuration...');  }

      const isConnected = await mailService.verifyConnection();}

      if (isConnected) {

        console.log('✅ Email service is ready to use!');// CLI interface

        process.exit(0);async function main() {

      } else {  const args = process.argv.slice(2);

        console.log('❌ Email service configuration needs attention.');  const command = args[0];

        process.exit(1);

      }  const mailService = new WSLMailService();

      break;

  switch (command) {

    case 'send-test':    case 'test':

      console.log('📧 Sending test contact form email...');      console.log('🧪 Testing email configuration...');

      const testData = {      const isConnected = await mailService.verifyConnection();

        name: 'Test User',      if (isConnected) {

        email: 'test@example.com',        console.log('✅ Email service is ready to use!');

        subject: 'Test Message from WSL Guide',        process.exit(0);

        message: 'This is a test message to verify the email system is working correctly.',      } else {

        userAgent: 'WSL Mail Script Test',        console.log('❌ Email service configuration needs attention.');

      };        process.exit(1);

            }

      const success = await mailService.sendContactFormEmail(testData);      break;

      if (success) {

        console.log('✅ Test emails sent successfully!');    case 'send-test':

        process.exit(0);      console.log('📧 Sending test contact form email...');

      } else {      const testData = {

        console.log('❌ Failed to send test emails.');        name: 'Test User',

        process.exit(1);        email: 'test@example.com',

      }        subject: 'Test Message from WSL Guide',

      break;        message: 'This is a test message to verify the email system is working correctly.',

        userAgent: 'WSL Mail Script Test',

    case 'help':      };

    default:      

      console.log(`      const success = await mailService.sendContactFormEmail(testData);

🐧 WSL Guide Mail Script      if (success) {

        console.log('✅ Test emails sent successfully!');

Usage: node scripts/mail.js <command>        process.exit(0);

      } else {

Commands:        console.log('❌ Failed to send test emails.');

  test        Test email configuration and connection        process.exit(1);

  send-test   Send a test contact form email      }

  help        Show this help message      break;



Environment Variables Required:    case 'help':

  SMTP_HOST     SMTP server hostname    default:

  SMTP_PORT     SMTP server port      console.log(`

  SMTP_USER     SMTP username🐧 WSL Guide Mail Script

  SMTP_PASS     SMTP password

  FROM_EMAIL    From email addressUsage: node scripts/mail.js <command>

  TO_EMAIL      Destination email address

Commands:

Example .env.local:  test        Test email configuration and connection

  SMTP_HOST=smtp.gmail.com  send-test   Send a test contact form email

  SMTP_PORT=587  help        Show this help message

  SMTP_USER=your-email@gmail.com

  SMTP_PASS=your-app-passwordEnvironment Variables Required:

  FROM_EMAIL=your-email@gmail.com  SMTP_HOST     SMTP server hostname

  TO_EMAIL=your-email@gmail.com  SMTP_PORT     SMTP server port

  SMTP_USER     SMTP username

For Gmail, you'll need to:  SMTP_PASS     SMTP password

1. Enable 2-factor authentication  FROM_EMAIL    From email address

2. Generate an App Password  TO_EMAIL      Destination email address

3. Use the App Password in SMTP_PASS

      `);Example .env.local:

      break;  SMTP_HOST=smtp.gmail.com

  }  SMTP_PORT=587

}  SMTP_USER=your-email@gmail.com

  SMTP_PASS=your-app-password

// Export for use in API routes  FROM_EMAIL=your-email@gmail.com

module.exports = { WSLMailService, EMAIL_TEMPLATES };  TO_EMAIL=your-email@gmail.com



// Run CLI if called directlyFor Gmail, you'll need to:

if (require.main === module) {1. Enable 2-factor authentication

  main().catch(console.error);2. Generate an App Password

}3. Use the App Password in SMTP_PASS
      `);
      break;
  }
}

// Export for use in API routes
export { WSLMailService, EMAIL_TEMPLATES };

// Run CLI if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch(console.error);
}