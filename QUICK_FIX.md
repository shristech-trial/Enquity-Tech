# Quick Fix for EmailJS Templates

## The Issue
Your "To Email" field shows `{{email}}` but the code is sending `{{to_email}}`

## The Fix

### For Admin Notification Template (template_zhyap0k):

**In the "To Email" field**, change from:
```
{{email}}
```

To:
```
{{to_email}}
```

**Subject should be:**
```
New Course Enrollment - {{course}}
```

**Make sure the template variables in Content tab include:**
- `{{to_email}}` - recipient email
- `{{from_name}}` - student name
- `{{from_email}}` - student email  
- `{{phone}}` - student phone
- `{{course}}` - course name
- `{{experience}}` - experience level

---

### For Confirmation Template (template_6w3uxba):

**In the "To Email" field:**
```
{{to_email}}
```

**Subject:**
```
Welcome to {{course_name}} - Your Enrollment is Confirmed! 🎉
```

**Template variables:**
- `{{to_email}}` - student email
- `{{user_name}}` - student name
- `{{course_name}}` - course name

---

## Steps to Update:

1. **Open Admin Notification template** (template_zhyap0k)
2. **Find the "To Email" field** on the right side
3. **Clear it** and type: `{{to_email}}`
4. **Click Save**
5. **Repeat for Confirmation template** (template_6w3uxba)

That's it! The emails should now work.
