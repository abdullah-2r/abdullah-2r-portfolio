# Abdullah Al Naeem — Professional Portfolio

A dark-themed, single-page developer portfolio built with React 19 and Vite. It showcases projects, skills, and services through scroll-reveal animations, a client-side router, and a fully responsive layout powered by Tailwind CSS v4 and DaisyUI v5.

---

## 🚀 Live Site

> _Deploy URL goes here — update once published._

---

## ✨ Features

- **Client-side routing** — navigates between the main page and individual project detail pages without a full reload, using the History API and `popstate` handling.
- **Scroll-reveal animations** — elements fade and slide into view via an `IntersectionObserver`; degrades gracefully when the API is unavailable.
- **Image preloading on hover** — project images are decoded in the background the moment a user hovers or focuses a project link.
- **Rotating designation text** — the hero cycles through *Frontend Developer*, *React Developer*, and *Web Developer* with a CSS-driven text animation.
- **Live Bangladesh clock** — the About section shows a live clock (GMT+6) updated every second.
- **Filterable skills grid** — skills can be filtered by *Frontend*, *Backend & APIs*, or *Tools & Workflow*.
- **Downloadable résumé** — a résumé PDF is served directly from the app bundle.
- **Dark theme** — consistent dark palette (`#15141c` base) with a purple accent throughout.
- **Fully responsive** — fluid layouts tested from mobile (≥ 320 px) through wide desktop.

---

## 🗂️ Sections

| Section | Route / Anchor | Description |
|---|---|---|
| Hero | `/#home` | Name, rotating designation, CTA buttons, social links |
| About | `/#about` | Engineering philosophy, timezone card, key pillars, highlights |
| Skills | `/#skills` | 11 skills with proficiency levels, filterable by category |
| Projects | `/#work` | Card grid linking to detail pages |
| Project Detail | `/projects/:slug` | Full case-study page per project |
| Services | `/#services` | 6 service offerings |
| Contact | `/#contact` | Contact form / contact info |
| Footer | — | Footer navigation |

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | [React 19](https://react.dev/) |
| Build tool | [Vite 8](https://vite.dev/) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) + [DaisyUI v5](https://daisyui.com/) |
| Icons | [React Icons v5](https://react-icons.github.io/react-icons/) |
| Linter | [oxlint](https://oxc.rs/docs/guide/usage/linter) |
| Language | JavaScript (ESM) |

---

## 📁 Project Structure

```
professional-portfolio/
├── public/
│   ├── favicon.svg
│   ├── icons.svg
│   └── _redirects          # Netlify / SPA redirect rule
├── src/
│   ├── assets/             # Images, PDF résumé, project screenshots
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── ProjectDetailsPage.jsx
│   │   ├── Services.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── SectionHeading.jsx
│   │   └── TextReveal.jsx
│   ├── data/
│   │   ├── profile.js      # Contact details & social profile links
│   │   └── projects.js     # Project definitions (slug, stack, links, images)
│   ├── App.jsx             # Root component — routing, scroll, reveal logic
│   ├── main.jsx            # React entry point
│   └── index.css           # Global styles & Tailwind directives
├── index.html
├── vite.config.js
└── package.json
```

---

## 🖼️ Featured Projects

### 01 — Dev Tech Stack
**Category:** Developer tools · React app  
Browse a curated catalog of technologies, build a personal stack, and get live notifications as selections change.  
- **Stack:** React, TypeScript, Vite, Tailwind CSS, React Icons, React Toastify  
- **Live:** <https://dev-tech-stack.netlify.app>  
- **Repo:** <https://github.com/abdullah-2r/dev-tech-stack>

### 02 — Netflix Bangladesh
**Category:** Streaming · Responsive landing page  
A cinematic landing-page recreation with signup prompts, device sections, an interactive FAQ, and footer navigation.  
- **Stack:** HTML5, CSS3, Google Fonts (Poppins)  
- **Live:** <https://netprimebd.netlify.app>  
- **Repo:** <https://github.com/abdullah-2r/project_netflix>

### 03 — G3 Architects
**Category:** Architecture · Responsive landing page  
A polished one-page studio site presenting team, services, statistics, and sponsors.  
- **Stack:** HTML5, CSS3, Google Fonts (Work Sans), GitHub Pages  
- **Live:** <https://abdullah-2r.github.io/practice-project/>  
- **Repo:** <https://github.com/abdullah-2r/g3-architect-website>

---

## ⚙️ Getting Started

### Prerequisites

- **Node.js** ≥ 18 (LTS recommended)
- **npm** or **pnpm**

### Installation

```bash
# Clone the repository
git clone https://github.com/abdullah-2r/professional-portfolio.git
cd professional-portfolio

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build

```bash
npm run build
```

Output is placed in the `dist/` directory.

### Preview Production Build Locally

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

---

## 🚢 Deployment

The `public/_redirects` file contains a catch-all redirect rule so the SPA router works correctly on Netlify:

```
/*  /index.html  200
```

For other hosts (Vercel, GitHub Pages, etc.), configure an equivalent rewrite rule pointing all paths to `index.html`.

---

## 📬 Contact

| | |
|---|---|
| **Email** | [abdullahalnaeem37@gmail.com](mailto:abdullahalnaeem37@gmail.com) |
| **Phone** | [+8801953148652](tel:+8801953148652) |
| **GitHub** | [@abdullah-2r](https://github.com/abdullah-2r) |
| **LinkedIn** | [naeem-abdullah](https://www.linkedin.com/in/naeem-abdullah) |

---

## 📄 License

This project is the personal portfolio of **Abdullah Al Naeem**. The source code is shared for reference. Please do not reproduce the design or content as your own without permission.
