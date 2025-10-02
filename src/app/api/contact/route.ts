import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Configure nodemailer transporter
const createTransporter = () => {
  // For development, use Ethereal Email (fake SMTP)
  // For production, configure with your actual SMTP settings
  if (process.env.NODE_ENV === 'production') {
    return nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })
  } else {
    // Development - use Ethereal Email
    return nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      secure: false,
      auth: {
        user: 'ethereal.user@ethereal.email',
        pass: 'ethereal.pass',
      },
    })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, subject, message, userAgent } = body

    // Basic validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    const transporter = createTransporter()

    // Email content
    const mailOptions = {
      from: process.env.FROM_EMAIL || 'noreply@wslguide.dev',
      to: process.env.TO_EMAIL || 'admin@wslguide.dev',
      subject: `WSL Guide Contact: ${subject}`,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8fafc;">
          <div style="background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%); padding: 30px; border-radius: 12px 12px 0 0; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px; font-weight: bold;">WSL Guide Contact Form</h1>
            <p style="color: #e0e7ff; margin: 10px 0 0 0;">New message received</p>
          </div>
          
          <div style="background: white; padding: 30px; border-radius: 0 0 12px 12px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
            <div style="margin-bottom: 20px; padding-bottom: 20px; border-bottom: 2px solid #f1f5f9;">
              <h2 style="color: #1e293b; margin: 0 0 15px 0; font-size: 20px;">Contact Information</h2>
              <p style="margin: 8px 0; color: #475569;"><strong>Name:</strong> ${name}</p>
              <p style="margin: 8px 0; color: #475569;"><strong>Email:</strong> ${email}</p>
              <p style="margin: 8px 0; color: #475569;"><strong>Subject:</strong> ${subject}</p>
            </div>
            
            <div style="margin-bottom: 20px;">
              <h3 style="color: #1e293b; margin: 0 0 15px 0; font-size: 18px;">Message</h3>
              <div style="background: #f8fafc; padding: 20px; border-radius: 8px; border-left: 4px solid #3b82f6;">
                <p style="margin: 0; color: #334155; line-height: 1.6; white-space: pre-wrap;">${message}</p>
              </div>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
              <h4 style="color: #64748b; margin: 0 0 10px 0; font-size: 14px;">Technical Information</h4>
              <p style="margin: 5px 0; color: #64748b; font-size: 12px;"><strong>User Agent:</strong> ${userAgent || 'Not provided'}</p>
              <p style="margin: 5px 0; color: #64748b; font-size: 12px;"><strong>Timestamp:</strong> ${new Date().toISOString()}</p>
            </div>
          </div>
        </div>
      `,
      text: `
WSL Guide - New Contact Form Message

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}

Technical Info:
User Agent: ${userAgent || 'Not provided'}
Timestamp: ${new Date().toISOString()}
      `,
    }

    // Send email
    const info = await transporter.sendMail(mailOptions)
    
    console.log('Message sent: %s', info.messageId)
    
    // Send auto-reply to user
    const autoReplyOptions = {
      from: process.env.FROM_EMAIL || 'noreply@wslguide.dev',
      to: email,
      subject: 'Thank you for contacting WSL Guide!',
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8fafc;">
          <div style="background: linear-gradient(135deg, #10b981 0%, #3b82f6 100%); padding: 30px; border-radius: 12px 12px 0 0; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px; font-weight: bold;">Thank You!</h1>
            <p style="color: #d1fae5; margin: 10px 0 0 0;">Your message has been received</p>
          </div>
          
          <div style="background: white; padding: 30px; border-radius: 0 0 12px 12px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
            <p style="color: #374151; margin: 0 0 20px 0; font-size: 16px;">Hi ${name},</p>
            
            <p style="color: #374151; margin: 0 0 20px 0; line-height: 1.6;">
              Thank you for reaching out to WSL Guide! We've received your message about "${subject}" and will get back to you as soon as possible.
            </p>
            
            <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; border-left: 4px solid #0ea5e9; margin: 20px 0;">
              <p style="margin: 0; color: #0c4a6e; font-weight: 600;">Expected Response Time</p>
              <p style="margin: 5px 0 0 0; color: #075985;">We typically respond within 24-48 hours during business days.</p>
            </div>
            
            <p style="color: #374151; margin: 20px 0; line-height: 1.6;">
              In the meantime, feel free to explore our comprehensive WSL guides and resources. If you have urgent technical questions, consider checking our troubleshooting section or visiting the WSL community forums.
            </p>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="https://vinberg88.github.io" style="display: inline-block; background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%); color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: 600;">
                Visit WSL Guide
              </a>
            </div>
            
            <p style="color: #6b7280; margin: 20px 0 0 0; font-size: 14px;">
              Best regards,<br>
              The WSL Guide Team
            </p>
          </div>
        </div>
      `,
      text: `
Hi ${name},

Thank you for reaching out to WSL Guide! We've received your message about "${subject}" and will get back to you as soon as possible.

Expected Response Time: We typically respond within 24-48 hours during business days.

In the meantime, feel free to explore our comprehensive WSL guides and resources at https://vinberg88.github.io

Best regards,
The WSL Guide Team
      `,
    }

    await transporter.sendMail(autoReplyOptions)

    return NextResponse.json(
      { 
        message: 'Message sent successfully!',
        messageId: info.messageId 
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    )
  }
}