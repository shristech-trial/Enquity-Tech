# How to Get Your EmailJS Public Key

Follow these steps to get your EmailJS Public Key:

## Step 1: Go to EmailJS Website
1. Visit https://www.emailjs.com/
2. If you don't have an account yet, click **"Sign Up"** (it's free!)
3. If you already have an account, click **"Sign In"**

---

## Step 2: Sign Up or Log In
### New Users:
- Click "Sign Up"
- Enter your email address
- Create a password
- Click "Create account"
- Verify your email (check your inbox for verification link)

### Existing Users:
- Enter your email and password
- Click "Sign In"

---

## Step 3: Access Your Account Settings
1. Once logged in, you'll see your dashboard
2. Click on your **profile icon** in the top-right corner
3. Select **"Account"** from the dropdown menu

---

## Step 4: Find Your Public Key
1. In the Account page, look for the **"API Keys"** section
2. You'll see three keys displayed:
   - **Public Key** ← This is what you need!
   - Private Key (keep this secret!)
   - Access Token

---

## Step 5: Copy Your Public Key
1. Find the "Public Key" section
2. Click the **copy button** (clipboard icon) next to it
3. The key looks like: `xxxxxxxxxxxxxxxxxxxxxxxxxx` (a long string of characters)

---

## Step 6: Add to Your .env File
1. Open your project's `.env` file
2. Find the line: `VITE_EMAILJS_PUBLIC_KEY=your_public_key_here`
3. Replace `your_public_key_here` with your actual public key
4. Save the file

**Example:**
```
VITE_EMAILJS_PUBLIC_KEY=a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6
VITE_EMAILJS_SERVICE_ID=service_zdc5hxg
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_CONFIRMATION_TEMPLATE_ID=your_confirmation_template_id_here
VITE_ENROLLMENT_EMAIL=firstly4545@gmail.com
```

---

## Important Security Notes ⚠️

✅ **DO:**
- Keep your Public Key in `.env` file
- Share your Public Key publicly (it's meant to be public)
- Use environment variables for security

❌ **DON'T:**
- Never share your **Private Key** or **Access Token**
- Don't commit `.env` file to Git (add to `.gitignore`)
- Don't hardcode keys directly in your code

---

## Verify Your .env File is Set Up Correctly

After adding your public key, make sure your `.env` file looks like this:

```dotenv
VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key_here
VITE_EMAILJS_SERVICE_ID=service_zdc5hxg
VITE_EMAILJS_TEMPLATE_ID=template_xxxxx
VITE_EMAILJS_CONFIRMATION_TEMPLATE_ID=template_xxxxx
VITE_ENROLLMENT_EMAIL=firstly4545@gmail.com
```

---

## Troubleshooting

### "I can't find my Public Key"
- Make sure you're logged into EmailJS
- Go to Account → API Keys
- If you don't see API Keys section, check if you're in the correct dashboard

### "I lost my Public Key"
- You can always go back to Account → API Keys to view it again
- Click the copy button to get it

### "It says 'Unauthorized' when I submit the form"
- Check that your Public Key is correctly copied (no extra spaces)
- Make sure you restarted your dev server after adding the .env file
- Verify the key is in the correct format (long alphanumeric string)

---

## Next Steps

After getting your Public Key:
1. ✅ Add it to `.env` file
2. Get your Service ID (already in your `.env`: `service_zdc5hxg`)
3. Create your email templates in EmailJS
4. Get your Template IDs
5. Test the enrollment form!

---

Need help with other parts? Check:
- `EMAILJS_SETUP.md` - Complete setup guide
- `EMAILJS_TEMPLATES.md` - Email template content
