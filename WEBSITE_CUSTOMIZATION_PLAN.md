# Personal Website Customization Plan

## Overview
Converting the ZeroFour HTML5 template into a personal website with 5 main sections:
1. **Home Page** - Main landing page with contact form
2. **Photography** - Portfolio and presentation
3. **Videos** - YouTube video directory with updatable links
4. **InfoSec Blog** - Hacking and information security blog
5. **Lifestyle** - Cooking and home DIY content

---

## File Structure Plan

### Current Files (to be modified):
- `index.html` → Main homepage with contact form
- `left-sidebar.html` → **Photography Portfolio**
- `right-sidebar.html` → **InfoSec Blog** (sidebar for categories/recent posts)
- `no-sidebar.html` → **YouTube Videos** (full-width video grid)

### New File to Create:
- `lifestyle.html` → **Cooking & Home DIY** (will copy from existing template)

---

## Questions to Answer

### 1. PERSONAL/BRAND INFORMATION
- **Q1.1:** What is your full name or brand name for the site?
- **Q1.2:** What's your professional title/tagline? (e.g., "Security Researcher & Photographer")
- **Q1.3:** Brief bio/about section (2-3 sentences) for the homepage banner?

### 2. CONTACT INFORMATION
- **Q2.1:** Email address (for public display and form submissions)
- **Q2.2:** Phone number (optional, if you want to display it)
- **Q2.3:** Location (City, State/Country - or leave generic?)
- **Q2.4:** Social media handles:
  - Twitter/X: @______
  - Instagram: @______
  - GitHub: ______
  - LinkedIn: ______
  - YouTube Channel: ______
  - Any others?

### 3. PHOTOGRAPHY SECTION
- **Q3.1:** Page title/heading for photography section?
- **Q3.2:** Brief description of your photography style/focus?
- **Q3.3:** Do you have specific photography categories? (e.g., Landscape, Portrait, Street, Wildlife)
- **Q3.4:** How many photos do you want to display initially?
- **Q3.5:** Do you have photo files ready, or should I use placeholders?
- **Q3.6:** Any specific photo dimensions/aspect ratios to maintain?

### 4. YOUTUBE VIDEOS SECTION
- **Q4.1:** Page title? (e.g., "My Videos", "Video Archive", "Content Library")
- **Q4.2:** Brief description for the page?
- **Q4.3:** Main categories for your videos? (e.g., Tutorials, Reviews, Vlogs, Documentaries)
- **Q4.4:** Do you want to embed videos or just link to them?
- **Q4.5:** How many videos to display per page?
- **Q4.6:** Do you have a list of current video URLs/titles, or should I create a template structure?
- **Q4.7:** Preferred format for video entries?
  - Option A: Video embed + title + description
  - Option B: Thumbnail + title + description + link
  - Option C: List format with titles and direct links

### 5. INFOSEC BLOG SECTION
- **Q5.1:** Blog section title? (e.g., "Security Research", "InfoSec Blog", "Hacking Notes")
- **Q5.2:** Brief description/mission statement for your blog?
- **Q5.3:** Main blog categories? (e.g., Penetration Testing, Malware Analysis, CTF Writeups, Security News)
- **Q5.4:** Do you have existing blog posts, or should I create placeholder structure?
- **Q5.5:** How many posts to show on the main blog page?
- **Q5.6:** Will blog posts be separate HTML files or external links?

### 6. LIFESTYLE (COOKING & DIY) SECTION
- **Q6.1:** Page title? (e.g., "Kitchen & Workshop", "Lifestyle", "Beyond Code")
- **Q6.2:** Brief description for this section?
- **Q6.3:** How do you want to organize content?
  - Option A: Mixed cooking and DIY posts together
  - Option B: Separate tabs/sections for cooking vs DIY
  - Option C: Category tags visible on each post
- **Q6.4:** Do you have existing content, or need placeholder structure?
- **Q6.5:** How many posts/projects to display initially?

### 7. DESIGN PREFERENCES
- **Q7.1:** Color scheme preferences? (Keep template default or customize?)
- **Q7.2:** Any specific icons/fonts you want to use?
- **Q7.3:** Do you have a logo or just text-based branding?
- **Q7.4:** Preferred navigation menu order?

### 8. FUNCTIONALITY
- **Q8.1:** For contact form - where should submissions go?
  - Option A: Use a service like Formspree (requires email)
  - Option B: Use Google Forms
  - Option C: Mailto link (opens email client)
  - Option D: Just display contact info without form
- **Q8.2:** Do you want a newsletter signup?
- **Q8.3:** Should pages have comment sections?
- **Q8.4:** Any analytics tracking? (Google Analytics, etc.)

---

## Implementation Process

### Phase 1: Setup & Planning
1. ✓ Review current template structure
2. ⬜ Gather all information from questionnaire
3. ⬜ Collect any images, content, or assets
4. ⬜ Create content inventory

### Phase 2: Homepage (index.html)
1. ⬜ Update page title and meta tags
2. ⬜ Replace logo/brand name
3. ⬜ Customize navigation menu
4. ⬜ Update banner with personal info
5. ⬜ Add/modify contact form
6. ⬜ Update footer contact information
7. ⬜ Remove template placeholder content
8. ⬜ Add social media links

### Phase 3: Photography Page (left-sidebar.html → photography.html)
1. ⬜ Rename file to photography.html
2. ⬜ Update page title and heading
3. ⬜ Add photography categories to sidebar
4. ⬜ Create photo gallery layout
5. ⬜ Add photo descriptions/captions
6. ⬜ Update navigation links across all pages

### Phase 4: Videos Page (no-sidebar.html → videos.html)
1. ⬜ Rename file to videos.html
2. ⬜ Update page title and heading
3. ⬜ Create video grid/list structure
4. ⬜ Add video entries with:
   - Video ID/URL storage
   - Title and description
   - Thumbnail (if not embedding)
   - Date published
   - Category tags
5. ⬜ Add notes section for "How to Update Video Links"
6. ⬜ Update navigation links

### Phase 5: InfoSec Blog (right-sidebar.html → blog.html)
1. ⬜ Rename file to blog.html
2. ⬜ Update page title and heading
3. ⬜ Add blog categories to sidebar
4. ⬜ Create blog post excerpt layout
5. ⬜ Add recent posts widget
6. ⬜ Add category/tag filtering
7. ⬜ Update navigation links

### Phase 6: Lifestyle Page (create lifestyle.html)
1. ⬜ Copy template from left-sidebar.html
2. ⬜ Update page title and heading
3. ⬜ Create cooking/DIY categories in sidebar
4. ⬜ Add post/project layout
5. ⬜ Add featured content section
6. ⬜ Update navigation links across all pages

### Phase 7: Global Updates
1. ⬜ Update all navigation menus consistently
2. ⬜ Update all footers with correct contact info
3. ⬜ Ensure all internal links work correctly
4. ⬜ Update copyright information
5. ⬜ Add meta descriptions for SEO
6. ⬜ Test responsive design on mobile

### Phase 8: Content & Assets
1. ⬜ Replace placeholder images with actual photos
2. ⬜ Add actual blog posts/content
3. ⬜ Add video listings
4. ⬜ Optimize images for web
5. ⬜ Create favicon

### Phase 9: Testing & Launch
1. ⬜ Test all links and forms
2. ⬜ Validate HTML/CSS
3. ⬜ Cross-browser testing
4. ⬜ Mobile responsiveness check
5. ⬜ Performance optimization
6. ⬜ Final content review

---

## Video Management System

### How Video Links Will Work:
Each video entry will have this structure in the HTML:

```html
<article class="video-item" data-video-id="unique-id-001">
    <div class="video-thumbnail">
        <!-- YouTube Embed OR Thumbnail Image -->
    </div>
    <div class="video-info">
        <h3>Video Title</h3>
        <span class="date">Date Posted</span>
        <p>Video description</p>
        <!-- IMPORTANT: The actual YouTube URL will be in a data attribute -->
        <a href="https://www.youtube.com/watch?v=VIDEO_ID" 
           data-original-url="https://www.youtube.com/watch?v=VIDEO_ID"
           data-mirror-url=""
           class="button">Watch Video</a>
    </div>
</article>
```

### To Update a Video Link (if YouTube takes it down):
1. Find the video entry by its unique ID or title
2. Update the `href` and `data-mirror-url` attributes
3. Add note that it's a mirror/reupload

**I'll create a separate videos.json file for easier management:**
```json
{
  "videos": [
    {
      "id": "video-001",
      "title": "Video Title",
      "description": "Description",
      "date": "2024-10-23",
      "category": "Tutorial",
      "originalUrl": "https://www.youtube.com/watch?v=XXXXX",
      "currentUrl": "https://www.youtube.com/watch?v=XXXXX",
      "mirrors": [],
      "thumbnail": "images/video-thumbs/video-001.jpg"
    }
  ]
}
```

---

## Notes for Maintenance

### Adding New Content:
- **Blog Post**: Copy existing article structure in blog.html
- **Photo**: Add to photography.html gallery section
- **Video**: Add new entry to videos.html (or update videos.json)
- **Recipe/DIY**: Add to lifestyle.html

### Updating Video Links:
1. Open videos.html (or videos.json)
2. Find the video entry
3. Update the URL
4. Add old URL to mirrors array for reference
5. Save and upload

### Best Practices:
- Keep backup of videos.json
- Document any custom modifications
- Test all forms before deploying
- Regularly check all external links
- Keep images optimized (< 500KB each)

---

## File Naming Convention

### Images:
- Photography: `photo-[category]-[number].jpg` (e.g., photo-landscape-001.jpg)
- Video thumbnails: `video-thumb-[id].jpg`
- Blog images: `blog-[post-slug]-[number].jpg`
- Lifestyle: `lifestyle-[type]-[number].jpg` (e.g., lifestyle-cooking-001.jpg)

### Pages:
- `index.html` - Homepage
- `photography.html` - Photography portfolio
- `videos.html` - YouTube videos directory
- `blog.html` - InfoSec blog
- `lifestyle.html` - Cooking & DIY
- `blog-posts/[post-slug].html` - Individual blog posts (if needed)

---

## Ready to Begin?

Once you've answered all the questions above, I'll:
1. Update all HTML files with your information
2. Restructure the navigation
3. Customize each section according to your needs
4. Create templates for easy content updates
5. Set up the video management system
6. Test everything

**Save this file and fill in your answers below each question!**
