# EmailJS Template Setup - Complete Guide

The error "The recipients address is empty" means your template's "Send To" field is not configured correctly.

## Critical: How to Fix the Templates

### For Both Templates:

1. Go to https://dashboard.emailjs.com/admin/templates
2. Click on your template (`template_zhyap0k` for admin, `template_6w3uxba` for confirmation)
3. **IMPORTANT**: Set the "Send To" field correctly (see below)

---

## Template 1: Admin Notification (template_zhyap0k)

### Step 1: Set Up the "Send To" Field
1. In the template editor, look for the **"Send To"** field at the top
2. Enter: `{{to_email}}`
3. This will use the `to_email` variable from the form data

### Step 2: Configure Template Variables
In the template content area, use these variables:

```
From Name: {{from_name}}
From Email: {{from_email}}
Phone: {{phone}}
Course: {{course}}
Experience: {{experience}}
Message: {{message}}
Reply-To: {{reply_to}}
```

### Step 3: Template HTML

**Subject:**
```
New Course Enrollment - {{course}}
```

**HTML Content:**
```html
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; }
        .container { max-width: 600px; margin: 0 auto; }
        .header { background: #667eea; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; }
        .info-row { padding: 10px 0; border-bottom: 1px solid #eee; }
        .label { font-weight: bold; color: #667eea; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🎓 New Course Enrollment</h1>
        </div>
        <div class="content">
            <h2>Student Information</h2>
            <div class="info-row">
                <span class="label">Full Name:</span> {{from_name}}
            </div>
            <div class="info-row">
                <span class="label">Email:</span> {{from_email}}
            </div>
            <div class="info-row">
                <span class="label">Phone:</span> {{phone}}
            </div>
            
            <h2>Course Information</h2>
            <div class="info-row">
                <span class="label">Course:</span> {{course}}
            </div>
            <div class="info-row">
                <span class="label">Experience Level:</span> {{experience}}
            </div>
            
            <p style="margin-top: 30px; padding: 15px; background: #fff3cd; border-left: 4px solid #ffc107;">
                <strong>Action Required:</strong> Please send this student their course access credentials within 24 hours.
            </p>
            
            <p style="margin-top: 20px; color: #999; font-size: 12px;">
                This is an automated message from the Enquity Tech enrollment system.
            </p>
        </div>
    </div>
</body>
</html>
```

---

## Template 2: Confirmation (template_6w3uxba)

### Step 1: Set Up the "Send To" Field
1. In the template editor, look for the **"Send To"** field at the top
2. Enter: `{{to_email}}`
3. This will send to the student's email address

### Step 2: Configure Template Variables
Use these variables in your template:

```
To Email: {{to_email}}
User Name: {{user_name}}
Course Name: {{course_name}}
```

### Step 3: Template HTML

**Subject:**
```
Welcome to {{course_name}} - Your Enrollment is Confirmed! 🎉
```

**HTML Content:**
```html
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; }
        .container { max-width: 600px; margin: 0 auto; }
        .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 40px 20px; text-align: center; }
        .header h1 { margin: 0; font-size: 28px; }
        .content { padding: 40px 20px; }
        .confirmation-box { background: #f0f7ff; border: 2px solid #667eea; padding: 20px; text-align: center; margin: 20px 0; border-radius: 8px; }
        .next-steps { background: #f9f9f9; padding: 20px; margin: 20px 0; border-radius: 8px; }
        .step { padding: 10px 0; }
        .step:before { content: "✓ "; color: #28a745; font-weight: bold; }
        .cta { background: #667eea; color: white; padding: 12px 24px; text-decoration: none; border-radius: 25px; display: inline-block; margin: 20px 0; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🎉 Welcome {{user_name}}!</h1>
            <p>Your enrollment is confirmed</p>
        </div>
        <div class="content">
            <p>Hello {{user_name}},</p>
            <p>Thank you for enrolling with Enquity Tech! We're excited to have you join our learning community.</p>
            
            <div class="confirmation-box">
                <h2>Enrollment Confirmed ✓</h2>
                <p>You are now enrolled in:</p>
                <p style="font-size: 18px; font-weight: bold; margin: 10px 0;">{{course_name}}</p>
            </div>
            
            <div class="next-steps">
                <h3>What's Next?</h3>
                <div class="step">Access your course within 24 hours</div>
                <div class="step">Complete your learner profile</div>
                <div class="step">Check course materials and assignments</div>
                <div class="step">Connect with fellow learners</div>
            </div>
            
            <a href="https://your-website.com" class="cta">Go to Dashboard</a>
            
            <p style="margin-top: 30px; padding: 15px; background: #fff3cd; border-left: 4px solid #ffc107;">
                <strong>📧 Need Help?</strong> Reply to this email or contact support@enquitytech.com
            </p>
            
            <p>Happy learning!<br><strong>The Enquity Tech Team</strong></p>
            
            <p style="margin-top: 30px; color: #999; font-size: 12px;">
                This is an automated confirmation email. Please do not reply directly to this message.
            </p>
        </div>
    </div>
</body>
</html>
```

---

## Step-by-Step Template Creation

### For Admin Notification Template:

1. Go to Dashboard → Email Templates
2. Open or create template `template_zhyap0k`
3. **Send To:** `{{to_email}}`
4. **Subject:** `New Course Enrollment - {{course}}`
5. Copy and paste the Admin HTML above
6. Save

### For Confirmation Template:

1. Go to Dashboard → Email Templates  
2. Open or create template `template_6w3uxba`
3. **Send To:** `{{to_email}}`
4. **Subject:** `Welcome to {{course_name}} - Your Enrollment is Confirmed! 🎉`
5. Copy and paste the Confirmation HTML above
6. Save

---

## Testing

After setting up templates:

1. Go back to your enrollment page
2. Fill in the form
3. Click "Complete Enrollment"
4. Check your email (firstly4545@gmail.com) for the admin notification
5. Check the test email address you entered for the confirmation

---

## Common Issues

**"Recipients address is empty"**
- Make sure "Send To" field is set to `{{to_email}}`
- The variable name must match exactly (case-sensitive)

**"Template variables not showing"**
- Ensure variable names match what you're sending from the code
- Variable names sent: `to_email`, `from_name`, `from_email`, `phone`, `course`, `experience`, `user_name`, `course_name`

**Emails still not arriving**
- Check spam/junk folder
- Verify email service is connected in Dashboard → Email Services
- Test with a simple template first to verify service works

---

## Troubleshooting Checklist

- ✅ Template ID in `.env` matches your template ID
- ✅ "Send To" field contains `{{to_email}}`
- ✅ Email Service is connected and verified
- ✅ Template variables match the parameter names exactly
- ✅ Restarted dev server after creating templates
