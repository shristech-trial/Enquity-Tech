# Fix Empty Name and Email in Admin Email

## The Problem
Your admin template is showing empty values for name and email because the template variables don't match the parameter names being sent.

## Solution

### Variables Being Sent to Admin Template:

```javascript
from_name: formData.fullName           // Student name
from_email: formData.email             // Student email
full_name: formData.fullName           // Backup for full_name
email: formData.email                  // Backup for email
phone: formData.phone                  // Student phone
course: courseName                     // Course name
experience: formData.experience        // Experience level
reply_to: formData.email               // Reply-to email
```

---

## How to Fix Your Admin Template (template_zhyap0k):

### In the Template Content, Use These Variables:

#### Option 1: Use `from_name` and `from_email` (EmailJS standard)
```
Student Name: {{from_name}}
Student Email: {{from_email}}
Phone: {{phone}}
Course: {{course}}
Experience: {{experience}}
```

#### Option 2: Use `full_name` and `email` (Alternative)
```
Student Name: {{full_name}}
Student Email: {{email}}
Phone: {{phone}}
Course: {{course}}
Experience: {{experience}}
```

---

## Step-by-Step Fix:

1. **Go to** https://dashboard.emailjs.com/admin/templates
2. **Open Admin Notification template** (template_zhyap0k)
3. **Click "Edit Content"** button
4. **Replace all template variables** with:
   - Replace `{{full_name}}` with `{{from_name}}`
   - Replace any existing `{{name}}` with `{{from_name}}`
   - Replace any existing `{{email_address}}` with `{{from_email}}`
   - Keep `{{phone}}`, `{{course}}`, `{{experience}}` as is
5. **Save the template**

---

## Correct HTML Template for Admin Email:

Replace your admin template content with this:

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; }
        .container { max-width: 600px; margin: 0 auto; }
        .header { background: #667eea; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; }
        .info-row { padding: 10px 0; border-bottom: 1px solid #eee; }
        .label { font-weight: bold; color: #667eea; min-width: 150px; display: inline-block; }
        .highlight { background: #fff3cd; padding: 15px; border-left: 4px solid #ffc107; margin: 20px 0; }
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
            
            <div class="highlight">
                <strong>⚠️ Action Required:</strong> Please review this enrollment and send the student their course access credentials within 24 hours.
            </div>
            
            <p>Best regards,<br>Enqti Technologies Enrollment System</p>
        </div>
    </div>
</body>
</html>
```

---

## Quick Checklist:

- ✅ Use `{{from_name}}` for student name
- ✅ Use `{{from_email}}` for student email
- ✅ Use `{{phone}}` for phone
- ✅ Use `{{course}}` for course name
- ✅ Use `{{experience}}` for experience level
- ✅ Save the template

After these changes, the admin email will show name and email correctly!
