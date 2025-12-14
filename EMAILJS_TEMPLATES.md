# EmailJS Template Content

## Template 1: Admin Notification Template
**Name:** enrollment_admin  
**Subject:** New Course Enrollment - {{course}}

### HTML Content:
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background: #f5f5f5;
        }
        .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 30px;
            border-radius: 8px 8px 0 0;
            text-align: center;
        }
        .header h1 {
            margin: 0;
            font-size: 28px;
        }
        .content {
            background: white;
            padding: 30px;
            border-radius: 0 0 8px 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .section {
            margin-bottom: 25px;
        }
        .section-title {
            font-size: 16px;
            font-weight: bold;
            color: #667eea;
            border-bottom: 2px solid #667eea;
            padding-bottom: 10px;
            margin-bottom: 15px;
        }
        .info-row {
            display: flex;
            justify-content: space-between;
            padding: 12px 0;
            border-bottom: 1px solid #eee;
        }
        .info-label {
            font-weight: 600;
            color: #555;
            min-width: 150px;
        }
        .info-value {
            color: #333;
        }
        .timestamp {
            text-align: center;
            color: #999;
            font-size: 12px;
            margin-top: 20px;
            padding-top: 20px;
            border-top: 1px solid #eee;
        }
        .highlight {
            background: #fff3cd;
            padding: 15px;
            border-left: 4px solid #ffc107;
            border-radius: 4px;
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🎓 New Course Enrollment</h1>
        </div>
        <div class="content">
            <p>Hello Admin,</p>
            <p>A new student has successfully enrolled in one of your courses. Here are the enrollment details:</p>
            
            <div class="section">
                <div class="section-title">Student Information</div>
                <div class="info-row">
                    <span class="info-label">Full Name:</span>
                    <span class="info-value">{{full_name}}</span>
                </div>
                <div class="info-row">
                    <span class="info-label">Email Address:</span>
                    <span class="info-value">{{email}}</span>
                </div>
                <div class="info-row">
                    <span class="info-label">Phone Number:</span>
                    <span class="info-value">{{phone}}</span>
                </div>
            </div>

            <div class="section">
                <div class="section-title">Course Information</div>
                <div class="info-row">
                    <span class="info-label">Course Name:</span>
                    <span class="info-value">{{course}}</span>
                </div>
                <div class="info-row">
                    <span class="info-label">Experience Level:</span>
                    <span class="info-value">{{experience}}</span>
                </div>
            </div>

            <div class="highlight">
                <strong>⚠️ Action Required:</strong> Please review this enrollment and send the student their course access credentials within 24 hours.
            </div>

            <p style="margin-top: 30px; color: #666;">
                Best regards,<br>
                <strong>Enquity Tech Enrollment System</strong>
            </p>

            <div class="timestamp">
                This is an automated message. Please do not reply to this email.
            </div>
        </div>
    </div>
</body>
</html>
```

---

## Template 2: Student Confirmation Template
**Name:** enrollment_confirmation  
**Subject:** Welcome to {{course}} - Your Enrollment is Confirmed! 🎉

### HTML Content:
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background: #f5f5f5;
        }
        .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 40px 30px;
            border-radius: 8px 8px 0 0;
            text-align: center;
        }
        .header h1 {
            margin: 0;
            font-size: 32px;
            margin-bottom: 10px;
        }
        .header p {
            margin: 0;
            font-size: 16px;
            opacity: 0.9;
        }
        .content {
            background: white;
            padding: 40px;
            border-radius: 0 0 8px 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .greeting {
            font-size: 18px;
            margin-bottom: 20px;
        }
        .confirmation-box {
            background: #f0f7ff;
            border: 2px solid #667eea;
            border-radius: 8px;
            padding: 20px;
            margin: 20px 0;
            text-align: center;
        }
        .confirmation-box h2 {
            color: #667eea;
            margin-top: 0;
        }
        .course-badge {
            display: inline-block;
            background: #667eea;
            color: white;
            padding: 12px 24px;
            border-radius: 25px;
            font-weight: 600;
            margin: 10px 0;
            font-size: 16px;
        }
        .next-steps {
            background: #f9f9f9;
            padding: 20px;
            border-radius: 8px;
            margin: 20px 0;
        }
        .next-steps h3 {
            color: #667eea;
            margin-top: 0;
        }
        .step {
            padding: 12px 0;
            padding-left: 30px;
            position: relative;
            margin-bottom: 15px;
        }
        .step:before {
            content: "✓";
            position: absolute;
            left: 0;
            color: #28a745;
            font-weight: bold;
            font-size: 18px;
        }
        .contact-info {
            background: #fff3cd;
            border-left: 4px solid #ffc107;
            padding: 15px;
            border-radius: 4px;
            margin: 20px 0;
        }
        .contact-info strong {
            display: block;
            margin-bottom: 8px;
        }
        .footer {
            text-align: center;
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #eee;
            font-size: 12px;
            color: #999;
        }
        .social-links {
            margin-top: 15px;
        }
        .social-links a {
            display: inline-block;
            margin: 0 10px;
            color: #667eea;
            text-decoration: none;
            font-weight: 600;
        }
        .cta-button {
            display: inline-block;
            background: #667eea;
            color: white;
            padding: 14px 32px;
            text-decoration: none;
            border-radius: 25px;
            font-weight: 600;
            margin: 20px 0;
            font-size: 16px;
        }
        .cta-button:hover {
            background: #764ba2;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🎉 Welcome {{full_name}}!</h1>
            <p>Your enrollment is confirmed</p>
        </div>
        <div class="content">
            <p class="greeting">Dear {{full_name}},</p>
            
            <p>Thank you for enrolling with Enquity Tech! We're excited to have you join our learning community. Your enrollment has been successfully processed and confirmed.</p>

            <div class="confirmation-box">
                <h2>Enrollment Confirmed ✓</h2>
                <p>You are now enrolled in:</p>
                <div class="course-badge">{{course}}</div>
            </div>

            <div class="next-steps">
                <h3>What's Next?</h3>
                <div class="step">
                    <strong>Access Your Course</strong><br>
                    You'll receive your course access credentials and login information within 24 hours via email.
                </div>
                <div class="step">
                    <strong>Complete Your Profile</strong><br>
                    Log in to your account and complete your learner profile to personalize your learning experience.
                </div>
                <div class="step">
                    <strong>Start Learning</strong><br>
                    Access course materials, assignments, and connect with fellow learners in your cohort.
                </div>
                <div class="step">
                    <strong>Get Support</strong><br>
                    Our support team is here to help! Check out our FAQ or contact us anytime.
                </div>
            </div>

            <center>
                <a href="https://your-website.com/dashboard" class="cta-button">Go to Your Dashboard</a>
            </center>

            <div class="contact-info">
                <strong>📧 Need Help?</strong>
                If you have any questions or need assistance, don't hesitate to reach out to our support team at support@enquitytech.com
            </div>

            <p>We're committed to providing you with the best learning experience possible. Our instructors and support team are dedicated to your success.</p>

            <p>Happy learning!<br>
            <strong>The Enquity Tech Team</strong></p>

            <div class="footer">
                <p>This is an automated confirmation email. Please do not reply to this message.</p>
                <p>&copy; 2025 Enquity Tech. All rights reserved.</p>
            </div>
        </div>
    </div>
</body>
</html>
```

---

## How to Use These Templates in EmailJS:

1. Go to your EmailJS dashboard → **Email Templates**
2. Create a new template for each
3. In the template editor:
   - **Subject line**: Copy the subject from above
   - **HTML mode**: Toggle ON (look for HTML option)
   - **Email content**: Paste the entire HTML content from above
4. Save the template
5. Copy the Template ID and add it to your `.env` file

## Variable Reference:
Both templates use these variables that are automatically populated:
- `{{full_name}}` - Student's full name
- `{{email}}` - Student's email address
- `{{phone}}` - Student's phone number
- `{{course}}` - Course name
- `{{experience}}` - Experience level (Beginner/Intermediate/Advanced)

## Customization Tips:
- Replace `https://your-website.com/dashboard` with your actual dashboard URL
- Replace `support@enquitytech.com` with your actual support email
- Update colors (currently using #667eea for primary) to match your brand
- Add your company logo or branding as needed
