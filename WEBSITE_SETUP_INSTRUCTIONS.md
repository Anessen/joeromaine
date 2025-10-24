# Joey Romaine Website - Setup & Maintenance Guide
## joeromaine.com - Complete Instructions

**Created:** October 23, 2025  
**Website Owner:** Joey Romaine (@Tank23x0)  
**Tagline:** 0-Day Drifter | Train for Hurricane - Drift like Water

---

## 🎉 WEBSITE IS READY!

Your personal website has been completely customized with all your information. All 6 pages are ready to go!

---

## 📁 WEBSITE STRUCTURE

```
/workspace/
├── index.html              ✅ Home page with bio and contact form
├── photography.html        ✅ Photography portfolio with 4 categories
├── videos.html            ✅ YouTube videos with embedded players
├── infosec.html           ✅ HackIt with Joe - InfoSec blog
├── kitchen.html           ✅ Super Foodie - Recipes page
├── diy.html               ✅ DIY Projects page
├── images/
│   ├── photography/       ✅ Created folders for: food, cities, nature, wild
│   ├── recipes/           ✅ Folder for recipe images
│   └── diy/               ✅ Folder for DIY project images
├── assets/                ✅ All CSS, JS, fonts intact
└── Documentation files    ✅ This file and the customization plan
```

---

## 🚀 QUICK START - IMMEDIATE ACTIONS NEEDED

### 1. Set Up Contact Form (5 minutes)

Your contact form needs a backend service. Here's how to set it up with Formspree (FREE):

1. Go to **https://formspree.io**
2. Sign up for a free account (no credit card needed)
3. Create a new form
4. Set the email to: `joeyromaine+websiteform1@pm.me`
5. Copy the form endpoint (looks like: `https://formspree.io/f/abc123xyz`)
6. Open `index.html` in a text editor
7. Find this line (around line 141):
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
8. Replace `YOUR_FORM_ID` with your actual form ID
9. Save the file

**That's it!** Your contact form will now work.

---

### 2. Add Your Social Media Handles

Update these placeholders in the following pages:

**Photography Page (photography.html):**
- Line ~90: Replace `YOUR_HANDLE` with your Instagram photography handle
- Line ~91: Replace `YOUR_HANDLE` with your TikTok handle

**Kitchen Page (kitchen.html):**
- Line ~64: Replace `YOUR_COOKING_HANDLE` with your cooking Instagram handle

**DIY Page (diy.html):**
- Line ~64: Replace `YOUR_DIY_HANDLE` with your DIY Instagram handle

If you don't have these accounts yet, that's fine! The placeholders will remind you to add them later.

---

## 📸 ADDING YOUR CONTENT

### Adding Photography

**Super Easy - Just Drop Images in Folders!**

1. Navigate to: `/workspace/images/photography/`
2. You'll see 4 folders:
   - `food/` - Food photography
   - `cities/` - Urban and city shots
   - `nature/` - Nature landscapes
   - `wild/` - Wildlife and wilderness

3. **Just drop your images** into these folders
4. Supported formats: JPG, PNG, WebP
5. The page is set up to display them automatically!

**Recommended image sizes:** 1200px wide for best quality

---

### Adding YouTube Videos

1. Open `videos.html` in your text editor
2. Find a video template section (lines 142-161 have a full template)
3. **Copy the entire `<div class="video-entry">` section**
4. Paste it where you want the new video
5. **Get your YouTube video ID:**
   - From URL: `youtube.com/watch?v=ABC123`
   - The ID is: `ABC123`
6. Replace `VIDEO_ID_HERE` in the iframe with your ID
7. Update:
   - Category (ENGINEERING, COOKING, DIY, SECURITY, FITNESS)
   - Title
   - Description
   - Date

**To change a video URL** (if YouTube takes it down):
- Just update the VIDEO_ID in the iframe - that's it!

---

### Adding InfoSec Blog Posts

1. Open `infosec.html`
2. Find the blog post template (lines 141-162)
3. **Copy the entire `<div class="blog-post">` section**
4. Paste it at the top of the blog posts area
5. Update:
   - Category tag and color
   - Title
   - Date
   - Summary
   - Content
   - Tags

**Categories Available:**
- VULNERABILITY RESEARCH (blue)
- PENETRATION TESTING (red)
- TOOL DEVELOPMENT (purple)
- SOCIAL ENGINEERING (orange)
- IOT SECURITY (teal)
- WIRELESS SECURITY (dark gray)

---

### Adding Recipes (Super Foodie)

1. Open `kitchen.html`
2. Find the recipe template (lines 67-127)
3. **Copy the entire `<div class="recipe-card">` section**
4. Paste it where you want the recipe
5. Update:
   - Difficulty level (EASY, INTERMEDIATE, ADVANCED)
   - Recipe title
   - Prep/cook times and servings
   - Description
   - Video ID
   - Ingredients
   - Instructions
   - Chef's tips
6. Add recipe image to `/images/recipes/`
7. Create a PDF version and link it (instructions in template)

---

### Adding DIY Projects

1. Open `diy.html`
2. Find the project template (lines 68-149)
3. **Copy the entire `<div class="project-card">` section**
4. Paste it where you want the project
5. Update:
   - Difficulty level
   - Category
   - Project details
   - Video ID
   - Tools and materials lists
   - Instructions
   - Tips and safety notes
6. Add project images to `/images/diy/`

---

## 🌐 DEPLOYING YOUR WEBSITE

### Option 1: GitHub Pages (FREE & Easy)

1. Create a GitHub account if you don't have one
2. Create a new repository called `joeromaine.com`
3. Upload all your website files
4. Go to Settings → Pages
5. Enable GitHub Pages from main branch
6. Your site will be live at: `yourusername.github.io/joeromaine.com`

### Option 2: Netlify (FREE & Easy)

1. Go to **https://netlify.com**
2. Sign up for free account
3. Drag and drop your website folder
4. Done! Site is live instantly
5. Connect your domain joeromaine.com in settings

### Option 3: Traditional Web Hosting

1. Purchase hosting (Bluehost, SiteGround, etc.)
2. Upload files via FTP
3. Point your domain to hosting
4. Done!

---

## 🔧 MAINTENANCE & UPDATES

### Weekly:
- Check contact form for new messages
- Add new content (videos, photos, blog posts, recipes, projects)

### Monthly:
- Update social media links if you create new accounts
- Add new projects/content
- Check all YouTube embeds are working

### As Needed:
- Replace YouTube video IDs if videos get taken down
- Update contact information
- Add new sections or pages

---

## 📝 CONTENT TEMPLATES

All pages have built-in templates with detailed instructions:

- **Videos:** Copy the video-entry div, update VIDEO_ID and details
- **Blog Posts:** Copy the blog-post div, update content
- **Recipes:** Copy the recipe-card div, add ingredients and instructions
- **DIY Projects:** Copy the project-card div, add tools and steps

Each template includes:
- ✅ Clear instructions in the HTML comments
- ✅ Example color codes for categories
- ✅ Placeholder sections to fill in
- ✅ Professional formatting

---

## 🎨 CUSTOMIZATION

### Changing Colors

All color schemes are defined in CSS. Current theme uses:
- Teal/Green: Primary buttons and highlights
- Blue: Security/tech content
- Red: Cooking/food content
- Orange: DIY projects
- Purple: Advanced content

To change, edit `assets/css/main.css`

### Adding New Pages

1. Copy any existing HTML file
2. Update the `<title>` tag
3. Change `current_page_item` class in nav to match
4. Update content sections
5. Add link to navigation in all pages

---

## 🛡️ SECURITY BEST PRACTICES

1. **Never publish passwords or API keys** in your code
2. **Use HTTPS** - most hosts provide free SSL
3. **Keep Formspree endpoint private** - it's in the HTML but monitor for spam
4. **Back up your site regularly** - keep a copy of all files
5. **Test all forms** before going live

---

## 📱 MOBILE RESPONSIVENESS

Your site is fully responsive and works on:
- ✅ Desktop (all sizes)
- ✅ Tablets (iPad, Android tablets)
- ✅ Mobile phones (all sizes)
- ✅ Different browsers (Chrome, Firefox, Safari, Edge)

No extra work needed - it's already built in!

---

## 🐛 TROUBLESHOOTING

### Contact Form Not Working
- ✅ Make sure you set up Formspree and replaced YOUR_FORM_ID
- ✅ Check your email (joeyromaine+websiteform1@pm.me) for submissions
- ✅ Check Formspree dashboard for blocked submissions

### YouTube Videos Not Showing
- ✅ Make sure you copied just the video ID, not the full URL
- ✅ Format should be: `youtube.com/embed/VIDEO_ID`
- ✅ Check video is not private or deleted

### Images Not Displaying
- ✅ Check file paths match exactly (case-sensitive)
- ✅ Ensure images are in correct folder
- ✅ Supported formats: JPG, PNG, WebP, GIF

### Navigation Not Working
- ✅ Make sure all HTML files are in the same root directory
- ✅ Check file names match exactly (case-sensitive)

---

## 📞 NEED HELP?

If you run into issues:

1. **Check the HTML comments** - detailed instructions in each file
2. **Review the customization plan** - see WEBSITE_CUSTOMIZATION_PLAN.md
3. **Google specific errors** - HTML/CSS issues are well-documented
4. **Test locally first** - open HTML files in browser before uploading

---

## ✅ PRE-LAUNCH CHECKLIST

Before going live, check:

- [ ] Contact form Formspree ID updated
- [ ] All placeholder social media handles updated (or left as placeholders)
- [ ] Test contact form - send yourself a message
- [ ] Add at least one item to each category (photo, video, blog post, recipe, project)
- [ ] Test all navigation links
- [ ] Test on mobile device
- [ ] Review all content for typos
- [ ] Add your actual YouTube videos (update VIDEO_ID_HERE)
- [ ] Check all external links work (GitHub, Twitter, etc.)
- [ ] Add Google Analytics if desired (optional)
- [ ] Set up domain name (joeromaine.com)
- [ ] Configure SSL certificate (HTTPS)

---

## 🎯 NEXT STEPS

1. **RIGHT NOW:**
   - Set up Formspree contact form (5 min)
   - Update social media placeholders (5 min)
   - Add one piece of content to each page to test (30 min)

2. **THIS WEEK:**
   - Add your actual photos to photography folders
   - Add 3-5 YouTube videos with real IDs
   - Write one blog post for HackIt with Joe
   - Add one recipe to Super Foodie
   - Add one DIY project

3. **THIS MONTH:**
   - Deploy website to hosting
   - Set up domain (joeromaine.com)
   - Promote on social media
   - Continue adding content regularly

---

## 🎉 YOU'RE READY!

Your website is complete and ready to launch. All the hard work is done - now it's just about adding your content and going live!

**Remember:** The templates make it easy to add new content. Just copy, paste, and update!

**Good luck with your website!**

---

**Website Built:** October 23, 2025  
**Template:** ZeroFour by HTML5 UP  
**Customized for:** Joey Romaine - 0-Day Drifter  
**Domain:** joeromaine.com

---

## 📚 Additional Resources

- **HTML5 UP Template Docs:** https://html5up.net
- **Formspree Docs:** https://help.formspree.io
- **YouTube Embed Guide:** https://support.google.com/youtube/answer/171780
- **Web Hosting Comparison:** https://www.hostingadvice.com

---

**END OF SETUP GUIDE**

*Keep this file for reference - you'll need it when updating your site!*
