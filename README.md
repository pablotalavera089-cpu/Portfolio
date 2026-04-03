# Pablo Talavera — Artist Portfolio

Personal portfolio website for Pablo Talavera, multidisciplinary performance artist.

**Live site:** `https://[your-username].github.io/pablo-portfolio`

## Features

- Single-page application with four sections: Portfolio · Workshops · Performances · Showreel
- Floating pill navigation
- Scroll-triggered animations
- Live schedule section
- Embeddable YouTube / Vimeo showreel
- Fully responsive
- Zero dependencies — pure HTML, CSS, JavaScript

## Project Structure

```
pablo-portfolio/
├── index.html              ← Main entry point
├── assets/
│   ├── css/
│   │   └── style.css       ← All styles
│   ├── js/
│   │   └── main.js         ← All JavaScript
│   └── images/             ← Place your photos here
├── .github/
│   └── workflows/
│       └── deploy.yml      ← Auto-deploy to GitHub Pages
└── README.md
```

## Updating Your Schedule

Open `assets/js/main.js` and find the `SCHEDULE` array near the top. Add, remove or change events:

```js
const SCHEDULE = [
  {
    day: '03', month: 'Feb 2025',
    event: 'Fai Jai Flow Festival',
    location: 'Pai, Thailand',
    type: 'fire', label: 'Fire Safety',
    past: true
  },
  // Add more events here ...
];
```

## Deployment (GitHub Pages)

1. Push this repository to GitHub
2. Go to **Settings → Pages**
3. Set source: **Deploy from branch → main → / (root)**
4. Your site goes live at `https://[username].github.io/[repo-name]`

The included GitHub Actions workflow (`.github/workflows/deploy.yml`) also auto-deploys on every push to `main`.

## Adding Images

Place your photos in `assets/images/` and reference them in `index.html`:
```html
<img src="assets/images/your-photo.jpg" alt="Description"/>
```

## Contact

**Email:** pablotalavera089@gmail.com  
**Instagram:** [@echo_between](https://instagram.com/echo_between)
