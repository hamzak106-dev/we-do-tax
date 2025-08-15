# Email Setup for Contact Form

## Setup Instructions

1. **Create a `.env.local` file** in your project root with the following variables:

```env
# Email Configuration
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password-here
```

2. **Get Gmail App Password:**
   - Go to your Google Account settings: https://myaccount.google.com/
   - Enable 2-factor authentication if not already enabled
   - Go to Security → App passwords
   - Generate a new app password for "Mail"
   - Use this app password in the `EMAIL_PASS` variable (NOT your regular Gmail password)

3. **Alternative Email Services:**
   If you prefer not to use Gmail, you can modify the API route (`src/app/api/contact/route.ts`) to use other services like:
   - Outlook/Hotmail
   - Yahoo
   - Custom SMTP server

## How it Works

1. When someone fills out the contact form and clicks "Submit"
2. The form data is sent to `/api/contact`
3. The API route uses nodemailer to send an email to `info@wedotax.com`
4. The email includes all the form details in a nicely formatted HTML email
5. The user sees a success message after the email is sent

## Testing

1. Start your development server: `npm run dev`
2. Go to the Contact Us page
3. Fill out the form and submit
4. Check your email at `info@wedotax.com` for the inquiry

## Troubleshooting

- Make sure your Gmail account has "Less secure app access" enabled or use an app password
- Check the browser console and server logs for any error messages
- Verify that your `.env.local` file is in the project root and contains the correct credentials 