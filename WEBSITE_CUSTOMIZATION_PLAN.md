# Joey Romaine Personal Website - Customization Plan
## joeromaine.com

**Date Created:** October 23, 2025  
**Agent Session:** Website Template Customization

---

## SITE OVERVIEW

**Owner:** Joey Romaine (Tank23x0)  
**Tagline:** 0-DAY DRIFTER / Zero Day Drifter  
**Site Title/Logo:** Train for Hurricane - Drift like Water  
**Domain:** https://joeromaine.com  
**Contact Email:** joeyromaine@pm.me  
**Location:** NYC  

---

## SITE STRUCTURE

### Pages & File Mapping:
1. **index.html** → Home (Contact & About)
2. **photography.html** (renamed from left-sidebar.html) → Photography Portfolio
3. **videos.html** (renamed from right-sidebar.html) → YouTube Videos  
4. **infosec.html** (renamed from no-sidebar.html) → HackIt with Joe (InfoSec Blog)
5. **kitchen.html** (NEW) → Super Foodie (Cooking/Recipes)
6. **diy.html** (NEW) → DIY Projects

---

## NAVIGATION STRUCTURE

**Main Navigation (Hamburger Menu + Static Links):**
- Home
- Photography
- Videos  
- HackIt with Joe
- Super Foodie
- DIY

**Design:** Hamburger menu in top right with main navigation links displayed statically next to it. Minimalistic and classy icons.

---

## PAGE 1: HOME (index.html)

### Professional Title:
"Artistic Liaison, Security Researcher, Automobile Engineer, Chef"

### Bio (3 Paragraphs - Refined):

**Paragraph 1:**
I am an engineer at heart who thrives on calculated risk assessment and rapid adaptation. In technology, versatility is essential—learning to wear different hats and master diverse skillsets, understanding how they overlap while respecting their unique requirements, failure points, and nuances.

**Paragraph 2:**
As a retired USAF Staff Sergeant, I served in OIF/OEF operations by choice alongside the Army. My military service also included serving on the USAF Honor Guard and leading fitness programs on base. These experiences taught me discipline, dedication, and the profound importance of giving your all in service to others.

**Paragraph 3:**
Beyond my technical and military background, I have dedicated over 20 years to working with individuals with disabilities and special needs, and spent more than a decade working in and managing restaurants. These experiences have shaped my understanding of patience, creativity, and the human element that underlies all meaningful work.

### Contact Information:
- **Email:** joeyromaine@pm.me
- **Twitter/X:** @Tank23x0
- **GitHub:** Tank23x0
- **Location:** NYC

### Contact Form:
- **Form Handler:** Formspree (or similar)
- **Submission Email:** joeyromaine+websiteform1@pm.me
- **Fields:** Name, Email, Subject, Message

---

## PAGE 2: PHOTOGRAPHY (photography.html)

### Title: Photography Portfolio

### Statement:
"Forced Inclusivity Is An Enemy of Creativity"

### Photography Types:
Street, VIP, Historical Artifacts, Cultural Appreciation

### Categories/Galleries:
1. Food
2. Cities
3. Nature
4. Wild

### Initial Setup:
- 3 placeholder images
- Easy directory structure: `/images/photography/[category]/`
- Auto-listing functionality for new images

### Social Links (Placeholders):
- Instagram: [Placeholder - Add your handle]
- TikTok: [Placeholder - Add your handle]

---

## PAGE 3: YOUTUBE VIDEOS (videos.html)

### Channel Info:
- **URL:** https://www.youtube.com/channel/UCei94zmqIVceuUWjZz0gt8Q
- **Content Types:** Engineering, Chef, DIY, Security Hacking, Fitness

### Video Categories/Playlists:
1. Engineering
2. Cooking/Chef
3. DIY
4. Security & Hacking
5. Fitness

### Initial Setup:
- 3 featured videos with embedded players
- Easy template for adding new videos
- Videos organized by category/playlist
- Ability to update YouTube URLs if videos get taken down

### Video Entry Template:
```html
<!-- Video Entry -->
<article class="box excerpt">
    <div class="video-container">
        <iframe src="https://www.youtube.com/embed/VIDEO_ID" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
        </iframe>
    </div>
    <div>
        <header>
            <span class="date">DATE</span>
            <h3>VIDEO TITLE</h3>
            <span class="category">CATEGORY</span>
        </header>
        <p>VIDEO DESCRIPTION</p>
    </div>
</article>
```

---

## PAGE 4: HACKIT WITH JOE (infosec.html)

### Section Title: HackIt with Joe

### Content Focus:
Top topics from DEF CON and popular hacking community subjects:
- Vulnerability Research & Disclosure
- Network Security & Penetration Testing
- Reverse Engineering
- Social Engineering
- Physical Security
- IoT Security
- Wireless Security
- Exploitation Techniques
- Bug Bounty Hunting
- Security Tool Development

### GitHub Projects:
- **Public PowerShell Repository:** https://github.com/Anessen/PowerShell-Publicly

### Blog Structure:
- Template for blog posts with date, title, category, and content
- Recent posts section
- Categories/tags
- Easy-to-update format

---

## PAGE 5: SUPER FOODIE (kitchen.html)

### Section Title: Super Foodie

### Content Format:
Recipe cards with:
- Featured image
- Recipe title
- Prep/cook time
- Ingredients list
- Instructions
- Embedded video tutorial
- Downloadable recipe PDF link
- Category tags

### Recipe Template:
```html
<article class="recipe-card">
    <div class="recipe-image">
        <img src="images/recipes/RECIPE_NAME.jpg" alt="Recipe Name">
    </div>
    <div class="recipe-content">
        <header>
            <h3>RECIPE TITLE</h3>
            <p class="recipe-meta">
                <span class="prep-time">Prep: 15 min</span> | 
                <span class="cook-time">Cook: 30 min</span>
            </p>
        </header>
        <div class="recipe-video">
            <!-- Embedded YouTube video -->
        </div>
        <div class="recipe-details">
            <h4>Ingredients</h4>
            <ul>
                <!-- Ingredients list -->
            </ul>
            <h4>Instructions</h4>
            <ol>
                <!-- Step-by-step instructions -->
            </ol>
        </div>
        <footer>
            <a href="recipes/RECIPE_NAME.pdf" class="button" download>
                Download Recipe
            </a>
        </footer>
    </div>
</article>
```

### Social Media (Placeholder):
- Instagram: [Cooking-specific handle]

---

## PAGE 6: DIY (diy.html)

### Section Title: DIY Projects

### Content Format:
Project tutorials with:
- Featured image
- Project title
- Difficulty level
- Time estimate
- Tools needed
- Materials list
- Step-by-step instructions with images
- Embedded video tutorial
- Tips & tricks section

### Social Media (Placeholder):
- Instagram: [DIY-specific handle]

---

## FOOTER (All Pages)

### Footer Content:
- Quick links to all main pages
- Contact information
- Social media icons
- Copyright: © 2025 Joey Romaine. All rights reserved
- Website: https://joeromaine.com
- Design credit: HTML5 UP

---

## TECHNICAL IMPLEMENTATION NOTES

### Form Setup (Formspree):
1. Sign up at https://formspree.io
2. Create new form
3. Set endpoint email: joeyromaine+websiteform1@pm.me
4. Get form endpoint URL
5. Update contact form action attribute

### Image Directories to Create:
```
/images/
  /photography/
    /food/
    /cities/
    /nature/
    /wild/
  /recipes/
  /diy/
```

### CSS Customizations:
- Maintain default color scheme
- Add responsive video embed styles
- Recipe card styling
- DIY project card styling
- Mobile-responsive hamburger menu

### Future Enhancements:
- Add blog CMS integration
- Implement dynamic video loading
- Add search functionality
- Create RSS feed for blog
- Add newsletter signup

---

## MAINTENANCE GUIDE

### Adding New Photos:
1. Place images in appropriate category folder: `/images/photography/[category]/`
2. Images will auto-populate on photography page

### Adding New YouTube Videos:
1. Open `videos.html`
2. Copy video entry template
3. Replace VIDEO_ID, title, description, category, and date
4. Save and upload

### Adding New Blog Posts:
1. Open `infosec.html`
2. Copy blog post template
3. Add your content with date and title
4. Save and upload

### Adding New Recipes:
1. Open `kitchen.html`
2. Copy recipe card template
3. Fill in recipe details
4. Add recipe image to `/images/recipes/`
5. Create PDF version and place in `/recipes/`
6. Save and upload

### Adding New DIY Projects:
1. Open `diy.html`
2. Copy project template
3. Fill in project details
4. Add images to `/images/diy/`
5. Save and upload

---

## SECURITY CONSIDERATIONS

1. Use HTTPS for all pages
2. Validate form inputs on contact form
3. Add CAPTCHA to prevent spam (reCAPTCHA v3)
4. Keep form endpoint email private
5. Regularly update any dependencies
6. Monitor for broken YouTube links

---

## BACKUP INSTRUCTIONS

### Before Making Changes:
1. Create backup: `cp -r /workspace /workspace_backup_$(date +%Y%m%d)`
2. Test changes locally before deploying
3. Keep previous version until new version is confirmed working

---

## DEPLOYMENT CHECKLIST

- [ ] All placeholder content replaced with real content
- [ ] Contact form tested and working
- [ ] All social media links updated
- [ ] Images optimized for web
- [ ] Mobile responsiveness tested
- [ ] All internal links working
- [ ] YouTube embeds working
- [ ] Recipe PDFs created and linked
- [ ] SEO meta tags added
- [ ] Favicon created and linked
- [ ] Google Analytics added (if desired)
- [ ] SSL certificate active
- [ ] Domain properly configured

---

**END OF CUSTOMIZATION PLAN**
