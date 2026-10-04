# FITNESS COACH — Premium Coaching Website

A premium, modern, high-converting fitness coach brand website.  
Built with: **HTML5 · CSS3 · Bootstrap 5 · Vanilla JavaScript (ES6+)**

---

## 📁 Project Structure

```
fitness-coach/
├── index.html              — Main page (all sections)
├── css/
│   └── style.css           — All custom styles
├── js/
│   └── main.js             — All JavaScript functionality
├── images/
│   ├── logo.png            — ⚠ REPLACE: Your logo
│   ├── hero-coach.jpg      — ⚠ REPLACE: Hero section coach photo
│   ├── about-coach.jpg     — ⚠ REPLACE: About section coach photo
│   ├── cta-bg.jpg          — ⚠ REPLACE: CTA section background photo
│   ├── result-01-before.jpg  — ⚠ REPLACE: Client 1 before photo
│   ├── result-01-after.jpg   — ⚠ REPLACE: Client 1 after photo
│   ├── result-02-before.jpg  — ⚠ REPLACE: Client 2 before photo
│   ├── result-02-after.jpg   — ⚠ REPLACE: Client 2 after photo
│   ├── result-03-before.jpg  — ⚠ REPLACE: Client 3 before photo
│   ├── result-03-after.jpg   — ⚠ REPLACE: Client 3 after photo
│   ├── video-thumb-01.jpg    — ⚠ REPLACE: YouTube video thumbnail 1
│   ├── video-thumb-02.jpg    — ⚠ REPLACE: YouTube video thumbnail 2
│   └── video-thumb-03.jpg    — ⚠ REPLACE: YouTube video thumbnail 3
└── README.md
```

---

## ⚙️ Quick Customization (js/main.js)

Open `js/main.js` and edit the config block at the top of the file:

```javascript
// Your WhatsApp number (country code + number, no spaces or +)
const WHATSAPP_NUMBER = "212XXXXXXXXX";   // ← Change this

// Social media URLs
const INSTAGRAM_URL = "https://www.instagram.com/YourHandle";
const YOUTUBE_URL   = "https://www.youtube.com/@YourChannel";
const TIKTOK_URL    = "https://www.tiktok.com/@YourHandle";

// Your name
const COACH_NAME = "Coach";   // ← Change this
```

That's all you need to update for full WhatsApp + social media integration.

---

## 🖼️ Replacing Images

Drop your images into the `/images/` folder using the exact filenames above.

**Recommended dimensions:**
| Image            | Recommended Size | Format |
|------------------|-----------------|--------|
| logo.png         | Height: 80–120px | PNG (transparent) |
| hero-coach.jpg   | 900×1100px portrait | JPG |
| about-coach.jpg  | 700×900px portrait  | JPG |
| cta-bg.jpg       | 1920×1080px landscape | JPG |
| result-*.jpg     | 400×500px portrait  | JPG |
| video-thumb-*.jpg| 800×450px (16:9)   | JPG |

> **Tip:** Use `object-fit: cover` is already applied — images will crop/fill automatically.

---

## ✏️ Updating Content

All text content is in `index.html`. Search for `<!-- Replace -->` markers or simply edit the text directly.

Key things to update:
- [ ] Coach name (in `<title>`, `<meta>`, footer)
- [ ] Coach bio in the About section
- [ ] Testimonial names (make sure they are real clients)
- [ ] YouTube channel links in the video cards
- [ ] Social media handles in the footer

---

## 🚀 Launch Checklist

Before going live:

- [ ] Replace `WHATSAPP_NUMBER` in `main.js`
- [ ] Replace all social media URLs in `main.js`
- [ ] Add your logo to `/images/logo.png`
- [ ] Add hero photo to `/images/hero-coach.jpg`
- [ ] Add about photo to `/images/about-coach.jpg`
- [ ] Add real transformation photos
- [ ] Update testimonials with real client names/feedback
- [ ] Update YouTube video cards with real links/thumbnails
- [ ] Update coach name throughout `index.html`
- [ ] Update `<meta name="description">` and OG tags
- [ ] Test on mobile (Chrome DevTools → mobile view)
- [ ] Test WhatsApp links with your real number
- [ ] Test contact form submission

---

## 🎨 Design System

| Element       | Value                              |
|---------------|------------------------------------|
| Primary Black | `#0A0A0A`                          |
| Card Dark     | `#161616`                          |
| Accent Red    | `#E31E24`                          |
| White         | `#FFFFFF`                          |
| Display Font  | Barlow Condensed (Google Fonts)    |
| Body Font     | DM Sans (Google Fonts)             |

---

## 📱 Responsive Breakpoints

Tested at: 375px · 576px · 768px · 992px · 1200px · 1440px · 1920px

---

## 📞 Support

To customize further, open the files and look for `⚠ REPLACE` comments or section headers like `/* PROGRAMS SECTION */` in `style.css`.

---

*Built for professional use. Replace placeholder content before launching.*
