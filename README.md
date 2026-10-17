# ISC Intra Sportsfest site

Single-page site for the Ibne Sina College intra sportsfest (6–7 November 2026).
Plain HTML/CSS/JS, no build step.

## Files

```
index.html     page structure
styles.css     all styling (white + burgundy theme)
app.js         renders content from site-data.js
site-data.js   ALL content lives here
assets/        crest-burgundy.png, crest-white.png, favicon.png
```

## Run locally

```bash
python3 -m http.server 3000
# open http://localhost:3000
```

## Edit content (site-data.js only)

- Dates and countdown: `startDate`, `endDate`, `dateLabel`
- Sports: each entry has `days`, `categories`, `rules`, optional `venue` and `about`
  (shown in the pop-up when a sport card is clicked)
- Schedule: `schedule` (times are still "TBA")
- Rules of conduct: `conduct`
- Team names and phone numbers: `team`
- Social links: `socials` (empty for now)

The registration desk text (23 October, during break) is in the Registration
section of `index.html`.

## Deploy

Upload the whole folder (including `assets/`) to any static host: GitHub Pages,
Netlify, Cloudflare Pages or Vercel. Fonts load from Google Fonts, so visitors need internet.
