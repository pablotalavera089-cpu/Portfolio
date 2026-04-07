# Pablo Talavera — Artist Portfolio

Personal portfolio website for Pablo Talavera, multidisciplinary performance artist.

## What works

- Portfolio with workshops, performances, gallery, media, contact page, and links
- Full-screen admin dashboard with login overlay
- Add, edit, delete, and reorder for workshops, gallery, reels, downloads, schedule, and links
- Editable site text and buttons
- Media previews for images and embedded reels
- Gallery persistence via `localStorage`
- Schedule persistence via `localStorage`
- Downloads and reels persistence via `localStorage`
- Export/import for all content, including settings, workshops, and links

## Admin password

The admin dashboard uses a client-side password check with a SHA-256 hash and a browser session flag.

Current password in this build:
`PabloAdmin2026!`

For better protection, change the password hash inside `index.html` after generating your own hash.

## Media / Press kit

Use Google Drive links for your press kit files. In the admin dashboard, add:

- a title like `Press Kit PDF`
- your Google Drive file link
- a button label like `Download PDF`

The site turns Google Drive file links into download buttons.

## Important note

GitHub Pages is a static hosting service that publishes HTML, CSS, and JavaScript straight from your repository. That means the admin overlay is a strong front-end lock, but it is not the same as a private server-side login.

For real private access, put the admin area behind a separate protection layer such as Cloudflare Access, or move the admin CMS to a backend service.

## Deployment

1. Upload the folder to GitHub.
2. In GitHub, go to **Settings → Pages**.
3. Set source to **Deploy from branch → main → / (root)**.
4. Make sure your Google Drive files are shared as **Anyone with the link can view**.

## Password hash update

Generate a new SHA-256 hash for your chosen password and replace `ADMIN_PASSWORD_HASH` in `index.html`.

Example with Node.js:

```bash
node -e "const crypto=require('crypto'); console.log(crypto.createHash('sha256').update('YOUR_PASSWORD').digest('hex'))"
```

## Contact

**Email:** pablotalavera089@gmail.com  
**Instagram:** [@echo_between](https://instagram.com/echo_between)


## Contact form

The contact page uses a mailto-based form, so it works on GitHub Pages without any backend. When someone submits the form, their mail app opens with the message prefilled.
