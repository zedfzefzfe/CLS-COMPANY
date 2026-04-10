# 📧 EmailJS Template Setup Guide

## Overview

This guide walks you through setting up a beautiful, professional email template in EmailJS for C.L.S Performance Énergétique contact form submissions.

---

## 📋 What's Inside

The template includes:
- ✅ Professional header with company branding
- ✅ Client information formatted in cards
- ✅ Message section with proper formatting
- ✅ Call-to-action button
- ✅ Company footer with links
- ✅ Fully responsive design for mobile & desktop
- ✅ Brand colors: Teal (#00d4ff) and Dark (#0f172a)

---

## 🔧 Step-by-Step Setup Instructions

### Step 1: Get Your EmailJS Credentials

1. Go to **[EmailJS Dashboard](https://dashboard.emailjs.com/)**
2. Login with your account
3. Copy these values:
   - **Service ID**: `service_ug24wki`
   - **Template ID**: `template_spo55eo`
   - **Public Key**: `X6VzaYLSuLrBDAZL1`

---

### Step 2: Create/Edit the Email Template in EmailJS

1. Go to **Admin → Email Templates**
2. Click **Create New Template** (or edit existing `template_spo55eo`)
3. Set Template Name: `Contact Form - CLS Performance`

---

### Step 3: Add the HTML Template

1. In the template editor, find the **"HTML Template"** section
2. Copy the entire content from `EMAILJS_TEMPLATE.html` file
3. Paste it into the HTML editor in EmailJS
4. **Important**: Make sure the template uses the correct variables (they are already set up correctly):

```
{{from_name}}      - Client's full name
{{from_email}}     - Client's email address
{{phone}}          - Client's phone number
{{message}}        - Client's message
```

---

### Step 4: Configure Template Variables

The template is already configured with the correct variable mapping. Ensure these match in your Contact form:

**In Contact.tsx, the `sendEmail` function sends:**
```javascript
{
  to_email: contactConfig.email,
  from_name: data.name,
  from_email: data.email,
  phone: data.phone,
  message: data.message,
}
```

**These must match the template variables:**
```html
{{from_name}}
{{from_email}}
{{phone}}
{{message}}
```

---

### Step 5: Preview & Test

1. Click **"Preview"** in the EmailJS template editor
2. Fill in sample data:
   - `from_name`: "Jean Dupont"
   - `from_email`: "jean@example.com"
   - `phone`: "+33612345678"
   - `message`: "J'aimerais en savoir plus sur vos services CEE"
3. Click **"Send Test Email"** to your own email
4. Verify the design and formatting

---

### Step 6: Customize the Footer

The template has placeholder URLs. Update these in the HTML:

**Find and replace:**
```html
<!-- Original -->
<p style="margin-top: 10px;">Site Web: <strong style="color: #00d4ff;">www.cls-performance.fr</strong></p>

<a href="https://www.cls-performance.fr/">Site Web</a>
<a href="https://www.cls-performance.fr/contact">Contact</a>
<a href="https://www.cls-performance.fr/mentions-legales">Mentions Légales</a>
```

**With your actual URLs** (if different)

---

### Step 7: Logo URL (Optional)

The template includes a logo reference:
```html
<img src="https://raw.githubusercontent.com/your-repo/public/images/logo.png" alt="C.L.S Performance Énergétique" class="logo">
```

**Options:**

**Option A: Use a hosted image (Recommended)**
1. Upload `logo.png` to a CDN or GitHub
2. Replace the URL above with your CDN/GitHub URL

**Option B: Remove the logo**
```html
<!-- Delete or comment out this line -->
<!-- <img src="..." alt="C.L.S Performance Énergétique" class="logo"> -->
```

---

## 📱 Features & Customization

### Color Scheme

The template uses your brand colors:

| Element | Color | Value |
|---------|-------|-------|
| Primary (CTAs, Accents) | Teal | `#00d4ff` |
| Dark Background | Dark Navy | `#0f172a` |
| Border Highlights | Primary | `#00d4ff` |

To change colors, find and replace:
- `#00d4ff` - Primary brand color
- `#0f172a` - Dark background color

### Typography

- **Font Family**: System fonts (Segoe UI, Roboto, etc.)
- **Header Size**: 24px
- **Body Size**: 14-15px
- **Mobile Responsive**: Yes ✅

### Responsive Design

The template automatically adjusts for:
- ✅ Desktop (600px+)
- ✅ Tablet (600px)
- ✅ Mobile (< 600px)

---

## 🧪 Testing Checklist

- [ ] Template preview shows correctly formatted layout
- [ ] All variables ({{from_name}}, {{from_email}}, etc.) appear filled in
- [ ] Test email received in your inbox
- [ ] CTA button ("Répondre au Client") works on click
- [ ] Images load properly
- [ ] Mobile view looks good (test on phone email apps)
- [ ] Links in footer are clickable

---

## 🚀 Integration with Contact Form

The integration is already set up in `src/sections/Contact.tsx`:

```typescript
const sendEmail = async (data: typeof formData) => {
  try {
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        to_email: contactConfig.email,
        from_name: data.name,
        from_email: data.email,
        phone: data.phone,
        message: data.message,
      }
    );
    return response.status === 200;
  } catch (error) {
    console.error('Email send error:', error);
    return false;
  }
};
```

---

## 🔔 What the Client Receives

When someone fills out the contact form and submits:

1. **Email to Customer** (Optional - can be set up as a separate template)
   - Confirmation message
   - Reference number
   - Expected response time

2. **Email to Admin** (This template)
   - Client information
   - Full message
   - Quick reply button

---

## 📧 Optional: Customer Confirmation Email

You can create a second template for customer confirmation:

```html
<div class="header">
    <h1>Merci pour votre demande!</h1>
    <p>Nous avons bien reçu votre message</p>
</div>

<div class="content">
    <p class="greeting">Bonjour {{from_name}},</p>
    
    <p>Votre demande a été enregistrée avec succès. 
    Notre équipe vous contactera sous peu.</p>
    
    <p><strong>Référence:</strong> #${new Date().getTime()}</p>
    <p><strong>Délai de réponse:</strong> 24-48 heures ouvrables</p>
</div>
```

---

## ⚙️ Troubleshooting

### Issue: Variables not showing up
**Solution**: 
- Check variable names match exactly: `{{from_name}}` not `{{name}}`
- Ensure sendEmail function in Contact.tsx uses the same keys

### Issue: Images not loading
**Solution**:
- Use absolute URLs (starting with `https://`)
- Test the URL directly in browser
- Use a reliable image hosting service (GitHub, Cloudinary, etc.)

### Issue: Template looks different in Gmail vs. Outlook
**Solution**:
- Email client compatibility varies
- Test in multiple email clients
- Stick to standard HTML/CSS (no flexbox, use tables for layout if needed)

### Issue: Styling not applying
**Solution**:
- Use inline CSS only (not `<style>` tags) for maximum compatibility
- Avoid CSS classes in email templates
- Double-check color values

---

## 📞 Support

For issues with:
- **EmailJS**: See [EmailJS Documentation](https://www.emailjs.com/docs/)
- **Form Integration**: Check `src/sections/Contact.tsx`
- **Design**: See `EMAILJS_TEMPLATE.html`

---

## ✅ Deployment Checklist

Before going live:

- [ ] Template successfully created in EmailJS
- [ ] Test email sent and received
- [ ] All variables populate correctly
- [ ] Links work properly
- [ ] Logo displays (if using one)
- [ ] Mobile preview looks good
- [ ] Footer information is accurate
- [ ] .env file has all credentials
- [ ] Contact form tested end-to-end
- [ ] WhatsApp integration also working

---

## 🎨 Template Preview

The template includes:
1. **Header**: Company branding + title
2. **Alert Box**: Notification of new message
3. **Client Info**: Name, Email, Phone in styled cards
4. **Message**: Client's message in a highlight box
5. **CTA**: "Reply to Client" button
6. **Summary**: Quick recap of request
7. **Footer**: Company info + links

All sections are responsive and mobile-friendly! 📱

---

**Created**: April 2026
**Version**: 1.0
**Status**: Ready for Production ✅

