# Deepali Sharma — Portfolio Website

> Live site: [deepssharma.github.io](https://deepssharma.github.io)

Personal portfolio for Deepali Sharma, Ph.D. — ML Engineer, Data Scientist, and Experimental Physicist with 12+ years of experience analyzing petabyte-scale datasets at particle colliders, now applying that rigor to machine learning and production data pipelines.

---

## 🚀 Tech Stack

- **Vite** + **React 19**
- **Tailwind CSS v3**
- **gh-pages** for deployment

---

## 📁 Project Structure

```
src/
├── data.js                  # All content in one place — edit this to update the site
├── App.jsx                  # Root component
├── index.css                # Global styles + Google Fonts
└── components/
    ├── ParticleBackground   # Animated canvas particle field (bubble chamber aesthetic)
    ├── Nav                  # Sticky nav with mobile hamburger
    ├── Hero                 # Headline, stats grid, CTAs
    ├── About                # Bio, meta, awards
    ├── Projects             # ML + physics project cards
    ├── Research             # Publications with DOI links
    ├── Skills               # Grouped skill tags
    ├── Experience           # Career timeline
    └── Contact              # Email CTA + social links
```

---

## 🛠 Local Development

```bash
# Install dependencies
npm install

# Start dev server (hot reload)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 🌐 Deploying to GitHub Pages

```bash
# Deploy (builds automatically first)
npm run deploy -- --repo https://YOUR_TOKEN@github.com/deepssharma/deepssharma.github.io.git
```

Then go to your repo → **Settings → Pages** → set branch to **`gh-pages`** → Save.

---

## ✏️ Updating Content

All content lives in **`src/data.js`** — projects, publications, skills, experience, and social links are all defined there. Edit that file and redeploy.

---

## 👩‍💻 About

**Deepali Sharma, Ph.D.**
- 🔬 Ph.D. Experimental Nuclear Physics — Weizmann Institute of Science
- 💼 [LinkedIn](https://www.linkedin.com/in/deepali-sharma-a83a126/)
- 📚 [Google Scholar](https://scholar.google.com/citations?user=IHTt5T0AAAAJ&hl=en)
- 🔗 [ORCID](https://orcid.org/0000-0001-9872-5250)
- ✍️ [Medium](https://medium.com/@deeps.sharma)
