# Email Setup for Contact Form - Outlook Configuration

## Quick Setup for info@wedotaxes.co

### Step 1: Create `.env.local` file

Create a `.env.local` file in your project root with:

```env
# Outlook Email Configuration
EMAIL_USER=info@wedotaxes.co
EMAIL_PASS=your-app-password-here
```

### Step 2: Generate Outlook App Password

Since you're using a custom domain (wedotaxes.co) with Outlook/Office 365, follow these steps:

1. **Go to Microsoft Account Security Settings:**
   - Visit: https://account.microsoft.com/security
   - Sign in with info@wedotaxes.co

2. **Enable Two-Factor Authentication (if not already enabled):**
   - Click on "Advanced security options"
   - Turn on "Two-step verification"

3. **Create App Password:**
   - Still in "Advanced security options"
   - Scroll down to "App passwords"
   - Click "Create a new app password"
   - Copy the generated password (it looks like: xxxx-xxxx-xxxx-xxxx)
   - Paste this password into your `.env.local` file as `EMAIL_PASS`

4. **Important:** Use the app password (NOT your regular Outlook password)

### Step 3: SMTP Configuration Details

The system automatically detects your email provider. For wedotaxes.co (Outlook/Office 365):
- **SMTP Server:** smtp.office365.com
- **Port:** 587
- **Security:** STARTTLS

### Step 4: Test the Configuration

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Go to your Contact Us page

3. Fill out and submit the test form

4. Check info@wedotaxes.co inbox for the inquiry email

## How it Works

1. User fills out the contact form on your website
2. Form data is sent to `/api/contact` endpoint
3. The API uses nodemailer with Outlook SMTP to send email
4. Email is sent to **info@wedotaxes.co**
5. Email includes formatted contact details and message
6. User sees success/error message

## Supported Email Providers

The API route now supports:
- ✅ **Outlook/Office 365** (outlook.com, hotmail.com, custom domains)
- ✅ Gmail (gmail.com)
- ✅ Custom SMTP servers

## Troubleshooting

### Common Issues:

1. **"Invalid credentials" error:**
   - Make sure you're using an App Password, not your regular password
   - Verify 2-factor authentication is enabled
   - Check that EMAIL_USER matches exactly: info@wedotaxes.co

2. **"Connection timeout" error:**
   - Verify your internet connection
   - Check if your hosting provider blocks port 587
   - Try port 465 with secure:true in the config

3. **Emails not arriving:**
   - Check your spam/junk folder
   - Verify the recipient email in route.ts is correct
   - Check server logs for detailed error messages

4. **Environment variables not loading:**
   - Make sure `.env.local` is in the project ROOT directory
   - Restart your development server after creating/editing `.env.local`
   - Never commit `.env.local` to version control

### Testing SMTP Connection

You can test your SMTP credentials using the test script:
```bash
node test-email.js
```

## Security Notes

- ✅ `.env.local` is in `.gitignore` (never commit credentials)
- ✅ Use App Passwords instead of regular passwords
- ✅ Enable 2-factor authentication on your email account
- ✅ Keep your app password secure and private

## Production Deployment

When deploying to production (Vercel, Netlify, etc.):

1. Add environment variables in your hosting platform's dashboard:
   ```
   EMAIL_USER=info@wedotaxes.co
   EMAIL_PASS=your-app-password-here
   ```

2. Never hardcode credentials in your code

3. Test the form after deployment to ensure it works in production

## Need Help?

If you encounter issues:
1. Check the browser console for client-side errors
2. Check server logs for detailed error messages
3. Verify your Outlook account settings
4. Contact Microsoft support for account-specific issues
