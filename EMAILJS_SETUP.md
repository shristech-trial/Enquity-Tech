# EmailJS Setup Guide

This project uses EmailJS to send enrollment forms and confirmations. Follow these steps to set it up:

## Step 1: Create a Free EmailJS Account
1. Go to https://www.emailjs.com/
2. Sign up for a free account
3. Verify your email address

## Step 2: Set Up an Email Service
1. In the EmailJS dashboard, click "Email Services" in the left sidebar
2. Click "Add New Service"
3. Choose "Gmail" or your preferred email provider
4. Follow the setup instructions:
   - For Gmail: You'll need to create an App Password (not your regular Gmail password)
   - Connect your email account
5. Copy your **Service ID** (it looks like `service_xxxxx`)

## Step 3: Create Email Templates
You need to create 2 templates:

### Template 1: Admin Notification (for firstly4545@gmail.com)
1. Go to "Email Templates" in the sidebar
2. Click "Create New Template"
3. Name it: "enrollment_admin"
4. Set up the template with these variables:
   - `{{full_name}}` - Student's full name
   - `{{email}}` - Student's email
   - `{{phone}}` - Student's phone
   - `{{course}}` - Course name
   - `{{experience}}` - Experience level
   - `{{message}}` - Full message

Example template:
```
Subject: New Course Enrollment - {{course}}

New enrollment submission:

Name: {{full_name}}
Email: {{email}}
Phone: {{phone}}
Experience Level: {{experience}}
Course: {{course}}
```

5. Copy the **Template ID** (it looks like `template_xxxxx`)

### Template 2: Student Confirmation
1. Click "Create New Template" again
2. Name it: "enrollment_confirmation"
3. Set up the template with these variables:
   - `{{full_name}}` - Student's full name
   - `{{course}}` - Course name

Example template:
```
Subject: Enrollment Confirmation - {{course}}

Hello {{full_name}},

Thank you for enrolling in {{course}}!

Your enrollment has been received and processed. You'll receive your course access details within 24 hours.

Best regards,
Enqti Technologies Team
```

4. Copy the **Template ID** (it looks like `template_xxxxx`)

## Step 4: Get Your Public Key
1. Go to "Account" → "API Keys" in the EmailJS dashboard
2. Copy your **Public Key**

## Step 5: Configure Environment Variables
1. Create a `.env` file in the root directory (copy from `.env.example`)
2. Add your credentials:

```
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
VITE_EMAILJS_SERVICE_ID=service_xxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxx (admin notification template)
VITE_EMAILJS_CONFIRMATION_TEMPLATE_ID=template_xxxxx (confirmation template)
VITE_ENROLLMENT_EMAIL=firstly4545@gmail.com
```

## Step 6: Test the Setup
1. Start the development server: `npm run dev`
2. Navigate to a course and click "Enroll Now"
3. Fill out the enrollment form and submit
4. Check both your inbox (firstly4545@gmail.com) and the user's email for test messages

## Troubleshooting

### "Failed to send enrollment" error
- Check that all environment variables are correctly set in `.env`
- Verify that your EmailJS Service is connected and verified
- Check the browser console for more detailed error messages

### Emails not arriving
- Check spam/junk folder
- Verify email templates are set up correctly in EmailJS dashboard
- Make sure the Gmail App Password is correctly configured if using Gmail

### Free Tier Limits
EmailJS free tier allows up to 200 emails per month. If you need more, consider upgrading or setting up a backend service.

---

For more help: https://www.emailjs.com/docs/
