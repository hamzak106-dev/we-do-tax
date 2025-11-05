# Contentful Setup Checklist

## ✅ Step-by-Step Verification Guide

### 1. **Check Your Space**
- Go to: https://app.contentful.com
- Make sure you're in the correct space
- Check your Space ID matches what's in `.env.local`:
  - Settings → API keys → Copy Space ID

### 2. **Verify API Keys**
- Go to: Settings → API keys
- Make sure you have:
  - ✅ **Space ID** (matches your `.env.local`)
  - ✅ **Content Delivery API - access token** (matches your `.env.local`)
- Make sure you're using the **Content Delivery API** token (not Management API)

### 3. **Check Content Type Exists**
- Go to: **Content model** (left sidebar)
- Look for your blog content type
- **What to check:**
  - ✅ Does it exist? (If not, create it)
  - ✅ What is the **API Identifier**? (This is what you use in code)
  - ✅ Is it **Published**? (Content types must be published)

### 4. **Verify Content Type API Identifier**
- Click on your content type
- Look at the **API Identifier** field (usually shown at the top)
- **This must match exactly** what you use in code
- Common names: `blog`, `Blog`, `blogPost`, `post`
- **Important:** API Identifier is case-sensitive!

### 5. **Check Required Fields**
Your content type should have these fields:

| Field Name | Field ID (API Identifier) | Type | Required |
|------------|---------------------------|------|----------|
| Title | `title` | Short text | ✅ Yes |
| Excerpt | `excerpt` | Short text | ✅ Yes |
| Content | `content` | Long text | ✅ Yes |
| Image | `image` | Media - Image | ✅ Yes |
| Category | `category` | Short text | ✅ Yes |
| Date | `date` | Date & time | ✅ Yes |
| Slug | `slug` | Short text | ✅ Yes |
| Published | `published` | Boolean | ❌ Optional |

**Important:** Field IDs (API Identifiers) must match exactly:
- `title` (lowercase)
- `excerpt` (lowercase)
- `content` (lowercase)
- `image` (lowercase)
- `category` (lowercase)
- `date` (lowercase)
- `slug` (lowercase)
- `published` (lowercase, optional)

### 6. **Check if Content Exists**
- Go to: **Content** (left sidebar)
- Look for entries using your content type
- **Important:** Entries must be **Published** (not just saved as draft)
- Check the publish status (green dot = published)

### 7. **Verify Environment**
- Make sure you're using the correct environment
- Default is usually `master` or `main`
- Check in: Settings → Environments

## 🔍 How to Find Your Content Type API Identifier

1. Go to Contentful → Content model
2. Click on your content type
3. Look at the top of the page - you'll see:
   - **Name**: "Blog" (this is the display name)
   - **API Identifier**: "blog" (this is what you use in code) ← **THIS IS WHAT MATTERS**

## 🐛 Common Issues

### Issue: "Content type not found"
**Solution:**
- Check the API Identifier matches exactly
- Make sure content type is **Published**
- Try different casing: `blog`, `Blog`, `blogPost`

### Issue: "Fields not found"
**Solution:**
- Check field IDs match exactly (lowercase)
- Make sure fields are **Published**
- Verify field types match what's expected

### Issue: "No entries found"
**Solution:**
- Make sure you have entries created
- Entries must be **Published** (not just saved)
- Check if entries are in the correct environment

## 📝 Quick Test

1. Open browser console (F12)
2. Go to your website's blogs page
3. Check console logs - you should see:
   - `✅ Successfully found content type: "blog"` (or whatever name works)
   - Or error messages showing what was tried

## 🎯 Most Common Fix

**99% of the time, the issue is:**
- Content type API Identifier doesn't match (check spelling/casing)
- Content type not published
- Entries not published

**Quick fix:**
1. Go to Content model
2. Find your content type
3. Check the API Identifier
4. Update your code to match exactly (or rename content type to `blog`)

