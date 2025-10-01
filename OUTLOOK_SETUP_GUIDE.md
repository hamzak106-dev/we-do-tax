# 🚀 Quick Outlook Email Setup Guide

## Follow these 3 simple steps:

### ✅ Step 1: Create your `.env.local` file

In your project root, create a file named `.env.local`:

```bash
# Copy the example file
cp .env.local.example .env.local
```

### ✅ Step 2: Get your Outlook App Password

1. Go to: https://account.microsoft.com/security
2. Sign in with **info@wedotaxes.co**
3. Click "Advanced security options"
4. Enable "Two-step verification" (if not already enabled)
5. Scroll to "App passwords" section
6. Click "Create a new app password"
7. **Copy the password** (looks like: xxxx-xxxx-xxxx-xxxx)

### ✅ Step 3: Update your `.env.local` file

Open `.env.local` and paste your app password:

```env
EMAIL_USER=info@wedotaxes.co
EMAIL_PASS=paste-your-app-password-here
```

**Important:** Remove the hyphens from the app password, or keep them - both work!

### ✅ Step 4: Test it!

```bash
# Start your server
npm run dev

# Go to your Contact Us page and submit a test form
# Check info@wedotaxes.co inbox
```

## 📧 What happens when someone submits the form?

- Form submission → Your API → Outlook SMTP
- Email arrives at **info@wedotaxes.co**
- Beautiful HTML formatted email with all contact details

## 🔒 Security

- ✅ `.env.local` is automatically ignored by git
- ✅ Never commit your app password
- ✅ Use app passwords, not regular passwords

## ❓ Need Help?

Check `EMAIL_SETUP.md` for detailed troubleshooting and configuration options.

---

**You're all set!** 🎉 Your contact form will now send emails to info@wedotaxes.co
