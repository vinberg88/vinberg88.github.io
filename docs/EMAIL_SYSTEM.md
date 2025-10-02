# WSL Guide Email System

This document explains the email functionality implemented in the WSL Guide website.

## Overview

The email system provides:
- Contact form for users to send messages
- Automatic email notifications to administrators
- Auto-reply emails to users
- CLI tool for testing and manual email sending

## Components

### 1. Contact Form (`src/components/ContactForm.tsx`)
- React form component with validation
- Handles user input and submission
- Shows success/error states
- Integrates with the API endpoint

### 2. API Route (`src/app/api/contact/route.ts`)
- Next.js API route handler
- Processes form submissions
- Sends emails using Nodemailer
- Returns JSON responses

### 3. Contact Page (`src/app/contact/page.tsx`)
- Full contact page with form
- Additional contact methods
- FAQ section
- Links to GitHub and community resources

### 4. CLI Mail Script (`scripts/mail.js`)
- Command-line utility for email testing
- Can send test emails
- Verify SMTP configuration
- Useful for debugging

## Setup Instructions

### 1. Environment Variables

Copy `.env.example` to `.env.local` and configure:

```bash
# SMTP Settings
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password

# Email Addresses
FROM_EMAIL=noreply@wslguide.dev
TO_EMAIL=admin@wslguide.dev
```

### 2. Gmail Configuration

For Gmail:
1. Enable 2-factor authentication
2. Generate an "App Password"
3. Use the app password in `SMTP_PASS`

### 3. Other Email Providers

- **Outlook**: `smtp-mail.outlook.com:587`
- **Yahoo**: `smtp.mail.yahoo.com:587`
- **Custom SMTP**: Use your provider's settings

## Usage

### Development Mode

The system uses Ethereal Email (fake SMTP) for development testing. No real emails are sent, but you can see the email previews in the console.

### Production Mode

Set `NODE_ENV=production` to use real SMTP settings.

### CLI Testing

```bash
# Test SMTP connection
node scripts/mail.js test

# Send test email
node scripts/mail.js send "Test User" "test@example.com" "Test Subject" "Test message"

# Show help
node scripts/mail.js
```

## Email Templates

The system includes responsive HTML email templates with:
- Professional WSL Guide branding
- Contact information display
- Auto-reply messages
- Technical information logging

## Features

- ✅ Contact form validation
- ✅ SPAM protection (basic validation)
- ✅ Auto-reply to users
- ✅ Admin notifications
- ✅ Mobile-responsive emails
- ✅ Development/production modes
- ✅ CLI testing tools
- ✅ Error handling

## Integration

The contact form is automatically included in the navigation menu and accessible at `/contact`. Users can also access alternative contact methods like GitHub issues and Reddit discussions.

## Troubleshooting

### Common Issues

1. **SMTP Authentication Failed**
   - Check username/password
   - Verify 2FA and app passwords for Gmail
   - Ensure less secure app access if needed

2. **Emails Not Sending**
   - Check SMTP host/port settings
   - Verify network connectivity
   - Check console for error messages

3. **Development Mode Issues**
   - Ethereal Email is used for testing
   - Check console for preview URLs
   - No real emails are sent in development

### Testing

1. Use the CLI tool to test SMTP connection
2. Check browser network tab for API errors
3. Monitor server console for email logs
4. Verify environment variables are loaded

## Security Considerations

- Environment variables are not committed to git
- Email validation prevents basic injection
- Rate limiting should be added for production
- Consider adding CAPTCHA for additional protection

## Future Enhancements

- Rate limiting for contact form
- CAPTCHA integration
- Email templates customization
- Newsletter subscription system
- Admin dashboard for managing contacts