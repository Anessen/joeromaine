# Personal Website - Setup and Content Processes

This repo contains a customized version of the HTML5 UP "ZeroFour" template, set up for a personal website with:

- Home page with contact details and a built-in contact form
- Photography gallery page (data-driven)
- Videos page with replaceable sources (YouTube and mirrors)
- Hacking/Infosec blog page (lists posts)
- Cooking & Home DIY page (cards list)
- Hidden sidebar template pages saved under `templates/` for later use

Follow the processes below to update content safely and repeatably.

## Project structure
- `index.html`: Home page (About + Contact form + quick links)
- `photography.html`: Photo gallery (renders from `data/photos.json`)
- `videos.html`: Video links and embeds (renders from `data/videos.json`)
- `blog.html`: Hacking/Infosec blog index (renders from `data/posts.json`)
- `cooking-diy.html`: Cooking & DIY items (renders from `data/cooking.json`)
- `posts/`: Individual static blog post pages (HTML)
- `data/`: JSON data sources (photos, videos, posts, cooking)
- `templates/`: Saved HTML templates (left/right/no sidebar) for future layouts
- `assets/js/site.js`: Page scripts to render JSON content and handle contact form

## Local development
Because pages load JSON via `fetch`, run a local server (not `file://`).

- Python: `python3 -m http.server 8000`
- Node: `npx http-server -p 8000`
- Then open `http://localhost:8000`

## Deployment
Any static host works (GitHub Pages, Netlify, Vercel, S3). Just deploy the repo.

## Identity and site-wide text
- Page `<title>` and header logo text live at the top of each HTML file in the `<head>` and header.
- Replace placeholders like "Your Name" and taglines in `index.html`.

## Contact form
The form on `index.html` submits via one of two methods:

1) Mailto fallback (default)
- Set your email in `assets/js/site.js` at `CONTACT_EMAIL`.
- On submit, the browser opens your mail client with a pre-filled message.

2) Formspree (recommended)
- Create a Formspree form, copy the endpoint (looks like `https://formspree.io/f/xxxxx`).
- Set `FORMSPREE_ENDPOINT` in `assets/js/site.js`.
- The form will POST to Formspree; success and error messages are shown inline.

## Photography gallery
Data file: `data/photos.json`

Schema:
```json
[
  {
    "title": "Sunset at the bay",
    "src": "images/pic01.jpg",        
    "thumb": "images/pic01.jpg",      
    "alt": "Sunset over water"
  }
]
```
Steps:
- Add your images to `images/` (or `images/photos/`).
- Append entries to `data/photos.json`.
- Open `photography.html` to verify.

## Videos with replaceable sources
Data file: `data/videos.json`

Schema:
```json
[
  {
    "title": "My Talk on X",
    "description": "Why X matters",
    "sources": [
      { "type": "youtube", "url": "https://www.youtube.com/watch?v=VIDEOID", "active": true },
      { "type": "direct", "url": "https://my-cdn.example.com/video.mp4", "active": false }
    ],
    "thumbnail": "https://img.youtube.com/vi/VIDEOID/hqdefault.jpg",
    "publishedAt": "2025-01-01"
  }
]
```
Steps:
- Add/curate your videos by editing `data/videos.json`.
- If YouTube takes down a video, set the mirror's `active` to true (or move it to the front).
- The page always prefers the first `active` source; if it's embeddable YouTube, an embed is shown; otherwise a button link is shown.

## Hacking/Infosec blog
Index data: `data/posts.json`

Schema:
```json
[
  {
    "title": "Welcome to the Lab",
    "date": "2025-01-01",
    "summary": "Kickoff post about tools and goals.",
    "href": "posts/welcome.html",
    "tags": ["intro", "lab"]
  }
]
```
Steps:
- Create a new post file under `posts/` (copy `posts/welcome.html`).
- Add a corresponding entry in `data/posts.json`.
- The blog index will render the list with titles, dates, and summaries.

## Cooking & Home DIY
Data file: `data/cooking.json`

Schema:
```json
[
  {
    "title": "Cast Iron Seasoning 101",
    "image": "images/pic06.jpg",
    "summary": "Fast, smoke-free method for perfect seasoning.",
    "href": "#"  
  }
]
```
Steps:
- Add a card per recipe/project to `data/cooking.json`.
- Cards render with image, title, summary, and an optional link.

## Using the saved sidebar templates
- The original demo pages are moved to `templates/`:
  - `templates/left-sidebar.html`
  - `templates/right-sidebar.html`
  - `templates/no-sidebar.html`
- Copy one into the project root, then customize, if you want a page with a sidebar layout later.

## Navigation
Nav links are defined once per page (static HTML). Update the `<nav id="nav">` list in all top-level pages if you add or rename pages.

## Content safety/backups
- All content (photos, videos, posts, cooking) is data-driven from JSON + HTML files.
- You can recover the site by redeploying this repository to any static host.
- Keep your JSON and `posts/` under version control.

---

Questions? See the in-page comments and `assets/js/site.js` for notes on configuration.
