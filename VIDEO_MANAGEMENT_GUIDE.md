# YouTube Video Management System Guide

## Purpose
This system allows you to easily update video URLs when YouTube takes down videos or when you need to redirect to mirror/backup copies.

---

## Option 1: Simple HTML Method (Recommended for Beginners)

### Structure in videos.html:
```html
<!-- Video Entry Template -->
<article class="video-entry" id="video-001">
    <a href="#" class="image left">
        <img src="images/video-thumbs/video-001.jpg" alt="" />
    </a>
    <div>
        <header>
            <span class="date">October 23, 2025</span>
            <h3><a href="https://www.youtube.com/watch?v=VIDEO_ID_HERE" 
                   target="_blank">Your Video Title Here</a></h3>
        </header>
        <p>Brief description of the video content goes here.</p>
        
        <!-- Primary Link -->
        <a href="https://www.youtube.com/watch?v=VIDEO_ID_HERE" 
           class="button icon solid fa-play" 
           target="_blank">Watch on YouTube</a>
           
        <!-- Backup/Mirror Links (hidden until needed) -->
        <!-- <a href="BACKUP_URL_HERE" class="button alt" target="_blank">Mirror 1</a> -->
        <!-- <a href="BACKUP_URL_HERE" class="button alt" target="_blank">Mirror 2</a> -->
        
        <!-- Keep note of original URL in comment for reference -->
        <!-- Original URL: https://www.youtube.com/watch?v=VIDEO_ID_HERE -->
        <!-- Date uploaded: 2025-10-23 -->
    </div>
</article>
```

### How to Update When Video is Taken Down:

1. **Find the video entry** by searching for the video title or ID in videos.html
2. **Update the main URL** to point to the new location
3. **Uncomment a mirror link** and add the new URL
4. **Add a note** that it's been updated

Example after update:
```html
<article class="video-entry" id="video-001">
    <a href="#" class="image left">
        <img src="images/video-thumbs/video-001.jpg" alt="" />
    </a>
    <div>
        <header>
            <span class="date">October 23, 2025</span>
            <h3><a href="https://vimeo.com/NEW_VIDEO_ID" 
                   target="_blank">Your Video Title Here [MIRROR]</a></h3>
        </header>
        <p>Brief description of the video content goes here.</p>
        <p><em><strong>Note:</strong> Original YouTube video removed. Now hosted on Vimeo.</em></p>
        
        <!-- Primary Link (updated to mirror) -->
        <a href="https://vimeo.com/NEW_VIDEO_ID" 
           class="button icon solid fa-play" 
           target="_blank">Watch on Vimeo</a>
           
        <!-- Keep history in comments -->
        <!-- Original URL: https://www.youtube.com/watch?v=ORIGINAL_ID -->
        <!-- Taken down: 2025-11-15 -->
        <!-- Current URL: https://vimeo.com/NEW_VIDEO_ID -->
    </div>
</article>
```

---

## Option 2: JSON Data File Method (Recommended for Many Videos)

### Create videos.json file:
```json
{
  "videos": [
    {
      "id": "video-001",
      "title": "How to Hack a Gibson",
      "description": "Tutorial on penetration testing techniques",
      "date": "2025-10-23",
      "category": "Tutorials",
      "thumbnail": "images/video-thumbs/video-001.jpg",
      "urls": {
        "primary": "https://www.youtube.com/watch?v=ORIGINAL_ID",
        "mirrors": []
      },
      "status": "active",
      "notes": ""
    },
    {
      "id": "video-002",
      "title": "CTF Writeup: TryHackMe Room",
      "description": "Step by step solution",
      "date": "2025-10-20",
      "category": "CTF Writeups",
      "thumbnail": "images/video-thumbs/video-002.jpg",
      "urls": {
        "primary": "https://www.youtube.com/watch?v=ANOTHER_ID",
        "mirrors": []
      },
      "status": "active",
      "notes": ""
    }
  ]
}
```

### Add JavaScript to videos.html to load videos:
```javascript
// Add this before closing </body> tag
<script>
// Load videos from JSON
fetch('videos.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('video-container');
    data.videos.forEach(video => {
      const videoHTML = `
        <article class="box excerpt">
          <a href="${video.urls.primary}" class="image left" target="_blank">
            <img src="${video.thumbnail}" alt="${video.title}" />
          </a>
          <div>
            <header>
              <span class="date">${video.date}</span>
              <h3><a href="${video.urls.primary}" target="_blank">
                ${video.title}
              </a></h3>
            </header>
            <p>${video.description}</p>
            ${video.urls.mirrors.length > 0 ? 
              '<p><em>Alternate links available</em></p>' : ''}
            <a href="${video.urls.primary}" 
               class="button icon solid fa-play" 
               target="_blank">Watch Video</a>
          </div>
        </article>
      `;
      container.innerHTML += videoHTML;
    });
  });
</script>
```

### How to Update using JSON Method:

When a video is taken down:
1. Open `videos.json`
2. Find the video entry by ID or title
3. Update the JSON:

```json
{
  "id": "video-001",
  "title": "How to Hack a Gibson",
  "description": "Tutorial on penetration testing techniques",
  "date": "2025-10-23",
  "category": "Tutorials",
  "thumbnail": "images/video-thumbs/video-001.jpg",
  "urls": {
    "primary": "https://vimeo.com/NEW_LOCATION",
    "mirrors": [
      "https://www.youtube.com/watch?v=ORIGINAL_ID",
      "https://rumble.com/ANOTHER_MIRROR"
    ]
  },
  "status": "mirrored",
  "notes": "Original YouTube video taken down 2025-11-15. Now on Vimeo."
}
```

4. Save the file
5. Reload the page - videos update automatically!

---

## Option 3: Spreadsheet Method (Easiest for Non-Technical Users)

### Create a Google Sheet with these columns:
| ID | Title | Description | Date | Category | YouTube URL | Mirror URL 1 | Mirror URL 2 | Status | Notes |
|----|-------|-------------|------|----------|-------------|--------------|--------------|--------|-------|
| video-001 | Your Video Title | Description here | 2025-10-23 | Tutorials | https://youtube.com/... | | | Active | |

### Then use a script to convert to JSON or HTML
(I can provide this script if you choose this method)

---

## Recommended Backup Strategy

### 1. Keep Video Archive
- Download copies of your videos
- Store on external drive or cloud storage
- Have ready to reupload if needed

### 2. Multiple Hosting Platforms
Consider uploading important videos to multiple platforms:
- YouTube (primary)
- Vimeo (backup)
- Rumble (backup)
- Odysee/LBRY (decentralized backup)
- Your own server (ultimate backup)

### 3. Video Information Backup
Keep a separate backup file with:
- Original video files
- Titles and descriptions
- Upload dates
- All URLs where posted
- Thumbnails

### 4. Regular Checks
- Check video availability monthly
- Update broken links immediately
- Keep changelog of updates

---

## Quick Reference: Updating a Video Link

### Method 1 (HTML):
1. Open `videos.html` in text editor
2. Find video by searching for title (Ctrl+F / Cmd+F)
3. Change URL in `href` attribute
4. Add note about change
5. Save and upload

### Method 2 (JSON):
1. Open `videos.json` in text editor
2. Find video entry
3. Update `"primary"` URL
4. Add old URL to `"mirrors"` array
5. Update `"status"` and `"notes"`
6. Save and upload

---

## Complete Video Entry Template (Copy & Paste)

```html
<!-- Copy this template for each new video -->
<article class="box excerpt" id="video-XXX">
    <a href="YOUTUBE_URL_HERE" class="image left" target="_blank">
        <img src="images/video-thumbs/video-XXX.jpg" alt="Video Title" />
    </a>
    <div>
        <header>
            <span class="date">Month Day, Year</span>
            <h3><a href="YOUTUBE_URL_HERE" target="_blank">Video Title Goes Here</a></h3>
        </header>
        <p>Video description - what viewers will learn or see in this video. Keep it concise but informative.</p>
        
        <!-- Category badge (optional) -->
        <span class="tag">Category Name</span>
        
        <!-- Primary watch button -->
        <a href="YOUTUBE_URL_HERE" class="button icon solid fa-play" target="_blank">
            Watch Video
        </a>
        
        <!-- Mirror links (uncomment when needed) -->
        <!-- <a href="MIRROR_URL" class="button alt" target="_blank">Mirror 1</a> -->
        <!-- <a href="MIRROR_URL" class="button alt" target="_blank">Mirror 2</a> -->
        
        <!-- METADATA (keep in HTML comments for your reference) -->
        <!--
        Video ID: video-XXX
        Original YouTube URL: FULL_URL_HERE
        Upload Date: YYYY-MM-DD
        Duration: XX:XX
        Views: (optional tracking)
        Status: active/mirrored/removed
        Change History:
          - YYYY-MM-DD: Initial upload
          - YYYY-MM-DD: Migrated to mirror due to [reason]
        -->
    </div>
</article>
```

---

## Which Method Should You Use?

**Choose HTML Method if:**
- You have < 20 videos
- You're comfortable editing HTML
- You want simplicity
- You rarely update videos

**Choose JSON Method if:**
- You have 20+ videos
- You want easier bulk updates
- You're comfortable with JSON
- You might want to add features later (search, filtering, etc.)

**Choose Spreadsheet Method if:**
- You're not technical
- You want to collaborate with others
- You want easy sorting/filtering while managing
- You have someone else who can convert to HTML

---

## Need Help?

If you get stuck:
1. Check this guide
2. Search for the specific error
3. Ask me for assistance with the specific section

Remember: **Always keep a backup before making changes!**
