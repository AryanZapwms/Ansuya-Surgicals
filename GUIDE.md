# Medical & Surgical Dressings Website — Step-by-Step Build Guide

Follow every step in order. Copy each code block **completely** (from the first line to the last line).

> **Tip:** In VS Code, to create a file inside a folder that doesn't exist yet, just type the full path in the "New File" box (for example `src/config/siteConfig.js`) and VS Code creates the folders for you.

---

## STEP 0 — Open your project folder

Open a terminal **inside your React project folder** (the folder that contains `package.json`).

Your project should already look roughly like this (standard Vite + React):

```
your-project/
├── index.html
├── package.json
├── vite.config.js
├── public/
└── src/
    ├── App.css
    ├── App.jsx
    ├── assets/
    ├── index.css
    └── main.jsx
```

> If your project was **not** made with Vite (for example it has `src/index.js` instead of `src/main.jsx`), create a fresh one first:
> ```bash
> npm create vite@latest medical-dressings -- --template react
> cd medical-dressings
> npm install
> ```

---

## STEP 1 — Install the packages

Run this command in the terminal:

```bash
npm install react-router-dom react-icons
```

- `react-router-dom` → page navigation (Home, About, Products...)
- `react-icons` → all the icons used in the website

---

## STEP 2 — Create the folders

Inside `src`, create these 4 new folders:

```
src/config
src/data
src/components
src/pages
src/assets/images      (empty for now — your own logo/photos go here later)
```

You can **delete** these old Vite demo files if they exist (they are no longer used):
`src/assets/react.svg`, `src/assets/hero.png`, `src/assets/vite.svg`, `public/icons.svg`, `public/vite.svg`

---

## STEP 3 — `index.html`

**This file already exists. Replace the contents of this file with the following code.**

(Select everything in the file → delete → paste.)

📁 Location: the project root folder (same folder as package.json) — NOT inside src

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta
      name="description"
      content="Trusted medical and surgical dressing solutions — bandages, wound dressings, absorbent and medicated dressings, and protective equipment."
    />
    <meta name="theme-color" content="#1034A6" />
    <title>Medical & Surgical Dressings</title>

    <!-- Google Fonts: Manrope (headings) + Inter (body text) -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Manrope:wght@600;700;800&display=swap"
      rel="stylesheet"
    />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

---

## STEP 4 — `public/favicon.svg`

**This file already exists. Replace the contents of this file with the following code.**

(Select everything in the file → delete → paste.)

📁 Location: the public folder

```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="16" fill="#1034A6"/><rect x="26" y="14" width="12" height="36" rx="3" fill="#fff"/><rect x="14" y="26" width="36" height="12" rx="3" fill="#fff"/></svg>
```

---

## STEP 5 — `src/index.css`

**This file already exists. Replace the contents of this file with the following code.**

(Select everything in the file → delete → paste.)

```css
/* =========================================================
   GLOBAL STYLES — colours, fonts, buttons, layout helpers
   ========================================================= */

:root {
  /* Brand colours */
  --primary: #1034a6;
  --primary-dark: #0b2470;
  --primary-light: #2f56d6;
  --primary-50: #f1f5ff;
  --primary-100: #e3eafc;
  --primary-200: #c5d3f8;
  --accent: #0e9fb7;

  /* Neutrals */
  --navy: #0a1633;
  --navy-800: #0f1f45;
  --text: #1c2740;
  --text-muted: #5b6782;
  --text-light: #8a94ab;
  --border: #e3e8f2;
  --bg: #ffffff;
  --bg-soft: #f6f8fc;
  --bg-softer: #fafbfe;
  --white: #ffffff;
  --success: #12a36d;

  /* Typography */
  --font-heading: "Manrope", "Segoe UI", sans-serif;
  --font-body: "Inter", "Segoe UI", sans-serif;

  /* Spacing & shape */
  --container: 1240px;
  --radius-sm: 8px;
  --radius: 14px;
  --radius-lg: 20px;
  --header-height: 84px;

  /* Shadows */
  --shadow-sm: 0 2px 8px rgba(10, 22, 51, 0.05);
  --shadow: 0 10px 30px rgba(10, 22, 51, 0.08);
  --shadow-lg: 0 20px 50px rgba(16, 52, 166, 0.14);

  --transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* ---------- Reset ---------- */
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-body);
  font-size: 16px;
  line-height: 1.7;
  color: var(--text);
  background: var(--bg);
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
}

img {
  max-width: 100%;
  display: block;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

button,
input,
textarea,
select {
  font: inherit;
}

button {
  cursor: pointer;
  border: none;
  background: none;
}

h1,
h2,
h3,
h4,
h5 {
  font-family: var(--font-heading);
  color: var(--navy);
  line-height: 1.2;
  font-weight: 800;
  letter-spacing: -0.02em;
}

:focus-visible {
  outline: 3px solid var(--primary-200);
  outline-offset: 2px;
}

/* ---------- Layout helpers ---------- */
.container {
  width: 100%;
  max-width: var(--container);
  margin: 0 auto;
  padding: 0 20px;
}

.section {
  padding: 72px 0;
}

.section--soft {
  background: var(--bg-soft);
}

@media (min-width: 768px) {
  .container {
    padding: 0 32px;
  }
  .section {
    padding: 96px 0;
  }
}

@media (min-width: 1200px) {
  .section {
    padding: 112px 0;
  }
}

/* ---------- Section heading ---------- */
.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-family: var(--font-heading);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--primary);
  margin-bottom: 14px;
}

.eyebrow::before {
  content: "";
  width: 28px;
  height: 2px;
  background: var(--primary);
  border-radius: 2px;
}

.section-heading {
  max-width: 680px;
  margin-bottom: 52px;
}

.section-heading--center {
  text-align: center;
  margin-left: auto;
  margin-right: auto;
}

.section-heading--center .eyebrow::after {
  content: "";
  width: 28px;
  height: 2px;
  background: var(--primary);
  border-radius: 2px;
}

.section-heading h2 {
  font-size: clamp(1.8rem, 3.6vw, 2.6rem);
  margin-bottom: 16px;
}

.section-heading p {
  color: var(--text-muted);
  font-size: 1.05rem;
}

/* ---------- Buttons ---------- */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 14px 28px;
  border-radius: 10px;
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 0.95rem;
  letter-spacing: 0.01em;
  transition: var(--transition);
  border: 2px solid transparent;
  white-space: nowrap;
}

.btn svg {
  transition: transform var(--transition);
}

.btn:hover svg {
  transform: translateX(4px);
}

.btn--primary {
  background: var(--primary);
  color: var(--white);
  box-shadow: 0 8px 20px rgba(16, 52, 166, 0.25);
}

.btn--primary:hover {
  background: var(--primary-dark);
  transform: translateY(-2px);
  box-shadow: 0 12px 28px rgba(16, 52, 166, 0.32);
}

.btn--outline {
  border-color: var(--primary);
  color: var(--primary);
  background: transparent;
}

.btn--outline:hover {
  background: var(--primary);
  color: var(--white);
}

.btn--white {
  background: var(--white);
  color: var(--primary);
}

.btn--white:hover {
  background: var(--primary-50);
  transform: translateY(-2px);
}

.btn--ghost-light {
  border-color: rgba(255, 255, 255, 0.55);
  color: var(--white);
}

.btn--ghost-light:hover {
  background: var(--white);
  color: var(--primary);
  border-color: var(--white);
}

.btn--sm {
  padding: 10px 20px;
  font-size: 0.88rem;
}

/* ---------- Scroll reveal animation ---------- */
.reveal {
  opacity: 0;
  transform: translateY(28px);
  transition:
    opacity 0.8s ease,
    transform 0.8s cubic-bezier(0.2, 0.7, 0.2, 1);
}

.reveal.is-visible {
  opacity: 1;
  transform: none;
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
  .reveal {
    opacity: 1;
    transform: none;
    transition: none;
  }
}
```

---

## STEP 6 — `src/App.css`

**This file already exists. Replace the contents of this file with the following code.**

(Select everything in the file → delete → paste.)

```css
/* =========================================================
   APP LAYOUT — keeps the footer at the bottom of the page
   ========================================================= */

.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.app-main {
  flex: 1;
}
```

---

## STEP 7 — `src/main.jsx`

**This file already exists. Replace the contents of this file with the following code.**

(Select everything in the file → delete → paste.)

```jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
```

---

## STEP 8 — `src/config/siteConfig.js`

**Create this file:** `src/config/siteConfig.js`

```javascript
/* =========================================================
   SITE CONFIG — CHANGE YOUR COMPANY DETAILS HERE ONLY
   Everything below is used across the Header, Footer,
   Contact page and CTA sections automatically.
   ========================================================= */

const siteConfig = {
  // ---- Logo / Company name (placeholder) ----
  // To use a real logo image: put your logo in src/assets/images/
  // then import it in src/components/Logo.jsx (instructions are there).
  logoTextMain: "MEDI",
  logoTextAccent: "DRESS",
  logoTagline: "Surgical Care",
  companyName: "Medical & Surgical Dressings",

  // ---- Short description used in the footer ----
  footerDescription:
    "Delivering reliable medical and surgical dressing solutions designed for quality, safety and patient care.",

  // ---- Contact details (placeholders) ----
  phone: "+91 XXXXX XXXXX",
  phoneLink: "tel:+910000000000",
  email: "info@example.com",
  address: "Mumbai, Maharashtra, India",
  businessHours: "Mon – Sat: 9:30 AM – 6:30 PM",

  // ---- Google Map (change the text after q= to your exact address) ----
  mapEmbedUrl:
    "https://www.google.com/maps?q=Mumbai,+Maharashtra,+India&output=embed",

  // ---- Social media links (replace # with your real profile URLs) ----
  social: {
    facebook: "#",
    linkedin: "#",
    instagram: "#",
    twitter: "#",
  },

  copyrightYear: 2026,
};

export default siteConfig;
```

---

## STEP 9 — `src/data/images.js`

**Create this file:** `src/data/images.js`

```javascript
/* =========================================================
   IMAGES — all website photos in one place.
   To use your own photos:
   1. Put the image in src/assets/images/  (e.g. hero1.jpg)
   2. At the top of this file add:  import hero1 from "../assets/images/hero1.jpg";
   3. Replace the URL below with:   hero1
   ========================================================= */

const unsplash = (id, width = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=80`;

const images = {
  hero1: unsplash("photo-1551076805-e1869033e561"),
  hero2: unsplash("photo-1579684385127-1ef15d508118"),
  hero3: unsplash("photo-1576091160550-2173dba999ef"),

  aboutHome: unsplash("photo-1631815588090-d4bfec5b1ccb", 1000),
  aboutPage: unsplash("photo-1582719471384-894fbb16e074", 1000),
  aboutBanner: unsplash("photo-1519494026892-80bbd2d6fd0d"),
  productsBanner: unsplash("photo-1587854692152-cbe660dbde88"),
  contactBanner: unsplash("photo-1538108149393-fbbd81895907"),
  brandBanner: unsplash("photo-1516549655169-df83a0774514"),

  bandages: unsplash("photo-1603398938378-e54eab446dde", 800),
  dressings: unsplash("photo-1631815588090-d4bfec5b1ccb", 800),
  absorbent: unsplash("photo-1582719471384-894fbb16e074", 800),
  medicated: unsplash("photo-1587854692152-cbe660dbde88", 800),
  protective: unsplash("photo-1584515933487-779824d29309", 800),
  gloves: unsplash("photo-1584036561566-baf8f5f1b144", 800),
  surgery: unsplash("photo-1551076805-e1869033e561", 800),
  clinic: unsplash("photo-1576091160550-2173dba999ef", 800),
};

export default images;
```

---

## STEP 10 — `src/data/categories.js`

**Create this file:** `src/data/categories.js`

```javascript
/* =========================================================
   PRODUCT CATEGORIES
   "slug" must match the "category" value used in products.js
   "path" is the page URL for that category.
   ========================================================= */
import images from "./images";

const categories = [
  {
    slug: "bandages",
    name: "Bandages",
    path: "/bandages",
    image: images.bandages,
    shortDescription:
      "Elastic, crepe and conforming bandages for firm support and secure fixation.",
    description:
      "Our bandage range offers dependable compression, support and fixation for sprains, post-operative care and everyday clinical use. Each bandage is designed for comfort, breathability and consistent elasticity.",
  },
  {
    slug: "dressings",
    name: "Dressings",
    path: "/dressings",
    image: images.dressings,
    shortDescription:
      "Sterile wound dressings that protect, cushion and support natural healing.",
    description:
      "From sterile gauze to transparent film and island dressings, our wound dressings are engineered to protect wounds, manage moisture and support faster, safer healing across hospital and home-care settings.",
  },
  {
    slug: "absorbent-dressings",
    name: "Absorbent Dressings",
    path: "/absorbent-dressings",
    image: images.absorbent,
    shortDescription:
      "High-absorbency pads and rolls for effective exudate management.",
    description:
      "Our absorbent dressings are designed to manage moderate to heavy exudate, keeping the wound area clean and dry. Ideal for surgical wounds, trauma care and general ward use.",
  },
  {
    slug: "medicated-dressing",
    name: "Medicated Dressing",
    path: "/medicated-dressing",
    image: images.medicated,
    shortDescription:
      "Antiseptic and medicated dressings that help reduce infection risk.",
    description:
      "Our medicated dressing range combines trusted wound-care materials with antiseptic and soothing agents to help reduce the risk of infection and support a healthy healing environment.",
  },
  {
    slug: "protective-equipment",
    name: "Protective Equipment",
    path: "/protective-equipment",
    image: images.protective,
    shortDescription:
      "Masks, gloves, caps and gowns for safe clinical environments.",
    description:
      "Our protective equipment helps healthcare professionals maintain safe, hygienic working environments. The range includes surgical masks, examination gloves, caps, shoe covers and gowns.",
  },
];

export default categories;
```

---

## STEP 11 — `src/data/products.js`

**Create this file:** `src/data/products.js`

```javascript
/* =========================================================
   PRODUCTS — PLACEHOLDER DATA
   Replace names, descriptions and images with your real products.

   Each product has:
   - id:          unique number (never repeat)
   - name:        product name
   - category:    must be one of the category slugs in categories.js
                  (bandages, dressings, absorbent-dressings,
                   medicated-dressing, protective-equipment)
   - brand:       must be one of the brand slugs in brands.js
                  (ansuya, bactisafe, clinisafe, elastogrip,
                   innova-fix, innova-crepe, savior, soft-pad)
   - image:       image URL or imported image
   - description: short one or two line description
   ========================================================= */
import images from "./images";

const products = [
  // ---------------- BANDAGES ----------------
  {
    id: 1,
    name: "Adhesive Bandage",
    category: "bandages",
    brand: "elastogrip",
    image: images.bandages,
    description:
      "Flexible adhesive bandage for secure fixation of dressings and minor wound care.",
  },
  {
    id: 2,
    name: "Elastic Crepe Bandage",
    category: "bandages",
    brand: "innova-crepe",
    image: images.gloves,
    description:
      "Breathable cotton crepe bandage providing firm, even support and compression.",
  },
  {
    id: 3,
    name: "Conforming Roller Bandage",
    category: "bandages",
    brand: "elastogrip",
    image: images.clinic,
    description:
      "Lightweight conforming bandage that moulds easily to joints and contours.",
  },
  {
    id: 4,
    name: "Cohesive Elastic Bandage",
    category: "bandages",
    brand: "innova-fix",
    image: images.surgery,
    description:
      "Self-adherent elastic bandage that sticks to itself, not to skin or hair.",
  },

  // ---------------- DRESSINGS ----------------
  {
    id: 5,
    name: "Sterile Gauze Dressing",
    category: "dressings",
    brand: "clinisafe",
    image: images.dressings,
    description:
      "Soft, sterile gauze swabs for cleaning, packing and covering wounds.",
  },
  {
    id: 6,
    name: "Transparent Film Dressing",
    category: "dressings",
    brand: "innova-fix",
    image: images.clinic,
    description:
      "Waterproof, breathable film that allows easy wound monitoring.",
  },
  {
    id: 7,
    name: "Island Wound Dressing",
    category: "dressings",
    brand: "clinisafe",
    image: images.absorbent,
    description:
      "Adhesive island dressing with a soft, non-adherent central wound pad.",
  },
  {
    id: 8,
    name: "Non-Woven Post-Op Dressing",
    category: "dressings",
    brand: "ansuya",
    image: images.surgery,
    description:
      "Gentle non-woven dressing designed for post-operative incision care.",
  },

  // ---------------- ABSORBENT DRESSINGS ----------------
  {
    id: 9,
    name: "Absorbent Pad",
    category: "absorbent-dressings",
    brand: "soft-pad",
    image: images.absorbent,
    description:
      "High-absorbency pad for effective management of moderate to heavy exudate.",
  },
  {
    id: 10,
    name: "Absorbent Cotton Roll",
    category: "absorbent-dressings",
    brand: "ansuya",
    image: images.dressings,
    description:
      "Pure, bleached absorbent cotton roll for general clinical applications.",
  },
  {
    id: 11,
    name: "Combine Dressing Pad",
    category: "absorbent-dressings",
    brand: "soft-pad",
    image: images.clinic,
    description:
      "Multi-layer combine pad for surgical wounds requiring extra absorbency.",
  },
  {
    id: 12,
    name: "Gamgee Tissue Roll",
    category: "absorbent-dressings",
    brand: "ansuya",
    image: images.gloves,
    description:
      "Cotton wool enclosed in gauze for padding, absorption and protection.",
  },

  // ---------------- MEDICATED DRESSING ----------------
  {
    id: 13,
    name: "Medicated Wound Dressing",
    category: "medicated-dressing",
    brand: "bactisafe",
    image: images.medicated,
    description:
      "Antiseptic-impregnated dressing that helps reduce the risk of infection.",
  },
  {
    id: 14,
    name: "Paraffin Gauze Dressing",
    category: "medicated-dressing",
    brand: "bactisafe",
    image: images.dressings,
    description:
      "Non-adherent paraffin gauze ideal for burns, grafts and abrasions.",
  },
  {
    id: 15,
    name: "Povidone-Iodine Dressing",
    category: "medicated-dressing",
    brand: "savior",
    image: images.absorbent,
    description:
      "Broad-spectrum antiseptic dressing for infected or at-risk wounds.",
  },
  {
    id: 16,
    name: "Silver Antimicrobial Dressing",
    category: "medicated-dressing",
    brand: "savior",
    image: images.surgery,
    description:
      "Silver-based antimicrobial dressing for sustained protection.",
  },

  // ---------------- PROTECTIVE EQUIPMENT ----------------
  {
    id: 17,
    name: "Protective Surgical Mask",
    category: "protective-equipment",
    brand: "savior",
    image: images.protective,
    description:
      "3-ply surgical mask with high filtration efficiency and comfortable fit.",
  },
  {
    id: 18,
    name: "Nitrile Examination Gloves",
    category: "protective-equipment",
    brand: "clinisafe",
    image: images.gloves,
    description:
      "Powder-free nitrile gloves offering strength, comfort and sensitivity.",
  },
  {
    id: 19,
    name: "Disposable Surgical Gown",
    category: "protective-equipment",
    brand: "savior",
    image: images.surgery,
    description:
      "Fluid-resistant disposable gown for surgical and isolation procedures.",
  },
  {
    id: 20,
    name: "Bouffant Surgical Cap",
    category: "protective-equipment",
    brand: "clinisafe",
    image: images.clinic,
    description:
      "Lightweight, breathable non-woven cap for complete hair coverage.",
  },
];

export default products;
```

---

## STEP 12 — `src/data/brands.js`

**Create this file:** `src/data/brands.js`

```javascript
/* =========================================================
   BRANDS — PLACEHOLDER DATA
   - "slug" is used to link products (see products.js "brand")
   - "path" is the page URL
   - "children" creates the nested submenu (used for Innova)
   - "productBrands" decides which products appear on that
     brand page (Innova shows both Innova Fix + Innova Crepe)
   - "color" is the accent colour of the brand logo block
   ========================================================= */

const brands = [
  {
    slug: "ansuya",
    name: "Ansuya",
    path: "/brands/ansuya",
    tagline: "Pure Cotton Care",
    color: "#1034A6",
    description:
      "Ansuya offers a dependable range of cotton-based absorbent and wound-care products, crafted for everyday clinical use with a focus on purity, softness and consistency.",
    highlights: ["100% cotton materials", "Soft on skin", "Consistent quality"],
    productBrands: ["ansuya"],
  },
  {
    slug: "bactisafe",
    name: "Bactisafe",
    path: "/brands/bactisafe",
    tagline: "Antiseptic Protection",
    color: "#0E7C86",
    description:
      "Bactisafe brings together trusted antiseptic agents and advanced dressing materials to help reduce infection risk and support a healthy wound-healing environment.",
    highlights: ["Antiseptic formulation", "Infection control", "Clinically focused"],
    productBrands: ["bactisafe"],
  },
  {
    slug: "clinisafe",
    name: "Clinisafe",
    path: "/brands/clinisafe",
    tagline: "Clinical Grade Safety",
    color: "#2456D3",
    description:
      "Clinisafe delivers sterile dressings and protective essentials built to clinical standards, helping hospitals and clinics maintain safe, hygienic care environments.",
    highlights: ["Sterile packaging", "Hospital grade", "Reliable supply"],
    productBrands: ["clinisafe"],
  },
  {
    slug: "elastogrip",
    name: "Elastogrip",
    path: "/brands/elastogrip",
    tagline: "Support That Stays",
    color: "#0B2470",
    description:
      "Elastogrip bandages provide firm, even compression and long-lasting elasticity for sprains, strains and post-operative support.",
    highlights: ["Durable elasticity", "Breathable fabric", "Secure fixation"],
    productBrands: ["elastogrip"],
  },
  {
    slug: "innova",
    name: "Innova",
    path: "/brands/innova",
    tagline: "Innovation in Fixation",
    color: "#3B5BDB",
    description:
      "Innova is our family of innovative fixation and support products, designed to combine comfort with dependable everyday performance. The range includes Innova Fix and Innova Crepe.",
    highlights: ["Innovative design", "Comfortable wear", "Versatile range"],
    productBrands: ["innova-fix", "innova-crepe"],
    children: [
      {
        slug: "innova-fix",
        name: "Innova Fix",
        path: "/brands/innova/fix",
        tagline: "Secure Dressing Fixation",
        color: "#3B5BDB",
        description:
          "Innova Fix offers breathable, hypoallergenic fixation products that hold dressings firmly in place while staying gentle on the skin.",
        highlights: ["Hypoallergenic", "Water resistant", "Easy to remove"],
        productBrands: ["innova-fix"],
      },
      {
        slug: "innova-crepe",
        name: "Innova Crepe",
        path: "/brands/innova/crepe",
        tagline: "Comfortable Compression",
        color: "#3B5BDB",
        description:
          "Innova Crepe bandages are made from premium cotton crepe fabric to deliver comfortable compression and reliable support for joints and limbs.",
        highlights: ["Premium cotton crepe", "Even compression", "Reusable"],
        productBrands: ["innova-crepe"],
      },
    ],
  },
  {
    slug: "savior",
    name: "Savior",
    path: "/brands/savior",
    tagline: "Advanced Protection",
    color: "#0A6E8F",
    description:
      "Savior covers advanced medicated dressings and protective equipment, built to protect both patients and healthcare professionals in demanding clinical settings.",
    highlights: ["Advanced materials", "Protective range", "Trusted by professionals"],
    productBrands: ["savior"],
  },
  {
    slug: "soft-pad",
    name: "Soft Pad",
    path: "/brands/soft-pad",
    tagline: "Gentle Absorbency",
    color: "#1C4FD8",
    description:
      "Soft Pad absorbent dressings combine high absorbency with a soft, cushioned feel, keeping wounds clean, dry and comfortable.",
    highlights: ["High absorbency", "Cushioned comfort", "Low linting"],
    productBrands: ["soft-pad"],
  },
];

/* Finds any brand (including Innova Fix / Innova Crepe) by its URL path */
export function findBrandByPath(pathname) {
  for (const brand of brands) {
    if (brand.path === pathname) return { brand, parent: null };
    if (brand.children) {
      const child = brand.children.find((c) => c.path === pathname);
      if (child) return { brand: child, parent: brand };
    }
  }
  return { brand: null, parent: null };
}

export default brands;
```

---

## STEP 13 — `src/data/heroSlides.js`

**Create this file:** `src/data/heroSlides.js`

```javascript
/* =========================================================
   HOME PAGE HERO SLIDER — edit the slides here
   ========================================================= */
import images from "./images";

const heroSlides = [
  {
    id: 1,
    image: images.hero1,
    alt: "Surgical team working in a modern operating theatre",
    eyebrow: "Medical & Surgical Dressings",
    title: "Trusted Medical & Surgical Dressing Solutions",
    description:
      "A comprehensive range of bandages, dressings and protective products crafted to support safer, faster patient recovery.",
    primaryButton: { label: "Explore Products", link: "/products" },
    secondaryButton: { label: "Contact Us", link: "/contact" },
  },
  {
    id: 2,
    image: images.hero2,
    alt: "Healthcare professional preparing medical supplies",
    eyebrow: "Quality You Can Rely On",
    title: "Quality Products. Reliable Care.",
    description:
      "Every product is manufactured and checked with care so that hospitals, clinics and caregivers can rely on consistent performance.",
    primaryButton: { label: "About Us", link: "/about" },
    secondaryButton: { label: "Our Brands", link: "/brands/ansuya" },
  },
  {
    id: 3,
    image: images.hero3,
    alt: "Doctor consulting with a patient in a clinic",
    eyebrow: "Built for Clinicians",
    title: "Designed for Healthcare Professionals",
    description:
      "Practical, dependable wound-care and protective solutions trusted by healthcare professionals across institutions.",
    primaryButton: { label: "Send Enquiry", link: "/contact" },
    secondaryButton: { label: "View Range", link: "/products" },
  },
];

export default heroSlides;
```

---

## STEP 14 — `src/components/Logo.jsx`

**Create this file:** `src/components/Logo.jsx`

```jsx
import { Link } from "react-router-dom";
import siteConfig from "../config/siteConfig";
import "./Logo.css";

/* =========================================================
   LOGO — placeholder text logo.

   HOW TO USE YOUR REAL LOGO IMAGE LATER:
   1. Copy your logo file to:  src/assets/images/logo.png
   2. Add this line at the top of this file:
        import logoImage from "../assets/images/logo.png";
   3. Replace everything inside <Link> ... </Link> with:
        <img src={logoImage} alt={siteConfig.companyName} className="logo__image" />
   ========================================================= */

function Logo({ variant = "dark" }) {
  return (
    <Link
      to="/"
      className={`logo logo--${variant}`}
      aria-label={`${siteConfig.companyName} — Home`}
    >
      <span className="logo__mark" aria-hidden="true">
        <span className="logo__cross" />
      </span>
      <span className="logo__text">
        <span className="logo__name">
          {siteConfig.logoTextMain}
          <span className="logo__accent">{siteConfig.logoTextAccent}</span>
        </span>
        <span className="logo__tagline">{siteConfig.logoTagline}</span>
      </span>
    </Link>
  );
}

export default Logo;
```

---

## STEP 15 — `src/components/Logo.css`

**Create this file:** `src/components/Logo.css`

```css
.logo {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
}

.logo__image {
  height: 48px;
  width: auto;
}

.logo__mark {
  position: relative;
  width: 42px;
  height: 42px;
  border-radius: 11px;
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%);
  box-shadow: 0 6px 16px rgba(16, 52, 166, 0.3);
  display: grid;
  place-items: center;
  transition: transform var(--transition);
}

.logo:hover .logo__mark {
  transform: rotate(-6deg) scale(1.04);
}

/* White medical cross drawn with CSS */
.logo__cross {
  position: relative;
  width: 18px;
  height: 18px;
}

.logo__cross::before,
.logo__cross::after {
  content: "";
  position: absolute;
  background: #fff;
  border-radius: 2px;
}

.logo__cross::before {
  left: 6px;
  top: 0;
  width: 6px;
  height: 18px;
}

.logo__cross::after {
  top: 6px;
  left: 0;
  width: 18px;
  height: 6px;
}

.logo__text {
  display: flex;
  flex-direction: column;
  line-height: 1;
}

.logo__name {
  font-family: var(--font-heading);
  font-weight: 800;
  font-size: 1.3rem;
  letter-spacing: 0.04em;
  color: var(--navy);
}

.logo__accent {
  color: var(--primary);
}

.logo__tagline {
  margin-top: 5px;
  font-size: 0.66rem;
  font-weight: 600;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--text-light);
}

/* Light version used on the dark footer */
.logo--light .logo__name {
  color: #fff;
}

.logo--light .logo__accent {
  color: #8fb0ff;
}

.logo--light .logo__tagline {
  color: rgba(255, 255, 255, 0.55);
}
```

---

## STEP 16 — `src/components/Reveal.jsx`

**Create this file:** `src/components/Reveal.jsx`

```jsx
import { useEffect, useRef, useState } from "react";

/* =========================================================
   REVEAL — fades content in when it scrolls into view.
   Usage:  <Reveal> ...anything... </Reveal>
           <Reveal delay={150}> ... </Reveal>   (delay in ms)
   ========================================================= */

function Reveal({ children, delay = 0, as: Tag = "div", className = "" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Older browsers: just show the content
    if (!("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`.trim()}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

export default Reveal;
```

---

## STEP 17 — `src/components/SmartImage.jsx`

**Create this file:** `src/components/SmartImage.jsx`

```jsx
import { useState } from "react";
import { FaBriefcaseMedical } from "react-icons/fa6";
import "./SmartImage.css";

/* =========================================================
   SMART IMAGE — a normal <img> that shows a clean branded
   placeholder if the image fails to load (e.g. no internet).
   ========================================================= */

function SmartImage({ src, alt, className = "" }) {
  const [failed, setFailed] = useState(false);

  if (failed || !src) {
    return (
      <div className={`smart-image-fallback ${className}`} role="img" aria-label={alt}>
        <FaBriefcaseMedical aria-hidden="true" />
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}

export default SmartImage;
```

---

## STEP 18 — `src/components/SmartImage.css`

**Create this file:** `src/components/SmartImage.css`

```css
.smart-image-fallback {
  display: grid;
  place-items: center;
  width: 100%;
  height: 100%;
  min-height: 160px;
  background: linear-gradient(135deg, var(--primary-50) 0%, var(--primary-100) 100%);
  color: var(--primary);
  font-size: 2.6rem;
}
```

---

## STEP 19 — `src/components/ScrollToTop.jsx`

**Create this file:** `src/components/ScrollToTop.jsx`

```jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/* Scrolls the page back to the top every time the route changes */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}

export default ScrollToTop;
```

---

## STEP 20 — `src/components/Header.jsx`

**Create this file:** `src/components/Header.jsx`

```jsx
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  FiPhone,
  FiMail,
  FiClock,
  FiChevronDown,
  FiChevronLeft,
  FiMenu,
  FiX,
  FiArrowRight,
} from "react-icons/fi";
import Logo from "./Logo";
import siteConfig from "../config/siteConfig";
import brands from "../data/brands";
import "./Header.css";

/* Main navigation links (the "Our Brands" dropdown is added separately) */
const navBeforeBrands = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Bandages", path: "/bandages" },
  { label: "Dressings", path: "/dressings" },
  { label: "Absorbent Dressings", path: "/absorbent-dressings" },
  { label: "Medicated Dressing", path: "/medicated-dressing" },
  { label: "Protective Equipment", path: "/protective-equipment" },
];

const navAfterBrands = [
  { label: "All Products", path: "/products" },
  { label: "Contact", path: "/contact" },
];

function Header() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [brandsOpen, setBrandsOpen] = useState(false); // desktop click + mobile accordion
  const [innovaOpen, setInnovaOpen] = useState(false); // nested submenu

  // Add shadow to the header after scrolling a little
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close all menus whenever the page changes
  useEffect(() => {
    setMobileOpen(false);
    setBrandsOpen(false);
    setInnovaOpen(false);
  }, [location.pathname]);

  // Stop the page scrolling behind the open mobile menu
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Close menus with the Escape key
  useEffect(() => {
    const onKey = (event) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
        setBrandsOpen(false);
        setInnovaOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const brandsActive = location.pathname.startsWith("/brands");

  const navLinkClass = ({ isActive }) =>
    `nav__link ${isActive ? "nav__link--active" : ""}`;

  return (
    <>
      {/* ---------- Top info bar (desktop only) ---------- */}
      <div className="topbar">
        <div className="container topbar__inner">
          <div className="topbar__info">
            <a href={siteConfig.phoneLink} className="topbar__item">
              <FiPhone aria-hidden="true" /> {siteConfig.phone}
            </a>
            <a href={`mailto:${siteConfig.email}`} className="topbar__item">
              <FiMail aria-hidden="true" /> {siteConfig.email}
            </a>
            <span className="topbar__item">
              <FiClock aria-hidden="true" /> {siteConfig.businessHours}
            </span>
          </div>
          <Link to="/contact" className="topbar__cta">
            Send an Enquiry <FiArrowRight aria-hidden="true" />
          </Link>
        </div>
      </div>

      {/* ---------- Main sticky header ---------- */}
      <header className={`header ${isScrolled ? "header--scrolled" : ""}`}>
        <div className="container header__inner">
          <Logo />

          {/* Overlay behind the mobile menu */}
          <div
            className={`nav-overlay ${mobileOpen ? "nav-overlay--visible" : ""}`}
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />

          <nav
            id="main-navigation"
            className={`nav ${mobileOpen ? "nav--open" : ""}`}
            aria-label="Main navigation"
          >
            <div className="nav__mobile-head">
              <Logo />
              <button
                type="button"
                className="nav__close"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
              >
                <FiX />
              </button>
            </div>

            <ul className="nav__list">
              {navBeforeBrands.map((item) => (
                <li key={item.path} className="nav__item">
                  <NavLink to={item.path} end={item.path === "/"} className={navLinkClass}>
                    {item.label}
                  </NavLink>
                </li>
              ))}

              {/* ---------- Our Brands dropdown ---------- */}
              <li
                className={`nav__item nav__item--dropdown ${brandsOpen ? "is-open" : ""}`}
                onMouseLeave={() => {
                  setBrandsOpen(false);
                  setInnovaOpen(false);
                }}
              >
                <button
                  type="button"
                  className={`nav__link nav__toggle ${brandsActive ? "nav__link--active" : ""}`}
                  aria-expanded={brandsOpen}
                  aria-haspopup="true"
                  onClick={() => setBrandsOpen((open) => !open)}
                >
                  Our Brands
                  <FiChevronDown className="nav__chevron" aria-hidden="true" />
                </button>

                <ul className="dropdown">
                  {brands.map((brand) =>
                    brand.children ? (
                      <li
                        key={brand.slug}
                        className={`dropdown__item dropdown__item--has-sub ${innovaOpen ? "is-open" : ""}`}
                      >
                        <div className="dropdown__row">
                          <NavLink to={brand.path} end className="dropdown__link">
                            <span className="dropdown__dot" style={{ background: brand.color }} />
                            {brand.name}
                          </NavLink>
                          <button
                            type="button"
                            className="dropdown__sub-toggle"
                            aria-expanded={innovaOpen}
                            aria-label={`Show ${brand.name} products`}
                            onClick={() => setInnovaOpen((open) => !open)}
                          >
                            <FiChevronLeft aria-hidden="true" />
                          </button>
                        </div>

                        <ul className="submenu">
                          {brand.children.map((child) => (
                            <li key={child.slug}>
                              <NavLink to={child.path} className="dropdown__link dropdown__link--sub">
                                {child.name}
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      </li>
                    ) : (
                      <li key={brand.slug} className="dropdown__item">
                        <NavLink to={brand.path} className="dropdown__link">
                          <span className="dropdown__dot" style={{ background: brand.color }} />
                          {brand.name}
                        </NavLink>
                      </li>
                    )
                  )}
                </ul>
              </li>

              {navAfterBrands.map((item) => (
                <li key={item.path} className="nav__item">
                  <NavLink to={item.path} className={navLinkClass}>
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Contact block inside the mobile menu */}
            <div className="nav__mobile-contact">
              <a href={siteConfig.phoneLink}>
                <FiPhone aria-hidden="true" /> {siteConfig.phone}
              </a>
              <a href={`mailto:${siteConfig.email}`}>
                <FiMail aria-hidden="true" /> {siteConfig.email}
              </a>
              <Link to="/contact" className="btn btn--primary">
                Send an Enquiry
              </Link>
            </div>
          </nav>

          {/* Hamburger button (mobile & tablet) */}
          <button
            type="button"
            className="hamburger"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            aria-controls="main-navigation"
          >
            <FiMenu />
          </button>
        </div>
      </header>
    </>
  );
}

export default Header;
```

---

## STEP 21 — `src/components/Header.css`

**Create this file:** `src/components/Header.css`

```css
/* =========================================================
   HEADER
   Mobile-first: the menu is a slide-in panel by default,
   and becomes a horizontal menu on large screens (1360px+).
   ========================================================= */

/* ---------- Top info bar ---------- */
.topbar {
  display: none;
  background: var(--navy);
  color: rgba(255, 255, 255, 0.78);
  font-size: 0.82rem;
}

.topbar__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 42px;
}

.topbar__info {
  display: flex;
  gap: 28px;
}

.topbar__item {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: color var(--transition);
}

.topbar__item svg {
  color: #8fb0ff;
}

a.topbar__item:hover {
  color: #fff;
}

.topbar__cta {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-weight: 600;
  color: #fff;
  transition: gap var(--transition);
}

.topbar__cta:hover {
  gap: 10px;
}

@media (min-width: 1024px) {
  .topbar {
    display: block;
  }
}

/* ---------- Main header ---------- */
.header {
  position: sticky;
  top: 0;
  z-index: 1000;
  border-bottom: 1px solid transparent;
  transition:
    box-shadow var(--transition),
    border-color var(--transition);
}

/* Frosted-glass background. It lives on ::before (not on .header itself)
   so the slide-in mobile menu can still cover the full screen. */
.header::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: -1;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: saturate(180%) blur(12px);
  -webkit-backdrop-filter: saturate(180%) blur(12px);
}

.header--scrolled {
  border-bottom-color: var(--border);
  box-shadow: 0 6px 24px rgba(10, 22, 51, 0.07);
}

.header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 76px;
  gap: 24px;
}

/* ---------- Hamburger ---------- */
.hamburger {
  display: grid;
  place-items: center;
  width: 46px;
  height: 46px;
  border-radius: 12px;
  background: var(--primary-50);
  color: var(--primary);
  font-size: 1.4rem;
  transition: var(--transition);
}

.hamburger:hover {
  background: var(--primary);
  color: #fff;
}

/* ---------- Mobile overlay ---------- */
.nav-overlay {
  position: fixed;
  inset: 0;
  background: rgba(10, 22, 51, 0.5);
  opacity: 0;
  visibility: hidden;
  transition: var(--transition);
  z-index: 1001;
}

.nav-overlay--visible {
  opacity: 1;
  visibility: visible;
}

/* ---------- Mobile navigation panel ---------- */
.nav {
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  height: 100dvh;
  width: min(360px, 88vw);
  background: #fff;
  z-index: 1002;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  transform: translateX(100%);
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: -20px 0 50px rgba(10, 22, 51, 0.15);
}

.nav--open {
  transform: translateX(0);
}

.nav__mobile-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 22px;
  border-bottom: 1px solid var(--border);
}

.nav__close {
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: var(--bg-soft);
  color: var(--navy);
  font-size: 1.3rem;
  transition: var(--transition);
}

.nav__close:hover {
  background: var(--primary);
  color: #fff;
}

.nav__list {
  padding: 12px 14px;
  flex: 1;
}

.nav__item {
  border-bottom: 1px solid var(--bg-soft);
}

.nav__link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 13px 10px;
  font-family: var(--font-heading);
  font-weight: 600;
  font-size: 0.98rem;
  color: var(--navy);
  border-radius: 8px;
  transition: color var(--transition), background var(--transition);
  text-align: left;
}

.nav__link:hover {
  color: var(--primary);
  background: var(--primary-50);
}

.nav__link--active {
  color: var(--primary);
}

.nav__chevron {
  transition: transform var(--transition);
}

.nav__item--dropdown.is-open .nav__chevron {
  transform: rotate(180deg);
}

/* Mobile: dropdowns become accordions */
.dropdown,
.submenu {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.4s ease;
}

.nav__item--dropdown.is-open > .dropdown {
  max-height: 700px;
}

.dropdown__item--has-sub.is-open > .submenu {
  max-height: 200px;
}

.dropdown {
  padding-left: 10px;
}

.dropdown__row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.dropdown__link {
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 1;
  padding: 10px 12px;
  font-size: 0.93rem;
  font-weight: 500;
  color: var(--text-muted);
  border-radius: 8px;
  transition: var(--transition);
}

.dropdown__link:hover,
.dropdown__link.active {
  color: var(--primary);
  background: var(--primary-50);
}

.dropdown__dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}

.dropdown__sub-toggle {
  display: grid;
  place-items: center;
  width: 36px;
  height: 36px;
  border-radius: 8px;
  color: var(--text-muted);
  transition: var(--transition);
}

.dropdown__sub-toggle svg {
  transition: transform var(--transition);
}

.dropdown__sub-toggle:hover {
  background: var(--primary-50);
  color: var(--primary);
}

.dropdown__item--has-sub.is-open .dropdown__sub-toggle svg {
  transform: rotate(-90deg);
}

.submenu {
  padding-left: 28px;
}

.dropdown__link--sub {
  font-size: 0.9rem;
}

.dropdown__link--sub::before {
  content: "";
  width: 6px;
  height: 2px;
  background: currentColor;
  border-radius: 2px;
}

/* Contact block at the bottom of the mobile menu */
.nav__mobile-contact {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 20px 24px 28px;
  border-top: 1px solid var(--border);
  background: var(--bg-soft);
  font-size: 0.92rem;
}

.nav__mobile-contact a:not(.btn) {
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--text-muted);
}

.nav__mobile-contact svg {
  color: var(--primary);
}

.nav__mobile-contact .btn {
  margin-top: 6px;
}

/* =========================================================
   DESKTOP (1360px and up) — horizontal menu with dropdowns
   (below 1360px the hamburger menu is used, because the
    full menu has many items and needs the space)
   ========================================================= */
@media (min-width: 1360px) {
  .header__inner {
    height: var(--header-height);
    max-width: 1440px;
  }

  .hamburger,
  .nav-overlay,
  .nav__mobile-head,
  .nav__mobile-contact {
    display: none;
  }

  .nav {
    position: static;
    height: auto;
    width: auto;
    transform: none;
    box-shadow: none;
    overflow: visible;
    background: transparent;
  }

  .nav__list {
    display: flex;
    align-items: center;
    gap: 2px;
    padding: 0;
  }

  .nav__item {
    position: relative;
    border: none;
  }

  .nav__link {
    position: relative;
    padding: 10px 8px;
    font-size: 0.8rem;
    white-space: nowrap;
    gap: 4px;
  }

  .nav__link:hover {
    background: transparent;
  }

  /* Animated underline */
  .nav__link::after {
    content: "";
    position: absolute;
    left: 8px;
    right: 8px;
    bottom: 3px;
    height: 2px;
    background: var(--primary);
    border-radius: 2px;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform var(--transition);
  }

  .nav__link:hover::after,
  .nav__link--active::after {
    transform: scaleX(1);
  }

  /* Desktop dropdown panel */
  .dropdown,
  .submenu {
    max-height: none;
    overflow: visible;
  }

  .dropdown {
    position: absolute;
    top: calc(100% + 14px);
    left: 0;
    min-width: 230px;
    padding: 10px;
    background: #fff;
    border: 1px solid var(--border);
    border-radius: var(--radius);
    box-shadow: var(--shadow-lg);
    opacity: 0;
    visibility: hidden;
    transform: translateY(10px);
    transition:
      opacity 0.25s ease,
      transform 0.25s ease,
      visibility 0.25s;
  }

  /* Invisible bridge so the menu doesn't close when moving the mouse down */
  .dropdown::before {
    content: "";
    position: absolute;
    top: -16px;
    left: 0;
    right: 0;
    height: 16px;
  }

  .nav__item--dropdown:hover > .dropdown,
  .nav__item--dropdown:focus-within > .dropdown,
  .nav__item--dropdown.is-open > .dropdown {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }

  .nav__item--dropdown:hover .nav__chevron {
    transform: rotate(180deg);
  }

  .dropdown__item {
    position: relative;
  }

  /* Nested Innova flyout */
  /* Opens to the LEFT so it never goes off the right edge of the screen */
  .submenu {
    position: absolute;
    top: -10px;
    right: calc(100% + 10px);
    min-width: 190px;
    padding: 10px;
    background: #fff;
    border: 1px solid var(--border);
    border-radius: var(--radius);
    box-shadow: var(--shadow-lg);
    opacity: 0;
    visibility: hidden;
    transform: translateX(-8px);
    transition:
      opacity 0.25s ease,
      transform 0.25s ease,
      visibility 0.25s;
  }

  .submenu::before {
    content: "";
    position: absolute;
    top: 0;
    right: -12px;
    width: 12px;
    height: 100%;
  }

  .dropdown__item--has-sub:hover > .submenu,
  .dropdown__item--has-sub:focus-within > .submenu,
  .dropdown__item--has-sub.is-open > .submenu {
    opacity: 1;
    visibility: visible;
    transform: translateX(0);
  }

  .dropdown__item--has-sub:hover .dropdown__sub-toggle svg {
    transform: none;
    color: var(--primary);
  }

  .dropdown__item--has-sub.is-open .dropdown__sub-toggle svg {
    transform: none;
  }

  .submenu {
    padding-left: 10px;
  }
}

@media (min-width: 1440px) {
  .nav__link {
    padding: 10px 10px;
    font-size: 0.84rem;
  }
  .nav__link::after {
    left: 10px;
    right: 10px;
  }
}

@media (min-width: 1600px) {
  .nav__link {
    padding: 10px 13px;
    font-size: 0.9rem;
  }
  .nav__link::after {
    left: 13px;
    right: 13px;
  }
}
```

---

## STEP 22 — `src/components/Footer.jsx`

**Create this file:** `src/components/Footer.jsx`

```jsx
import { Link } from "react-router-dom";
import { FiPhone, FiMail, FiMapPin, FiClock, FiChevronRight } from "react-icons/fi";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaXTwitter } from "react-icons/fa6";
import Logo from "./Logo";
import siteConfig from "../config/siteConfig";
import "./Footer.css";

const productLinks = [
  { label: "Bandages", path: "/bandages" },
  { label: "Dressings", path: "/dressings" },
  { label: "Absorbent Dressings", path: "/absorbent-dressings" },
  { label: "Medicated Dressing", path: "/medicated-dressing" },
  { label: "Protective Equipment", path: "/protective-equipment" },
  { label: "All Products", path: "/products" },
];

/* Placeholder client categories — replace with real clients later */
const clients = [
  "Hospitals",
  "Clinics",
  "Nursing Homes",
  "Healthcare Institutions",
  "Medical Distributors",
  "Pharmacies",
];

const socialLinks = [
  { label: "Facebook", url: siteConfig.social.facebook, icon: <FaFacebookF /> },
  { label: "LinkedIn", url: siteConfig.social.linkedin, icon: <FaLinkedinIn /> },
  { label: "Instagram", url: siteConfig.social.instagram, icon: <FaInstagram /> },
  { label: "X (Twitter)", url: siteConfig.social.twitter, icon: <FaXTwitter /> },
];

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__glow" aria-hidden="true" />

      <div className="container footer__grid">
        {/* Column 1 — Logo + description */}
        <div className="footer__col footer__col--brand">
          <Logo variant="light" />
          <p className="footer__desc">{siteConfig.footerDescription}</p>
          <ul className="footer__social">
            {socialLinks.map((social) => (
              <li key={social.label}>
                <a
                  href={social.url}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 2 — Products */}
        <div className="footer__col">
          <h3 className="footer__title">Products</h3>
          <ul className="footer__links">
            {productLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path}>
                  <FiChevronRight aria-hidden="true" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 — Our Clients */}
        <div className="footer__col">
          <h3 className="footer__title">Our Clients</h3>
          <ul className="footer__links footer__links--static">
            {clients.map((client) => (
              <li key={client}>
                <span>
                  <FiChevronRight aria-hidden="true" />
                  {client}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4 — Contact */}
        <div className="footer__col">
          <h3 className="footer__title">Contact</h3>
          <ul className="footer__contact">
            <li>
              <span className="footer__icon"><FiPhone aria-hidden="true" /></span>
              <div>
                <small>Phone</small>
                <a href={siteConfig.phoneLink}>{siteConfig.phone}</a>
              </div>
            </li>
            <li>
              <span className="footer__icon"><FiMail aria-hidden="true" /></span>
              <div>
                <small>Email</small>
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              </div>
            </li>
            <li>
              <span className="footer__icon"><FiMapPin aria-hidden="true" /></span>
              <div>
                <small>Address</small>
                <span>{siteConfig.address}</span>
              </div>
            </li>
            <li>
              <span className="footer__icon"><FiClock aria-hidden="true" /></span>
              <div>
                <small>Business Hours</small>
                <span>{siteConfig.businessHours}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>
            © {siteConfig.copyrightYear} {siteConfig.companyName}. All Rights Reserved.
          </p>
          <div className="footer__bottom-links">
            <Link to="/about">About Us</Link>
            <Link to="/products">Products</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
```

---

## STEP 23 — `src/components/Footer.css`

**Create this file:** `src/components/Footer.css`

```css
/* =========================================================
   FOOTER — 4 columns → 2 columns → 1 column
   ========================================================= */

.footer {
  position: relative;
  overflow: hidden;
  background: linear-gradient(180deg, #0b1a3d 0%, var(--navy) 100%);
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.94rem;
}

/* Soft brand-blue glow in the corner */
.footer__glow {
  position: absolute;
  top: -220px;
  right: -160px;
  width: 520px;
  height: 520px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(16, 52, 166, 0.55) 0%, rgba(16, 52, 166, 0) 70%);
  pointer-events: none;
}

.footer::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--primary) 0%, var(--primary-light) 50%, var(--accent) 100%);
}

.footer__grid {
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  gap: 44px;
  padding-top: 72px;
  padding-bottom: 56px;
}

@media (min-width: 640px) {
  .footer__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .footer__grid {
    grid-template-columns: 1.4fr 1fr 1fr 1.3fr;
    gap: 48px;
    padding-top: 88px;
  }
}

.footer__desc {
  margin: 22px 0 26px;
  max-width: 320px;
  line-height: 1.75;
}

.footer__social {
  display: flex;
  gap: 10px;
}

.footer__social a {
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.07);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #fff;
  font-size: 0.95rem;
  transition: var(--transition);
}

.footer__social a:hover {
  background: var(--primary);
  border-color: var(--primary);
  transform: translateY(-3px);
}

.footer__title {
  position: relative;
  color: #fff;
  font-size: 1.08rem;
  font-weight: 700;
  margin-bottom: 26px;
  padding-bottom: 14px;
  letter-spacing: 0;
}

.footer__title::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 36px;
  height: 2px;
  background: var(--primary-light);
  border-radius: 2px;
}

.footer__links li + li {
  margin-top: 12px;
}

.footer__links a,
.footer__links span {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: var(--transition);
}

.footer__links svg {
  font-size: 0.85rem;
  color: #8fb0ff;
  transition: transform var(--transition);
}

.footer__links a:hover {
  color: #fff;
  transform: translateX(4px);
}

.footer__contact li {
  display: flex;
  gap: 14px;
  align-items: flex-start;
}

.footer__contact li + li {
  margin-top: 18px;
}

.footer__icon {
  display: grid;
  place-items: center;
  width: 38px;
  height: 38px;
  flex-shrink: 0;
  border-radius: 10px;
  background: rgba(16, 52, 166, 0.45);
  color: #b9cbff;
}

.footer__contact small {
  display: block;
  font-size: 0.72rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.45);
  margin-bottom: 2px;
}

.footer__contact a,
.footer__contact span {
  color: #fff;
  word-break: break-word;
}

.footer__contact a:hover {
  color: #8fb0ff;
}

/* Bottom copyright bar */
.footer__bottom {
  position: relative;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.footer__bottom-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding-top: 22px;
  padding-bottom: 22px;
  font-size: 0.86rem;
  text-align: center;
}

.footer__bottom-links {
  display: flex;
  gap: 22px;
}

.footer__bottom-links a:hover {
  color: #fff;
}

@media (min-width: 768px) {
  .footer__bottom-inner {
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
  }
}
```

---

## STEP 24 — `src/components/HeroSlider.jsx`

**Create this file:** `src/components/HeroSlider.jsx`

```jsx
import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FiChevronLeft, FiChevronRight, FiArrowRight } from "react-icons/fi";
import heroSlides from "../data/heroSlides";
import "./HeroSlider.css";

const AUTOPLAY_DELAY = 6000; // milliseconds between slides

function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef(null);
  const total = heroSlides.length;

  const goTo = useCallback((index) => setCurrent((index + total) % total), [total]);
  const next = useCallback(() => setCurrent((i) => (i + 1) % total), [total]);
  const prev = useCallback(() => setCurrent((i) => (i - 1 + total) % total), [total]);

  // Autoplay (restarts whenever the slide changes)
  useEffect(() => {
    if (paused) return;
    const timer = setTimeout(next, AUTOPLAY_DELAY);
    return () => clearTimeout(timer);
  }, [current, paused, next]);

  // Swipe support for phones
  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event) => {
    if (touchStartX.current === null) return;
    const distance = event.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(distance) > 50) {
      if (distance < 0) next();
      else prev();
    }
    touchStartX.current = null;
  };

  return (
    <section
      className={`hero-slider ${paused ? "is-paused" : ""}`}
      aria-roledescription="carousel"
      aria-label="Featured highlights"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {heroSlides.map((slide, index) => {
        const isActive = index === current;
        return (
          <div
            key={slide.id}
            className={`hero-slide ${isActive ? "is-active" : ""}`}
            role="group"
            aria-roledescription="slide"
            aria-label={`Slide ${index + 1} of ${total}`}
            aria-hidden={!isActive}
          >
            <img
              className="hero-slide__image"
              src={slide.image}
              alt={slide.alt}
              loading={index === 0 ? "eager" : "lazy"}
            />
            <div className="hero-slide__overlay" />

            <div className="container hero-slide__content">
              <span className="hero-slide__eyebrow">{slide.eyebrow}</span>
              <h1 className="hero-slide__title">{slide.title}</h1>
              <p className="hero-slide__text">{slide.description}</p>
              <div className="hero-slide__actions">
                <Link
                  to={slide.primaryButton.link}
                  className="btn btn--primary"
                  tabIndex={isActive ? 0 : -1}
                >
                  {slide.primaryButton.label} <FiArrowRight aria-hidden="true" />
                </Link>
                {slide.secondaryButton && (
                  <Link
                    to={slide.secondaryButton.link}
                    className="btn btn--ghost-light"
                    tabIndex={isActive ? 0 : -1}
                  >
                    {slide.secondaryButton.label}
                  </Link>
                )}
              </div>
            </div>
          </div>
        );
      })}

      {/* Previous / Next arrows */}
      <div className="hero-slider__arrows">
        <button type="button" className="hero-slider__arrow" onClick={prev} aria-label="Previous slide">
          <FiChevronLeft />
        </button>
        <button type="button" className="hero-slider__arrow" onClick={next} aria-label="Next slide">
          <FiChevronRight />
        </button>
      </div>

      {/* Dots + slide counter */}
      <div className="hero-slider__bottom">
        <div className="container hero-slider__bottom-inner">
          <div className="hero-slider__dots">
            {heroSlides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                className={`hero-slider__dot ${index === current ? "is-active" : ""}`}
                onClick={() => goTo(index)}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={index === current}
              >
                <span
                  key={index === current ? `active-${current}` : "idle"}
                  className="hero-slider__dot-fill"
                  style={{ animationDuration: `${AUTOPLAY_DELAY}ms` }}
                />
              </button>
            ))}
          </div>
          <span className="hero-slider__count">
            <strong>{String(current + 1).padStart(2, "0")}</strong> / {String(total).padStart(2, "0")}
          </span>
        </div>
      </div>
    </section>
  );
}

export default HeroSlider;
```

---

## STEP 25 — `src/components/HeroSlider.css`

**Create this file:** `src/components/HeroSlider.css`

```css
/* =========================================================
   HERO SLIDER
   ========================================================= */

.hero-slider {
  position: relative;
  height: 86vh;
  min-height: 560px;
  max-height: 820px;
  overflow: hidden;
  background: var(--navy);
}

/* Each slide sits on top of the others and fades in */
.hero-slide {
  position: absolute;
  inset: 0;
  opacity: 0;
  visibility: hidden;
  transition:
    opacity 1s ease,
    visibility 1s;
}

.hero-slide.is-active {
  opacity: 1;
  visibility: visible;
  z-index: 1;
}

.hero-slide__image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.12);
  transition: transform 7s ease-out;
}

/* Slow "Ken Burns" zoom on the active slide */
.hero-slide.is-active .hero-slide__image {
  transform: scale(1);
}

/* Blue/navy overlay for readable text */
.hero-slide__overlay {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(100deg, rgba(8, 20, 56, 0.94) 0%, rgba(11, 36, 112, 0.82) 42%, rgba(16, 52, 166, 0.35) 100%),
    linear-gradient(0deg, rgba(8, 20, 56, 0.55) 0%, rgba(8, 20, 56, 0) 40%);
}

.hero-slide__content {
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 110px;
}

.hero-slide__content > * {
  max-width: 680px;
}

/* Text animation — each line slides up one after another */
.hero-slide__eyebrow,
.hero-slide__title,
.hero-slide__text,
.hero-slide__actions {
  opacity: 0;
  transform: translateY(30px);
  transition:
    opacity 0.8s ease,
    transform 0.8s cubic-bezier(0.2, 0.7, 0.2, 1);
}

.hero-slide.is-active .hero-slide__eyebrow,
.hero-slide.is-active .hero-slide__title,
.hero-slide.is-active .hero-slide__text,
.hero-slide.is-active .hero-slide__actions {
  opacity: 1;
  transform: none;
}

.hero-slide.is-active .hero-slide__eyebrow { transition-delay: 0.3s; }
.hero-slide.is-active .hero-slide__title { transition-delay: 0.45s; }
.hero-slide.is-active .hero-slide__text { transition-delay: 0.6s; }
.hero-slide.is-active .hero-slide__actions { transition-delay: 0.75s; }

.hero-slide__eyebrow {
  display: inline-flex;
  align-items: center;
  align-self: flex-start;
  gap: 10px;
  padding: 7px 16px;
  border-radius: 50px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.22);
  color: #cfdcff;
  font-family: var(--font-heading);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  margin-bottom: 22px;
  backdrop-filter: blur(6px);
}

.hero-slide__eyebrow::before {
  content: "";
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #5ee0c6;
  box-shadow: 0 0 0 4px rgba(94, 224, 198, 0.2);
}

.hero-slide__title {
  color: #fff;
  font-size: clamp(2.1rem, 5.4vw, 4rem);
  line-height: 1.08;
  margin-bottom: 22px;
}

.hero-slide__text {
  color: rgba(255, 255, 255, 0.82);
  font-size: clamp(1rem, 1.5vw, 1.15rem);
  margin-bottom: 36px;
  max-width: 560px;
}

.hero-slide__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
}

/* ---------- Arrows ---------- */
.hero-slider__arrows {
  position: absolute;
  z-index: 3;
  right: 20px;
  bottom: 96px;
  display: flex;
  gap: 10px;
}

.hero-slider__arrow {
  display: grid;
  place-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  color: #fff;
  font-size: 1.35rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.28);
  backdrop-filter: blur(6px);
  transition: var(--transition);
}

.hero-slider__arrow:hover {
  background: #fff;
  color: var(--primary);
  border-color: #fff;
}

/* ---------- Dots + counter ---------- */
.hero-slider__bottom {
  position: absolute;
  z-index: 3;
  left: 0;
  right: 0;
  bottom: 96px; /* kept above the white trust strip that overlaps the slider */
}

.hero-slider__bottom-inner {
  display: flex;
  align-items: center;
  gap: 22px;
}

.hero-slider__dots {
  display: flex;
  gap: 10px;
}

.hero-slider__dot {
  position: relative;
  width: 44px;
  height: 4px;
  padding: 0;
  border-radius: 4px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.28);
  transition: width var(--transition);
}

.hero-slider__dot::before {
  /* larger click area */
  content: "";
  position: absolute;
  inset: -10px 0;
}

.hero-slider__dot.is-active {
  width: 72px;
}

.hero-slider__dot-fill {
  position: absolute;
  inset: 0;
  background: #fff;
  transform: scaleX(0);
  transform-origin: left;
}

.hero-slider__dot.is-active .hero-slider__dot-fill {
  animation: heroProgress linear forwards;
}

.hero-slider.is-paused .hero-slider__dot.is-active .hero-slider__dot-fill {
  animation-play-state: paused;
}

@keyframes heroProgress {
  to {
    transform: scaleX(1);
  }
}

.hero-slider__count {
  color: rgba(255, 255, 255, 0.6);
  font-family: var(--font-heading);
  font-size: 0.9rem;
}

.hero-slider__count strong {
  color: #fff;
  font-size: 1.05rem;
}

/* ---------- Responsive ---------- */
@media (max-width: 767px) {
  .hero-slider {
    height: 88vh;
    min-height: 600px;
  }

  .hero-slide__overlay {
    background: linear-gradient(180deg, rgba(8, 20, 56, 0.7) 0%, rgba(11, 36, 112, 0.88) 100%);
  }

  .hero-slide__content {
    padding-bottom: 150px;
  }

  .hero-slide__actions .btn {
    flex: 1 1 auto;
  }

  .hero-slider__arrows {
    bottom: 60px;
    right: 20px;
  }

  .hero-slider__arrow {
    width: 42px;
    height: 42px;
    font-size: 1.15rem;
  }

  .hero-slider__bottom {
    bottom: 80px;
  }

  .hero-slider__count {
    display: none;
  }
}

@media (min-width: 1024px) {
  .hero-slider__arrows {
    right: max(32px, calc((100vw - var(--container)) / 2 + 32px));
    bottom: 96px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero-slide__image,
  .hero-slide.is-active .hero-slide__image {
    transform: none;
    transition: none;
  }
}
```

---

## STEP 26 — `src/components/SectionHeading.jsx`

**Create this file:** `src/components/SectionHeading.jsx`

```jsx
import Reveal from "./Reveal";

/* =========================================================
   SECTION HEADING — small label + big title + paragraph
   (styles are in src/index.css → "Section heading")
   Props:
   - eyebrow: small label above the title
   - title:   main heading
   - text:    optional paragraph
   - center:  true to center-align
   ========================================================= */

function SectionHeading({ eyebrow, title, text, center = false }) {
  return (
    <Reveal className={`section-heading ${center ? "section-heading--center" : ""}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </Reveal>
  );
}

export default SectionHeading;
```

---

## STEP 27 — `src/components/PageHero.jsx`

**Create this file:** `src/components/PageHero.jsx`

```jsx
import { Link } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";
import "./PageHero.css";

/* =========================================================
   PAGE HERO — banner at the top of inner pages
   Props:
   - title:       big heading
   - subtitle:    optional short text
   - image:       background image
   - breadcrumbs: [{ label: "Home", path: "/" }, { label: "About Us" }]
                  (the last item has no path = current page)
   ========================================================= */

function PageHero({ title, subtitle, image, breadcrumbs = [] }) {
  return (
    <section className="page-hero">
      {image && <img className="page-hero__image" src={image} alt="" aria-hidden="true" />}
      <div className="page-hero__overlay" />
      <div className="page-hero__pattern" aria-hidden="true" />

      <div className="container page-hero__content">
        <nav aria-label="Breadcrumb">
          <ol className="breadcrumb">
            {breadcrumbs.map((crumb, index) => {
              const isLast = index === breadcrumbs.length - 1;
              return (
                <li key={crumb.label} className="breadcrumb__item">
                  {crumb.path && !isLast ? (
                    <Link to={crumb.path}>{crumb.label}</Link>
                  ) : (
                    <span aria-current={isLast ? "page" : undefined}>{crumb.label}</span>
                  )}
                  {!isLast && <FiChevronRight className="breadcrumb__sep" aria-hidden="true" />}
                </li>
              );
            })}
          </ol>
        </nav>

        <h1 className="page-hero__title">{title}</h1>
        {subtitle && <p className="page-hero__subtitle">{subtitle}</p>}
      </div>
    </section>
  );
}

export default PageHero;
```

---

## STEP 28 — `src/components/PageHero.css`

**Create this file:** `src/components/PageHero.css`

```css
/* =========================================================
   PAGE HERO (inner page banner) + BREADCRUMB
   ========================================================= */

.page-hero {
  position: relative;
  overflow: hidden;
  background: var(--primary-dark);
  padding: 88px 0 80px;
}

@media (min-width: 768px) {
  .page-hero {
    padding: 120px 0 108px;
  }
}

.page-hero__image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  animation: pageHeroZoom 12s ease-out both;
}

@keyframes pageHeroZoom {
  from {
    transform: scale(1.1);
  }
  to {
    transform: scale(1);
  }
}

.page-hero__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(110deg, rgba(8, 20, 56, 0.95) 0%, rgba(16, 52, 166, 0.86) 55%, rgba(16, 52, 166, 0.6) 100%);
}

/* Subtle dotted pattern fading in from the right side */
.page-hero__pattern {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 50%;
  opacity: 0.16;
  background: radial-gradient(circle, #fff 1.5px, transparent 1.6px) 0 0 / 26px 26px;
  -webkit-mask-image: linear-gradient(to left, #000 0%, transparent 100%);
  mask-image: linear-gradient(to left, #000 0%, transparent 100%);
}

.page-hero__content {
  position: relative;
  z-index: 2;
  animation: pageHeroText 0.9s cubic-bezier(0.2, 0.7, 0.2, 1) both;
}

@keyframes pageHeroText {
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: none;
  }
}

.page-hero__title {
  color: #fff;
  font-size: clamp(2.2rem, 5vw, 3.6rem);
  margin-bottom: 14px;
}

.page-hero__subtitle {
  max-width: 620px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.06rem;
}

/* ---------- Breadcrumb ---------- */
.breadcrumb {
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 4px;
  padding: 7px 16px;
  margin-bottom: 22px;
  border-radius: 50px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.18);
  font-size: 0.85rem;
  backdrop-filter: blur(6px);
}

.breadcrumb__item {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  color: #fff;
  font-weight: 600;
}

.breadcrumb__item a {
  color: rgba(255, 255, 255, 0.72);
  font-weight: 500;
  transition: color var(--transition);
}

.breadcrumb__item a:hover {
  color: #fff;
}

.breadcrumb__sep {
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.85rem;
}
```

---

## STEP 29 — `src/components/ProductCard.jsx`

**Create this file:** `src/components/ProductCard.jsx`

```jsx
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import SmartImage from "./SmartImage";
import categories from "../data/categories";
import "./ProductCard.css";

/* =========================================================
   PRODUCT CARD — used on All Products, Category and Brand pages
   ========================================================= */

function ProductCard({ product }) {
  const category = categories.find((c) => c.slug === product.category);

  return (
    <article className="product-card">
      <div className="product-card__media">
        <SmartImage src={product.image} alt={product.name} className="product-card__image" />
        {category && <span className="product-card__badge">{category.name}</span>}
      </div>

      <div className="product-card__body">
        <h3 className="product-card__title">{product.name}</h3>
        <p className="product-card__desc">{product.description}</p>

        <Link
          to={`/contact?product=${encodeURIComponent(product.name)}`}
          className="product-card__btn"
        >
          Enquire Now <FiArrowRight aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}

export default ProductCard;
```

---

## STEP 30 — `src/components/ProductCard.css`

**Create this file:** `src/components/ProductCard.css`

```css
/* =========================================================
   PRODUCT CARD + PRODUCT GRID
   Grid: 4 columns → 3 → 2 → 1
   ========================================================= */

.product-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
}

@media (min-width: 560px) {
  .product-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 900px) {
  .product-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 1200px) {
  .product-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.product-card {
  display: flex;
  flex-direction: column;
  height: 100%;
  background: #fff;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  overflow: hidden;
  transition:
    transform var(--transition),
    box-shadow var(--transition),
    border-color var(--transition);
  animation: productFadeIn 0.5s ease both;
}

@keyframes productFadeIn {
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: none;
  }
}

.product-card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-lg);
  border-color: var(--primary-200);
}

.product-card__media {
  position: relative;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  background: var(--bg-soft);
}

.product-card__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.product-card:hover .product-card__image {
  transform: scale(1.07);
}

.product-card__badge {
  position: absolute;
  top: 14px;
  left: 14px;
  padding: 5px 12px;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.94);
  color: var(--primary);
  font-family: var(--font-heading);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.03em;
  box-shadow: var(--shadow-sm);
}

.product-card__body {
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 22px 22px 24px;
}

.product-card__title {
  font-size: 1.08rem;
  font-weight: 700;
  margin-bottom: 8px;
  letter-spacing: -0.01em;
}

.product-card__desc {
  flex: 1;
  color: var(--text-muted);
  font-size: 0.92rem;
  line-height: 1.6;
  margin-bottom: 20px;
}

.product-card__btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 11px 18px;
  border-radius: 9px;
  border: 1.5px solid var(--primary-200);
  color: var(--primary);
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 0.88rem;
  transition: var(--transition);
}

.product-card__btn svg {
  transition: transform var(--transition);
}

.product-card__btn:hover,
.product-card:hover .product-card__btn {
  background: var(--primary);
  border-color: var(--primary);
  color: #fff;
}

.product-card__btn:hover svg {
  transform: translateX(4px);
}
```

---

## STEP 31 — `src/components/ProductListing.jsx`

**Create this file:** `src/components/ProductListing.jsx`

```jsx
import { useMemo, useState } from "react";
import { FiPackage } from "react-icons/fi";
import ProductCard from "./ProductCard";
import categories from "../data/categories";
import "./ProductListing.css";

/* =========================================================
   PRODUCT LISTING — reusable product grid with optional
   category filter tabs.
   Props:
   - products:     array of products to show
   - showFilters:  true to show the category tabs
   ========================================================= */

function ProductListing({ products, showFilters = false }) {
  const [activeCategory, setActiveCategory] = useState("all");

  const tabs = useMemo(
    () => [
      { slug: "all", name: "All", count: products.length },
      ...categories.map((category) => ({
        slug: category.slug,
        name: category.name,
        count: products.filter((p) => p.category === category.slug).length,
      })),
    ],
    [products]
  );

  const visibleProducts =
    activeCategory === "all"
      ? products
      : products.filter((product) => product.category === activeCategory);

  return (
    <div className="product-listing">
      {showFilters && (
        <div className="filter-tabs" role="tablist" aria-label="Filter products by category">
          {tabs.map((tab) => (
            <button
              key={tab.slug}
              type="button"
              role="tab"
              aria-selected={activeCategory === tab.slug}
              className={`filter-tab ${activeCategory === tab.slug ? "is-active" : ""}`}
              onClick={() => setActiveCategory(tab.slug)}
            >
              {tab.name}
              <span className="filter-tab__count">{tab.count}</span>
            </button>
          ))}
        </div>
      )}

      <p className="product-listing__summary">
        Showing <strong>{visibleProducts.length}</strong>{" "}
        {visibleProducts.length === 1 ? "product" : "products"}
      </p>

      {visibleProducts.length > 0 ? (
        <div className="product-grid" key={activeCategory}>
          {visibleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="product-listing__empty">
          <FiPackage aria-hidden="true" />
          <h3>Products coming soon</h3>
          <p>We are updating this range. Please contact us for the latest product information.</p>
        </div>
      )}
    </div>
  );
}

export default ProductListing;
```

---

## STEP 32 — `src/components/ProductListing.css`

**Create this file:** `src/components/ProductListing.css`

```css
/* =========================================================
   PRODUCT LISTING — filter tabs + summary + empty state
   ========================================================= */

.filter-tabs {
  display: flex;
  gap: 10px;
  margin-bottom: 28px;
  padding-bottom: 6px;
  overflow-x: auto;
  scrollbar-width: none;
}

.filter-tabs::-webkit-scrollbar {
  display: none;
}

@media (min-width: 900px) {
  .filter-tabs {
    flex-wrap: wrap;
    justify-content: center;
    overflow: visible;
  }
}

.filter-tab {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  flex-shrink: 0;
  padding: 11px 18px;
  border-radius: 10px;
  background: #fff;
  border: 1px solid var(--border);
  color: var(--text);
  font-family: var(--font-heading);
  font-weight: 600;
  font-size: 0.9rem;
  white-space: nowrap;
  transition: var(--transition);
}

.filter-tab:hover {
  border-color: var(--primary-200);
  color: var(--primary);
}

.filter-tab.is-active {
  background: var(--primary);
  border-color: var(--primary);
  color: #fff;
  box-shadow: 0 8px 18px rgba(16, 52, 166, 0.24);
}

.filter-tab__count {
  display: grid;
  place-items: center;
  min-width: 24px;
  height: 22px;
  padding: 0 6px;
  border-radius: 6px;
  background: var(--primary-50);
  color: var(--primary);
  font-size: 0.74rem;
  font-weight: 700;
}

.filter-tab.is-active .filter-tab__count {
  background: rgba(255, 255, 255, 0.2);
  color: #fff;
}

.product-listing__summary {
  color: var(--text-muted);
  font-size: 0.92rem;
  margin-bottom: 22px;
}

.product-listing__summary strong {
  color: var(--navy);
}

.product-listing__empty {
  text-align: center;
  padding: 64px 24px;
  border: 1px dashed var(--primary-200);
  border-radius: var(--radius);
  background: var(--bg-softer);
}

.product-listing__empty svg {
  font-size: 2.4rem;
  color: var(--primary);
  margin-bottom: 14px;
}

.product-listing__empty h3 {
  margin-bottom: 8px;
}

.product-listing__empty p {
  color: var(--text-muted);
}
```

---

## STEP 33 — `src/components/CTASection.jsx`

**Create this file:** `src/components/CTASection.jsx`

```jsx
import { Link } from "react-router-dom";
import { FiArrowRight, FiPhoneCall } from "react-icons/fi";
import Reveal from "./Reveal";
import siteConfig from "../config/siteConfig";
import "./CTASection.css";

/* =========================================================
   CTA SECTION — strong call-to-action banner
   Props (all optional):
   - title, text, buttonLabel, buttonLink
   ========================================================= */

function CTASection({
  title = "Looking for Reliable Medical Dressing Solutions?",
  text = "Talk to our team for product information, bulk supply enquiries and partnership opportunities. We usually respond within one business day.",
  buttonLabel = "Contact Us",
  buttonLink = "/contact",
}) {
  return (
    <section className="cta">
      <div className="container">
        <Reveal className="cta__box">
          <div className="cta__shape cta__shape--one" aria-hidden="true" />
          <div className="cta__shape cta__shape--two" aria-hidden="true" />

          <div className="cta__content">
            <span className="cta__label">Get In Touch</span>
            <h2 className="cta__title">{title}</h2>
            <p className="cta__text">{text}</p>
          </div>

          <div className="cta__actions">
            <Link to={buttonLink} className="btn btn--white">
              {buttonLabel} <FiArrowRight aria-hidden="true" />
            </Link>
            <a href={siteConfig.phoneLink} className="cta__phone">
              <span className="cta__phone-icon">
                <FiPhoneCall aria-hidden="true" />
              </span>
              <span>
                <small>Call us directly</small>
                {siteConfig.phone}
              </span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default CTASection;
```

---

## STEP 34 — `src/components/CTASection.css`

**Create this file:** `src/components/CTASection.css`

```css
/* =========================================================
   CTA SECTION
   ========================================================= */

.cta {
  padding: 0 0 88px;
  background: var(--bg);
}

.cta__box {
  position: relative;
  overflow: hidden;
  display: grid;
  gap: 32px;
  align-items: center;
  padding: 48px 28px;
  border-radius: var(--radius-lg);
  background: linear-gradient(120deg, var(--primary-dark) 0%, var(--primary) 55%, var(--primary-light) 100%);
  box-shadow: 0 30px 60px rgba(16, 52, 166, 0.28);
}

@media (min-width: 768px) {
  .cta__box {
    padding: 64px 56px;
  }
}

@media (min-width: 1024px) {
  .cta__box {
    grid-template-columns: 1.5fr 1fr;
    padding: 72px 72px;
  }
}

/* Decorative circles */
.cta__shape {
  position: absolute;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.14);
  pointer-events: none;
}

.cta__shape--one {
  width: 420px;
  height: 420px;
  top: -200px;
  right: -120px;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 70%);
}

.cta__shape--two {
  width: 260px;
  height: 260px;
  bottom: -150px;
  left: 30%;
}

.cta__content,
.cta__actions {
  position: relative;
  z-index: 1;
}

.cta__label {
  display: inline-block;
  font-family: var(--font-heading);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #b9cbff;
  margin-bottom: 14px;
}

.cta__title {
  color: #fff;
  font-size: clamp(1.7rem, 3.4vw, 2.5rem);
  margin-bottom: 14px;
}

.cta__text {
  color: rgba(255, 255, 255, 0.8);
  max-width: 560px;
}

.cta__actions {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 22px;
}

@media (min-width: 1024px) {
  .cta__actions {
    align-items: flex-end;
  }
}

.cta__phone {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  color: #fff;
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 1.05rem;
}

.cta__phone small {
  display: block;
  font-family: var(--font-body);
  font-weight: 400;
  font-size: 0.78rem;
  color: rgba(255, 255, 255, 0.7);
}

.cta__phone-icon {
  display: grid;
  place-items: center;
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.14);
  border: 1px solid rgba(255, 255, 255, 0.25);
  transition: var(--transition);
}

.cta__phone:hover .cta__phone-icon {
  background: #fff;
  color: var(--primary);
}
```

---

## STEP 35 — `src/pages/NotFound.jsx`

**Create this file:** `src/pages/NotFound.jsx`

```jsx
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import "./NotFound.css";

/* Shown when someone opens a URL that doesn't exist */
function NotFound() {
  return (
    <section className="not-found">
      <div className="container not-found__inner">
        <span className="not-found__code">404</span>
        <h1>Page Not Found</h1>
        <p>Sorry, the page you are looking for doesn't exist or has been moved.</p>
        <div className="not-found__actions">
          <Link to="/" className="btn btn--primary">
            <FiArrowLeft aria-hidden="true" /> Back to Home
          </Link>
          <Link to="/products" className="btn btn--outline">
            View Products
          </Link>
        </div>
      </div>
    </section>
  );
}

export default NotFound;
```

---

## STEP 36 — `src/pages/NotFound.css`

**Create this file:** `src/pages/NotFound.css`

```css
.not-found {
  padding: 120px 0;
  background:
    radial-gradient(circle, rgba(16, 52, 166, 0.07) 1.5px, transparent 1.6px) 0 0 / 24px 24px,
    var(--bg-soft);
}

.not-found__inner {
  text-align: center;
  max-width: 620px;
}

.not-found__code {
  display: block;
  font-family: var(--font-heading);
  font-size: clamp(5rem, 16vw, 8rem);
  font-weight: 800;
  line-height: 1;
  color: var(--primary);
  margin-bottom: 12px;
}

.not-found h1 {
  font-size: clamp(1.8rem, 4vw, 2.4rem);
  margin-bottom: 12px;
}

.not-found p {
  color: var(--text-muted);
  margin-bottom: 32px;
}

.not-found__actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 14px;
}
```

---

## STEP 37 — `src/pages/Home.jsx`

**Create this file:** `src/pages/Home.jsx`

```jsx
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiCheck,
  FiShield,
  FiLayers,
  FiHeart,
  FiHeadphones,
} from "react-icons/fi";
import {
  FaBriefcaseMedical,
  FaClipboardCheck,
  FaTruckMedical,
  FaHandshake,
  FaHospital,
  FaHouseMedical,
  FaHandHoldingMedical,
  FaPrescriptionBottleMedical,
  FaKitMedical,
  FaUserDoctor,
} from "react-icons/fa6";
import HeroSlider from "../components/HeroSlider";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import SmartImage from "../components/SmartImage";
import CTASection from "../components/CTASection";
import categories from "../data/categories";
import brands from "../data/brands";
import images from "../data/images";
import "./Home.css";

/* ---------- Page content (edit text here) ---------- */

const trustItems = [
  { icon: <FiShield />, title: "Quality Checked", text: "Consistent product standards" },
  { icon: <FiLayers />, title: "Wide Range", text: "Bandages to protective wear" },
  { icon: <FiHeart />, title: "Patient Focused", text: "Comfort and safety first" },
  { icon: <FiHeadphones />, title: "Quick Support", text: "Responsive enquiry handling" },
];

const services = [
  {
    icon: <FaBriefcaseMedical />,
    title: "Medical Dressing Solutions",
    text: "A complete portfolio of bandages, wound dressings and absorbent products for every level of care.",
  },
  {
    icon: <FaClipboardCheck />,
    title: "Quality Assurance",
    text: "Careful material selection and quality checks help ensure every product performs as expected.",
  },
  {
    icon: <FaTruckMedical />,
    title: "Healthcare Supply",
    text: "Dependable supply for hospitals, clinics, pharmacies and distributors, in the quantities you need.",
  },
  {
    icon: <FaHandshake />,
    title: "Reliable Support",
    text: "A responsive team that helps you choose the right products and keeps your orders moving.",
  },
];

/* Placeholder client categories — replace with real client logos later */
const clients = [
  { icon: <FaHospital />, name: "Hospital", label: "Multi-speciality care" },
  { icon: <FaHouseMedical />, name: "Clinic", label: "Outpatient care" },
  { icon: <FaUserDoctor />, name: "Healthcare", label: "Medical professionals" },
  { icon: <FaPrescriptionBottleMedical />, name: "Pharmacy", label: "Retail & chain" },
  { icon: <FaKitMedical />, name: "Medical Distributor", label: "Regional supply" },
  { icon: <FaHandHoldingMedical />, name: "Healthcare Partner", label: "Institutional" },
];

function Home() {
  return (
    <>
      {/* ===== SECTION 1 — HERO SLIDER ===== */}
      <HeroSlider />

      {/* Trust strip */}
      <section className="trust-strip" aria-label="Why customers trust us">
        <div className="container">
          <div className="trust-strip__grid">
            {trustItems.map((item, index) => (
              <Reveal key={item.title} delay={index * 80} className="trust-strip__item">
                <span className="trust-strip__icon" aria-hidden="true">{item.icon}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 2 — ABOUT PREVIEW ===== */}
      <section className="section home-about">
        <div className="container home-about__grid">
          <Reveal className="home-about__media">
            <div className="home-about__image-wrap">
              <SmartImage
                src={images.aboutHome}
                alt="Healthcare professional handling sterile medical supplies"
                className="home-about__image"
              />
            </div>
            <div className="home-about__badge">
              {/* PLACEHOLDER NUMBER — change it to your real value */}
              <strong>10+</strong>
              <span>Product<br />Categories</span>
            </div>
            <div className="home-about__dots" aria-hidden="true" />
          </Reveal>

          <Reveal delay={150} className="home-about__content">
            <span className="eyebrow">About Us</span>
            <h2>Committed to Quality Healthcare Solutions</h2>
            <p className="home-about__lead">
              We are a dedicated manufacturer and supplier of medical and surgical dressings,
              providing healthcare professionals with products they can trust every day.
            </p>
            <p>
              From bandages and sterile dressings to absorbent and medicated wound-care products,
              our range is developed with a clear focus on safety, comfort and consistent
              performance — supporting better outcomes for patients and caregivers alike.
            </p>

            <ul className="home-about__highlights">
              <li><FiCheck aria-hidden="true" /> Quality Focused</li>
              <li><FiCheck aria-hidden="true" /> Reliable Products</li>
              <li><FiCheck aria-hidden="true" /> Healthcare Driven</li>
            </ul>

            <Link to="/about" className="btn btn--primary">
              Know More <FiArrowRight aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ===== SECTION 3 — PRODUCT RANGE ===== */}
      <section className="section section--soft home-products">
        <div className="container">
          <SectionHeading
            center
            eyebrow="Our Products"
            title="Our Product Range"
            text="We provide a comprehensive range of medical and surgical dressing products — designed for hospitals, clinics and home-care settings."
          />

          <div className="category-cards">
            {categories.map((category, index) => (
              <Reveal key={category.slug} delay={index * 90} className="category-card">
                <Link to={category.path} className="category-card__link">
                  <div className="category-card__media">
                    <SmartImage src={category.image} alt={category.name} className="category-card__image" />
                    <span className="category-card__number">0{index + 1}</span>
                  </div>
                  <div className="category-card__body">
                    <h3>{category.name}</h3>
                    <p>{category.shortDescription}</p>
                    <span className="category-card__btn">
                      View Products <FiArrowRight aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <div className="home-products__more">
            <Link to="/products" className="btn btn--outline">
              View All Products <FiArrowRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== SECTION 4 — WHAT WE DO ===== */}
      <section className="section what-we-do">
        <div className="container">
          <div className="what-we-do__head">
            <SectionHeading
              eyebrow="What We Do"
              title="Supporting Healthcare With Every Product"
            />
            <Reveal delay={100}>
              <p className="what-we-do__intro">
                We combine dependable products with dependable service — so healthcare teams can
                focus on what matters most: caring for patients.
              </p>
            </Reveal>
          </div>

          <div className="service-cards">
            {services.map((service, index) => (
              <Reveal key={service.title} delay={index * 100}>
                <div className="service-card">
                  <span className="service-card__icon" aria-hidden="true">{service.icon}</span>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <span className="service-card__index" aria-hidden="true">0{index + 1}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 5 — OUR BRANDS ===== */}
      <section className="section section--soft home-brands">
        <div className="container">
          <SectionHeading
            center
            eyebrow="Our Brands"
            title="Trusted Brands for Every Need"
            text="Each of our brands is focused on a specific area of care, giving you the right product for the right application."
          />

          <div className="brand-blocks">
            {brands.map((brand, index) => (
              <Reveal key={brand.slug} delay={index * 60}>
                <Link
                  to={brand.path}
                  className="brand-block"
                  style={{ "--brand-color": brand.color }}
                  aria-label={`${brand.name} — ${brand.tagline}`}
                >
                  <span className="brand-block__mark" aria-hidden="true">
                    {brand.name.charAt(0)}
                  </span>
                  <span className="brand-block__text">
                    <span className="brand-block__name">{brand.name}</span>
                    <span className="brand-block__tagline">{brand.tagline}</span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 6 — CLIENTS & PARTNERS ===== */}
      <section className="section home-clients">
        <div className="container">
          <SectionHeading
            center
            eyebrow="Our Network"
            title="Our Clients & Partners"
            text="We proudly serve a growing network of healthcare institutions, professionals and distribution partners."
          />

          <div className="client-cards">
            {clients.map((client, index) => (
              <Reveal key={client.name} delay={index * 70}>
                <div className="client-card">
                  <span className="client-card__icon" aria-hidden="true">{client.icon}</span>
                  <span className="client-card__name">{client.name}</span>
                  <span className="client-card__label">{client.label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 7 — CTA ===== */}
      <CTASection />
    </>
  );
}

export default Home;
```

---

## STEP 38 — `src/pages/Home.css`

**Create this file:** `src/pages/Home.css`

```css
/* =========================================================
   HOME PAGE
   ========================================================= */

/* ---------- Trust strip (overlaps the slider) ---------- */
.trust-strip {
  position: relative;
  z-index: 5;
  margin-top: -1px;
  background: var(--bg);
}

.trust-strip__grid {
  display: grid;
  grid-template-columns: 1fr;
  background: #fff;
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow);
  transform: translateY(-40px);
}

@media (min-width: 640px) {
  .trust-strip__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .trust-strip__grid {
    grid-template-columns: repeat(4, 1fr);
    transform: translateY(-56px);
  }
}

.trust-strip__item {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 24px 26px;
  border-bottom: 1px solid var(--border);
}

.trust-strip__item:last-child {
  border-bottom: none;
}

@media (min-width: 640px) {
  .trust-strip__item:nth-child(odd) {
    border-right: 1px solid var(--border);
  }
  .trust-strip__item:nth-last-child(-n + 2) {
    border-bottom: none;
  }
}

@media (min-width: 1024px) {
  .trust-strip__item {
    border-bottom: none;
    border-right: 1px solid var(--border);
    padding: 30px 28px;
  }
  .trust-strip__item:last-child {
    border-right: none;
  }
}

.trust-strip__icon {
  display: grid;
  place-items: center;
  width: 50px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 12px;
  background: var(--primary-50);
  color: var(--primary);
  font-size: 1.35rem;
}

.trust-strip__item h3 {
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0;
}

.trust-strip__item p {
  font-size: 0.86rem;
  color: var(--text-muted);
  line-height: 1.5;
}

/* ---------- About preview ---------- */
.home-about {
  padding-top: 24px;
}

.home-about__grid {
  display: grid;
  gap: 64px;
  align-items: center;
}

@media (min-width: 992px) {
  .home-about__grid {
    grid-template-columns: 1fr 1fr;
    gap: 80px;
  }
}

.home-about__media {
  position: relative;
  padding: 0 0 28px 0;
}

.home-about__image-wrap {
  position: relative;
  z-index: 1;
  border-radius: var(--radius-lg);
  overflow: hidden;
  aspect-ratio: 5 / 4;
  box-shadow: var(--shadow);
}

.home-about__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.home-about__badge {
  position: absolute;
  z-index: 2;
  right: 16px;
  bottom: 0;
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 20px 24px;
  border-radius: var(--radius);
  background: var(--primary);
  color: #fff;
  box-shadow: 0 20px 40px rgba(16, 52, 166, 0.35);
}

.home-about__badge strong {
  font-family: var(--font-heading);
  font-size: 2.4rem;
  line-height: 1;
}

.home-about__badge span {
  font-size: 0.86rem;
  line-height: 1.35;
  color: rgba(255, 255, 255, 0.85);
}

.home-about__dots {
  position: absolute;
  top: -24px;
  left: -24px;
  width: 140px;
  height: 140px;
  background: radial-gradient(circle, var(--primary-200) 2px, transparent 2.5px) 0 0 / 18px 18px;
}

.home-about__content h2 {
  font-size: clamp(1.8rem, 3.4vw, 2.6rem);
  margin-bottom: 20px;
}

.home-about__lead {
  font-size: 1.1rem;
  color: var(--navy);
  font-weight: 500;
  margin-bottom: 14px;
}

.home-about__content > p:not(.home-about__lead) {
  color: var(--text-muted);
}

.home-about__highlights {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin: 28px 0 34px;
}

.home-about__highlights li {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 9px 16px;
  border-radius: 8px;
  background: var(--bg-soft);
  border: 1px solid var(--border);
  font-family: var(--font-heading);
  font-weight: 600;
  font-size: 0.9rem;
  color: var(--navy);
}

.home-about__highlights svg {
  display: grid;
  width: 20px;
  height: 20px;
  padding: 3px;
  border-radius: 50%;
  background: var(--success);
  color: #fff;
}

/* ---------- Product range cards ---------- */
.category-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
}

.category-cards > .reveal {
  flex: 1 1 100%;
}

@media (min-width: 640px) {
  .category-cards > .reveal {
    flex: 0 1 calc(50% - 12px);
  }
}

@media (min-width: 1024px) {
  .category-cards > .reveal {
    flex: 0 1 calc(33.333% - 16px);
  }
}

.category-card__link {
  display: flex;
  flex-direction: column;
  height: 100%;
  background: #fff;
  border-radius: var(--radius);
  border: 1px solid var(--border);
  overflow: hidden;
  transition:
    transform var(--transition),
    box-shadow var(--transition);
}

.category-card__link:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-lg);
}

.category-card__media {
  position: relative;
  aspect-ratio: 16 / 10;
  overflow: hidden;
}

.category-card__media::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(16, 52, 166, 0) 40%, rgba(11, 36, 112, 0.55) 100%);
  transition: opacity var(--transition);
}

.category-card__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.7s ease;
}

.category-card__link:hover .category-card__image {
  transform: scale(1.08);
}

.category-card__number {
  position: absolute;
  z-index: 1;
  right: 18px;
  bottom: 12px;
  font-family: var(--font-heading);
  font-size: 2rem;
  font-weight: 800;
  color: rgba(255, 255, 255, 0.85);
}

.category-card__body {
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 26px 26px 28px;
}

.category-card__body::before {
  content: "";
  position: absolute;
  top: 0;
  left: 26px;
  width: 40px;
  height: 3px;
  background: var(--primary);
  border-radius: 0 0 3px 3px;
  transition: width var(--transition);
}

.category-card__link:hover .category-card__body::before {
  width: 80px;
}

.category-card__body h3 {
  font-size: 1.25rem;
  margin-bottom: 10px;
}

.category-card__body p {
  flex: 1;
  color: var(--text-muted);
  font-size: 0.94rem;
  margin-bottom: 20px;
}

.category-card__btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 0.92rem;
  color: var(--primary);
}

.category-card__btn svg {
  transition: transform var(--transition);
}

.category-card__link:hover .category-card__btn svg {
  transform: translateX(5px);
}

.home-products__more {
  margin-top: 48px;
  text-align: center;
}

/* ---------- What we do ---------- */
.what-we-do__head {
  display: grid;
  gap: 8px;
  margin-bottom: 52px;
}

.what-we-do__head .section-heading {
  margin-bottom: 0;
}

.what-we-do__intro {
  color: var(--text-muted);
  font-size: 1.05rem;
  max-width: 480px;
}

@media (min-width: 992px) {
  .what-we-do__head {
    grid-template-columns: 1.2fr 1fr;
    align-items: end;
    gap: 64px;
  }
}

.service-cards {
  display: grid;
  gap: 24px;
}

@media (min-width: 640px) {
  .service-cards {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1200px) {
  .service-cards {
    grid-template-columns: repeat(4, 1fr);
  }
}

.service-card {
  position: relative;
  height: 100%;
  overflow: hidden;
  padding: 36px 30px;
  border-radius: var(--radius);
  background: #fff;
  border: 1px solid var(--border);
  transition:
    transform var(--transition),
    box-shadow var(--transition),
    background var(--transition),
    border-color var(--transition);
}

.service-card:hover {
  background: var(--primary);
  border-color: var(--primary);
  transform: translateY(-6px);
  box-shadow: var(--shadow-lg);
}

.service-card__icon {
  display: grid;
  place-items: center;
  width: 62px;
  height: 62px;
  border-radius: 14px;
  margin-bottom: 26px;
  background: var(--primary-50);
  color: var(--primary);
  font-size: 1.6rem;
  transition: var(--transition);
}

.service-card:hover .service-card__icon {
  background: rgba(255, 255, 255, 0.14);
  color: #fff;
}

.service-card h3 {
  font-size: 1.15rem;
  margin-bottom: 12px;
  transition: color var(--transition);
}

.service-card p {
  color: var(--text-muted);
  font-size: 0.94rem;
  transition: color var(--transition);
}

.service-card:hover h3 {
  color: #fff;
}

.service-card:hover p {
  color: rgba(255, 255, 255, 0.82);
}

.service-card__index {
  position: absolute;
  top: 22px;
  right: 24px;
  font-family: var(--font-heading);
  font-size: 2.6rem;
  font-weight: 800;
  line-height: 1;
  color: var(--bg-soft);
  transition: color var(--transition);
}

.service-card:hover .service-card__index {
  color: rgba(255, 255, 255, 0.1);
}

/* ---------- Brand blocks ---------- */
.brand-blocks {
  display: grid;
  grid-template-columns: 1fr;
  gap: 18px;
}

@media (min-width: 560px) {
  .brand-blocks {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 900px) {
  .brand-blocks {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 1200px) {
  .brand-blocks {
    grid-template-columns: repeat(4, 1fr);
  }
}

.brand-block {
  --brand-color: var(--primary);
  display: flex;
  align-items: center;
  gap: 16px;
  height: 100%;
  padding: 26px 24px;
  border-radius: var(--radius);
  background: #fff;
  border: 1px solid var(--border);
  transition: var(--transition);
}

.brand-block:hover {
  border-color: var(--brand-color);
  transform: translateY(-5px);
  box-shadow: var(--shadow);
}

.brand-block__mark {
  display: grid;
  place-items: center;
  width: 54px;
  height: 54px;
  flex-shrink: 0;
  border-radius: 14px;
  background: var(--brand-color);
  color: #fff;
  font-family: var(--font-heading);
  font-size: 1.5rem;
  font-weight: 800;
  box-shadow: inset 0 -6px 12px rgba(0, 0, 0, 0.15);
  transition: transform var(--transition);
}

.brand-block:hover .brand-block__mark {
  transform: rotate(-8deg);
}

.brand-block__text {
  display: flex;
  flex-direction: column;
}

.brand-block__name {
  font-family: var(--font-heading);
  font-size: 1.25rem;
  font-weight: 800;
  color: var(--navy);
  letter-spacing: -0.01em;
  line-height: 1.2;
}

.brand-block__tagline {
  font-size: 0.74rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--text-light);
  margin-top: 4px;
}

/* ---------- Client cards ---------- */
.client-cards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

@media (min-width: 768px) {
  .client-cards {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 1200px) {
  .client-cards {
    grid-template-columns: repeat(6, 1fr);
  }
}

.client-card {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 30px 16px;
  border-radius: var(--radius);
  border: 1px solid var(--border);
  background: var(--bg-softer);
  filter: grayscale(1);
  opacity: 0.8;
  transition:
    filter var(--transition),
    opacity var(--transition),
    background var(--transition),
    box-shadow var(--transition),
    transform var(--transition);
}

.client-card:hover {
  filter: none;
  opacity: 1;
  background: #fff;
  box-shadow: var(--shadow);
}

.client-card__icon {
  font-size: 2rem;
  color: var(--primary);
  margin-bottom: 14px;
}

.client-card__name {
  font-family: var(--font-heading);
  font-weight: 800;
  font-size: 1rem;
  color: var(--navy);
  line-height: 1.25;
}

.client-card__label {
  margin-top: 4px;
  font-size: 0.78rem;
  color: var(--text-light);
}
```

---

## STEP 39 — `src/pages/About.jsx`

**Create this file:** `src/pages/About.jsx`

```jsx
import { Link } from "react-router-dom";
import { FiTarget, FiEye, FiArrowRight, FiCheckCircle } from "react-icons/fi";
import { FaAward, FaShieldHeart, FaLightbulb, FaUsers } from "react-icons/fa6";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import SmartImage from "../components/SmartImage";
import CTASection from "../components/CTASection";
import images from "../data/images";
import "./About.css";

/* PLACEHOLDER NUMBERS — replace with your real figures */
const stats = [
  { value: "10+", label: "Product Categories" },
  { value: "100%", label: "Quality Focus" },
  { value: "24/7", label: "Customer Support" },
];

const aboutPoints = [
  "Carefully selected, skin-friendly materials",
  "Consistent quality checks at every stage",
  "Products for hospitals, clinics and home care",
  "Dependable supply and responsive service",
];

const whyChooseUs = [
  {
    icon: <FaAward />,
    title: "Quality",
    text: "Every product is made with carefully selected materials and checked to meet consistent quality standards.",
  },
  {
    icon: <FaShieldHeart />,
    title: "Reliability",
    text: "Healthcare teams count on our products performing the same way, every single time they are used.",
  },
  {
    icon: <FaLightbulb />,
    title: "Innovation",
    text: "We continuously improve our range to bring better comfort, absorbency and protection to patients.",
  },
  {
    icon: <FaUsers />,
    title: "Customer Focus",
    text: "We listen closely to clinicians and partners, and support them with fast, helpful service.",
  },
];

function About() {
  return (
    <>
      <PageHero
        title="About Us"
        subtitle="Dedicated to delivering safe, dependable medical and surgical dressing solutions for healthcare professionals."
        image={images.aboutBanner}
        breadcrumbs={[{ label: "Home", path: "/" }, { label: "About Us" }]}
      />

      {/* ===== Main about section ===== */}
      <section className="section about-main">
        <div className="container about-main__grid">
          <Reveal className="about-main__media">
            <div className="about-main__frame">
              <SmartImage
                src={images.aboutPage}
                alt="Medical professional preparing wound-care supplies"
                className="about-main__image"
              />
            </div>
            <div className="about-main__experience">
              <FiCheckCircle aria-hidden="true" />
              <span>
                <strong>Quality First</strong>
                In every product we make
              </span>
            </div>
          </Reveal>

          <Reveal delay={150} className="about-main__content">
            <span className="eyebrow">Who We Are</span>
            <h2>Committed to Quality, Care and Reliability</h2>
            <p className="about-main__lead">
              We are a medical and surgical dressings company focused on one goal — giving
              healthcare professionals products they can rely on, every day.
            </p>
            <p>
              Our range covers bandages, sterile wound dressings, absorbent dressings, medicated
              dressings and protective equipment. Each product is developed with attention to
              material quality, patient comfort and clinical performance, so that hospitals,
              clinics, nursing homes and pharmacies can deliver safe and effective care.
            </p>
            <p>
              Behind every product is a team that values precision, consistency and long-term
              relationships with the people we serve.
            </p>

            <ul className="about-main__points">
              {aboutPoints.map((point) => (
                <li key={point}>
                  <FiCheckCircle aria-hidden="true" /> {point}
                </li>
              ))}
            </ul>

            <div className="about-stats">
              {stats.map((stat) => (
                <div key={stat.label} className="about-stats__item">
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== Mission & Vision ===== */}
      <section className="section mission">
        <div className="mission__bg" aria-hidden="true" />
        <div className="container">
          <SectionHeading
            center
            eyebrow="Our Purpose"
            title="Mission & Vision"
            text="The principles that guide every product we develop and every partnership we build."
          />

          <div className="mission__grid">
            <Reveal className="mission-card">
              <span className="mission-card__icon" aria-hidden="true"><FiTarget /></span>
              <h3>Our Mission</h3>
              <p>
                To provide high-quality, affordable medical and surgical dressings that help
                healthcare professionals deliver safe, comfortable and effective patient care.
              </p>
            </Reveal>

            <Reveal delay={150} className="mission-card mission-card--accent">
              <span className="mission-card__icon" aria-hidden="true"><FiEye /></span>
              <h3>Our Vision</h3>
              <p>
                To be a trusted name in wound care and medical consumables, recognised for
                quality, reliability and a genuine commitment to better healthcare outcomes.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== Why choose us ===== */}
      <section className="section why-us">
        <div className="container">
          <SectionHeading
            center
            eyebrow="Why Choose Us"
            title="What Makes Us Different"
            text="Four commitments that shape how we work with healthcare professionals and partners."
          />

          <div className="why-us__grid">
            {whyChooseUs.map((item, index) => (
              <Reveal key={item.title} delay={index * 100}>
                <div className="why-card">
                  <span className="why-card__icon" aria-hidden="true">{item.icon}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="why-us__more">
            <Link to="/products" className="btn btn--primary">
              Explore Our Products <FiArrowRight aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}

export default About;
```

---

## STEP 40 — `src/pages/About.css`

**Create this file:** `src/pages/About.css`

```css
/* =========================================================
   ABOUT PAGE
   ========================================================= */

/* ---------- Main about ---------- */
.about-main__grid {
  display: grid;
  gap: 64px;
  align-items: center;
}

@media (min-width: 992px) {
  .about-main__grid {
    grid-template-columns: 1fr 1.05fr;
    gap: 80px;
  }
}

.about-main__media {
  position: relative;
  padding: 0 0 36px 24px;
}

/* Offset blue frame behind the image */
.about-main__media::before {
  content: "";
  position: absolute;
  top: 24px;
  left: 0;
  right: 24px;
  bottom: 12px;
  border: 2px solid var(--primary-200);
  border-radius: var(--radius-lg);
}

.about-main__frame {
  position: relative;
  border-radius: var(--radius-lg);
  overflow: hidden;
  aspect-ratio: 4 / 5;
  max-height: 600px;
  width: 100%;
  box-shadow: var(--shadow);
}

.about-main__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.about-main__experience {
  position: absolute;
  left: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 18px 22px;
  background: #fff;
  border-radius: var(--radius);
  box-shadow: var(--shadow-lg);
}

.about-main__experience svg {
  font-size: 2rem;
  color: var(--primary);
}

.about-main__experience span {
  font-size: 0.85rem;
  color: var(--text-muted);
  line-height: 1.4;
}

.about-main__experience strong {
  display: block;
  font-family: var(--font-heading);
  font-size: 1.05rem;
  color: var(--navy);
}

.about-main__content h2 {
  font-size: clamp(1.8rem, 3.4vw, 2.6rem);
  margin-bottom: 20px;
}

.about-main__lead {
  font-size: 1.1rem;
  font-weight: 500;
  color: var(--navy);
  margin-bottom: 16px;
}

.about-main__content > p:not(.about-main__lead) {
  color: var(--text-muted);
  margin-bottom: 14px;
}

.about-main__points {
  display: grid;
  gap: 12px;
  margin: 26px 0 34px;
}

@media (min-width: 560px) {
  .about-main__points {
    grid-template-columns: 1fr 1fr;
  }
}

.about-main__points li {
  display: flex;
  gap: 10px;
  align-items: flex-start;
  font-size: 0.94rem;
  font-weight: 500;
  color: var(--navy);
}

.about-main__points svg {
  flex-shrink: 0;
  margin-top: 4px;
  color: var(--primary);
}

/* ---------- Stats ---------- */
.about-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  overflow: hidden;
}

.about-stats__item {
  padding: 22px 12px;
  text-align: center;
  background: var(--bg-softer);
}

.about-stats__item + .about-stats__item {
  border-left: 1px solid var(--border);
}

.about-stats__item strong {
  display: block;
  font-family: var(--font-heading);
  font-size: clamp(1.6rem, 3vw, 2.2rem);
  font-weight: 800;
  line-height: 1.1;
  color: var(--primary);
}

.about-stats__item span {
  font-size: 0.82rem;
  color: var(--text-muted);
}

/* ---------- Mission & Vision ---------- */
.mission {
  position: relative;
  overflow: hidden;
  background: var(--navy);
}

.mission__bg {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 15% 20%, rgba(16, 52, 166, 0.55) 0%, transparent 45%),
    radial-gradient(circle at 85% 90%, rgba(47, 86, 214, 0.35) 0%, transparent 40%);
}

.mission .container {
  position: relative;
}

.mission .section-heading h2 {
  color: #fff;
}

.mission .section-heading p {
  color: rgba(255, 255, 255, 0.7);
}

.mission .eyebrow {
  color: #8fb0ff;
}

.mission .eyebrow::before,
.mission .eyebrow::after {
  background: #8fb0ff;
}

.mission__grid {
  display: grid;
  gap: 24px;
}

@media (min-width: 768px) {
  .mission__grid {
    grid-template-columns: 1fr 1fr;
  }
}

.mission-card {
  height: 100%;
  padding: 44px 36px;
  border-radius: var(--radius-lg);
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(4px);
}

.mission-card--accent {
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%);
  border-color: transparent;
}

.mission-card__icon {
  display: grid;
  place-items: center;
  width: 60px;
  height: 60px;
  margin-bottom: 24px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
  font-size: 1.6rem;
}

.mission-card h3 {
  color: #fff;
  font-size: 1.5rem;
  margin-bottom: 14px;
}

.mission-card p {
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.02rem;
}

/* ---------- Why choose us ---------- */
.why-us__grid {
  display: grid;
  gap: 24px;
}

@media (min-width: 640px) {
  .why-us__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1200px) {
  .why-us__grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.why-card {
  position: relative;
  height: 100%;
  padding: 36px 28px;
  text-align: center;
  background: #fff;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  transition: var(--transition);
}

.why-card::after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: -1px;
  width: 0;
  height: 3px;
  background: var(--primary);
  border-radius: 3px 3px 0 0;
  transform: translateX(-50%);
  transition: width var(--transition);
}

.why-card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow);
}

.why-card:hover::after {
  width: 60%;
}

.why-card__icon {
  display: inline-grid;
  place-items: center;
  width: 72px;
  height: 72px;
  margin-bottom: 22px;
  border-radius: 50%;
  background: var(--primary-50);
  color: var(--primary);
  font-size: 1.7rem;
  box-shadow: 0 0 0 8px var(--bg-softer);
  transition: var(--transition);
}

.why-card:hover .why-card__icon {
  background: var(--primary);
  color: #fff;
}

.why-card h3 {
  font-size: 1.2rem;
  margin-bottom: 10px;
}

.why-card p {
  color: var(--text-muted);
  font-size: 0.94rem;
}

.why-us__more {
  margin-top: 48px;
  text-align: center;
}
```

---

## STEP 41 — `src/pages/Products.jsx`

**Create this file:** `src/pages/Products.jsx`

```jsx
import PageHero from "../components/PageHero";
import ProductListing from "../components/ProductListing";
import CTASection from "../components/CTASection";
import products from "../data/products";
import images from "../data/images";
import "./Products.css";

function Products() {
  return (
    <>
      <PageHero
        title="All Products"
        subtitle="Browse our complete range of medical and surgical dressing products. Use the filters to find exactly what you need."
        image={images.productsBanner}
        breadcrumbs={[{ label: "Home", path: "/" }, { label: "Products" }]}
      />

      <section className="section products-page">
        <div className="container">
          <ProductListing products={products} showFilters />
        </div>
      </section>

      <CTASection
        title="Can't Find the Product You Need?"
        text="Our team can help with product specifications, custom sizes and bulk requirements. Send us an enquiry and we will get back to you."
        buttonLabel="Send an Enquiry"
      />
    </>
  );
}

export default Products;
```

---

## STEP 42 — `src/pages/Products.css`

**Create this file:** `src/pages/Products.css`

```css
/* =========================================================
   ALL PRODUCTS PAGE
   (product grid styles live in components/ProductCard.css,
    filter tab styles in components/ProductListing.css)
   ========================================================= */

.products-page {
  background: var(--bg-soft);
}
```

---

## STEP 43 — `src/pages/CategoryPage.jsx`

**Create this file:** `src/pages/CategoryPage.jsx`

```jsx
import { Link, useLocation } from "react-router-dom";
import { FiArrowRight, FiCheck } from "react-icons/fi";
import PageHero from "../components/PageHero";
import ProductListing from "../components/ProductListing";
import Reveal from "../components/Reveal";
import CTASection from "../components/CTASection";
import NotFound from "./NotFound";
import categories from "../data/categories";
import products from "../data/products";
import "./CategoryPage.css";

/* =========================================================
   CATEGORY PAGE — one reusable page for:
   /bandages, /dressings, /absorbent-dressings,
   /medicated-dressing, /protective-equipment
   It reads the current URL and shows the matching category.
   ========================================================= */

function CategoryPage() {
  const { pathname } = useLocation();
  const category = categories.find((c) => c.path === pathname);

  if (!category) return <NotFound />;

  const categoryProducts = products.filter((p) => p.category === category.slug);
  const otherCategories = categories.filter((c) => c.slug !== category.slug);

  return (
    <>
      <PageHero
        title={category.name}
        subtitle={category.shortDescription}
        image={category.image}
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Products", path: "/products" },
          { label: category.name },
        ]}
      />

      <section className="section category-intro">
        <div className="container category-intro__grid">
          <Reveal className="category-intro__text">
            <span className="eyebrow">Product Category</span>
            <h2>{category.name} Range</h2>
            <p>{category.description}</p>
            <ul className="category-intro__features">
              <li><FiCheck aria-hidden="true" /> Quality-checked materials</li>
              <li><FiCheck aria-hidden="true" /> Multiple sizes available</li>
              <li><FiCheck aria-hidden="true" /> Bulk supply on request</li>
            </ul>
          </Reveal>

          <Reveal delay={120} as="aside" className="category-intro__aside">
            <h3>Other Categories</h3>
            <ul>
              {otherCategories.map((other) => (
                <li key={other.slug}>
                  <Link to={other.path}>
                    {other.name} <FiArrowRight aria-hidden="true" />
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/products" className="category-intro__all">
                  View All Products <FiArrowRight aria-hidden="true" />
                </Link>
              </li>
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section section--soft category-products">
        <div className="container">
          <ProductListing products={categoryProducts} />
        </div>
      </section>

      <CTASection
        title={`Need ${category.name} in Bulk?`}
        text="Contact us for pricing, specifications and supply options for hospitals, clinics and distributors."
        buttonLabel="Request a Quote"
      />
    </>
  );
}

export default CategoryPage;
```

---

## STEP 44 — `src/pages/CategoryPage.css`

**Create this file:** `src/pages/CategoryPage.css`

```css
/* =========================================================
   CATEGORY PAGE
   ========================================================= */

.category-intro {
  padding-bottom: 64px;
}

.category-intro__grid {
  display: grid;
  gap: 40px;
  align-items: start;
}

@media (min-width: 992px) {
  .category-intro__grid {
    grid-template-columns: 1.6fr 1fr;
    gap: 64px;
  }
}

.category-intro__text h2 {
  font-size: clamp(1.7rem, 3vw, 2.3rem);
  margin-bottom: 16px;
}

.category-intro__text p {
  color: var(--text-muted);
  font-size: 1.05rem;
  margin-bottom: 24px;
}

.category-intro__features {
  display: flex;
  flex-wrap: wrap;
  gap: 12px 24px;
}

.category-intro__features li {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  font-size: 0.94rem;
  color: var(--navy);
}

.category-intro__features svg {
  color: var(--primary);
}

/* Sidebar with other categories */
.category-intro__aside {
  padding: 28px;
  border-radius: var(--radius);
  background: var(--bg-soft);
  border: 1px solid var(--border);
}

.category-intro__aside h3 {
  font-size: 1.05rem;
  margin-bottom: 14px;
  letter-spacing: 0;
}

.category-intro__aside a {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 11px 0;
  border-bottom: 1px solid var(--border);
  font-weight: 500;
  font-size: 0.94rem;
  color: var(--text);
  transition: var(--transition);
}

.category-intro__aside a svg {
  color: var(--text-light);
  transition: var(--transition);
}

.category-intro__aside a:hover {
  color: var(--primary);
  padding-left: 6px;
}

.category-intro__aside a:hover svg {
  color: var(--primary);
}

.category-intro__aside .category-intro__all {
  border-bottom: none;
  font-family: var(--font-heading);
  font-weight: 700;
  color: var(--primary);
}

.category-intro__aside .category-intro__all svg {
  color: var(--primary);
}

.category-products {
  padding-top: 72px;
}
```

---

## STEP 45 — `src/pages/BrandPage.jsx`

**Create this file:** `src/pages/BrandPage.jsx`

```jsx
import { Link, useLocation } from "react-router-dom";
import { FiArrowRight, FiCheck, FiArrowLeft } from "react-icons/fi";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import ProductListing from "../components/ProductListing";
import Reveal from "../components/Reveal";
import CTASection from "../components/CTASection";
import NotFound from "./NotFound";
import brands, { findBrandByPath } from "../data/brands";
import products from "../data/products";
import images from "../data/images";
import "./BrandPage.css";

/* =========================================================
   BRAND PAGE — one reusable page for every brand:
   /brands/ansuya, /brands/innova, /brands/innova/fix, etc.
   It reads the current URL and shows the matching brand.
   ========================================================= */

function BrandPage() {
  const { pathname } = useLocation();
  const { brand, parent } = findBrandByPath(pathname);

  if (!brand) return <NotFound />;

  const brandProducts = products.filter((p) => brand.productBrands.includes(p.brand));
  const otherBrands = brands.filter((b) => b.slug !== brand.slug && b.slug !== parent?.slug);

  const breadcrumbs = [
    { label: "Home", path: "/" },
    { label: "Our Brands" },
    ...(parent ? [{ label: parent.name, path: parent.path }] : []),
    { label: brand.name },
  ];

  return (
    <>
      <PageHero
        title={brand.name}
        subtitle={brand.tagline}
        image={images.brandBanner}
        breadcrumbs={breadcrumbs}
      />

      {/* ===== Brand introduction ===== */}
      <section className="section brand-intro">
        <div className="container brand-intro__grid" style={{ "--brand-color": brand.color }}>
          <Reveal className="brand-intro__logo-wrap">
            {/* Placeholder brand logo — replace with an <img> of the real logo later */}
            <div className="brand-logo">
              <span className="brand-logo__mark" aria-hidden="true">{brand.name.charAt(0)}</span>
              <span className="brand-logo__name">{brand.name}</span>
              <span className="brand-logo__tagline">{brand.tagline}</span>
            </div>
          </Reveal>

          <Reveal delay={150} className="brand-intro__content">
            {parent && (
              <Link to={parent.path} className="brand-intro__parent">
                <FiArrowLeft aria-hidden="true" /> Part of the {parent.name} family
              </Link>
            )}
            <span className="eyebrow">About the Brand</span>
            <h2>{brand.name}</h2>
            <p>{brand.description}</p>

            <ul className="brand-intro__highlights">
              {brand.highlights.map((highlight) => (
                <li key={highlight}>
                  <FiCheck aria-hidden="true" /> {highlight}
                </li>
              ))}
            </ul>

            {/* Sub-brands (shown on the Innova page) */}
            {brand.children && (
              <div className="sub-brands">
                {brand.children.map((child) => (
                  <Link key={child.slug} to={child.path} className="sub-brand">
                    <span>
                      <strong>{child.name}</strong>
                      <small>{child.tagline}</small>
                    </span>
                    <FiArrowRight aria-hidden="true" />
                  </Link>
                ))}
              </div>
            )}
          </Reveal>
        </div>
      </section>

      {/* ===== Product showcase ===== */}
      <section className="section section--soft brand-products">
        <div className="container">
          <SectionHeading
            center
            eyebrow={`${brand.name} Products`}
            title="Product Showcase"
            text={`Explore products available under the ${brand.name} brand.`}
          />
          <ProductListing products={brandProducts} />
        </div>
      </section>

      {/* ===== Other brands ===== */}
      <section className="section brand-others">
        <div className="container">
          <SectionHeading eyebrow="Explore More" title="Our Other Brands" />
          <div className="brand-others__list">
            {otherBrands.map((other) => (
              <Link
                key={other.slug}
                to={other.path}
                className="brand-chip"
                style={{ "--brand-color": other.color }}
              >
                <span className="brand-chip__mark" aria-hidden="true">{other.name.charAt(0)}</span>
                {other.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={`Interested in ${brand.name} Products?`}
        text="Get in touch for product details, pricing and supply options. Our team will be glad to help."
        buttonLabel="Enquire Now"
      />
    </>
  );
}

export default BrandPage;
```

---

## STEP 46 — `src/pages/BrandPage.css`

**Create this file:** `src/pages/BrandPage.css`

```css
/* =========================================================
   BRAND PAGE
   ========================================================= */

.brand-intro__grid {
  --brand-color: var(--primary);
  display: grid;
  gap: 48px;
  align-items: center;
}

@media (min-width: 992px) {
  .brand-intro__grid {
    grid-template-columns: 1fr 1.3fr;
    gap: 80px;
  }
}

/* ---------- Big placeholder logo ---------- */
.brand-logo {
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 340px;
  padding: 48px 32px;
  border-radius: var(--radius-lg);
  background:
    radial-gradient(circle, rgba(16, 52, 166, 0.08) 1.5px, transparent 1.6px) 0 0 / 22px 22px,
    linear-gradient(160deg, #fff 0%, var(--primary-50) 100%);
  border: 1px solid var(--border);
  box-shadow: var(--shadow);
}

.brand-logo::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 5px;
  background: var(--brand-color);
}

.brand-logo__mark {
  display: grid;
  place-items: center;
  width: 96px;
  height: 96px;
  margin-bottom: 22px;
  border-radius: 24px;
  background: var(--brand-color);
  color: #fff;
  font-family: var(--font-heading);
  font-size: 2.8rem;
  font-weight: 800;
  box-shadow:
    inset 0 -10px 20px rgba(0, 0, 0, 0.15),
    0 18px 36px rgba(16, 52, 166, 0.25);
}

.brand-logo__name {
  font-family: var(--font-heading);
  font-size: 2.2rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  color: var(--navy);
  line-height: 1.1;
}

.brand-logo__tagline {
  margin-top: 8px;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--brand-color);
}

/* ---------- Brand content ---------- */
.brand-intro__parent {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 18px;
  padding: 6px 14px;
  border-radius: 50px;
  background: var(--primary-50);
  color: var(--primary);
  font-size: 0.85rem;
  font-weight: 600;
  transition: var(--transition);
}

.brand-intro__parent:hover {
  background: var(--primary);
  color: #fff;
}

.brand-intro__content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.brand-intro__content h2 {
  font-size: clamp(1.9rem, 3.4vw, 2.6rem);
  margin-bottom: 16px;
}

.brand-intro__content > p {
  color: var(--text-muted);
  font-size: 1.05rem;
  margin-bottom: 26px;
}

.brand-intro__highlights {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.brand-intro__highlights li {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 9px 16px;
  border-radius: 8px;
  background: var(--bg-soft);
  border: 1px solid var(--border);
  font-family: var(--font-heading);
  font-weight: 600;
  font-size: 0.9rem;
  color: var(--navy);
}

.brand-intro__highlights svg {
  color: var(--brand-color);
}

/* ---------- Sub-brands (Innova) ---------- */
.sub-brands {
  display: grid;
  gap: 14px;
  width: 100%;
  margin-top: 30px;
}

@media (min-width: 560px) {
  .sub-brands {
    grid-template-columns: 1fr 1fr;
  }
}

.sub-brand {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 20px 22px;
  border-radius: var(--radius);
  background: #fff;
  border: 1.5px solid var(--primary-100);
  transition: var(--transition);
}

.sub-brand strong {
  display: block;
  font-family: var(--font-heading);
  font-size: 1.1rem;
  color: var(--navy);
}

.sub-brand small {
  color: var(--text-muted);
  font-size: 0.84rem;
}

.sub-brand svg {
  color: var(--primary);
  font-size: 1.2rem;
  transition: transform var(--transition);
}

.sub-brand:hover {
  border-color: var(--primary);
  box-shadow: var(--shadow);
}

.sub-brand:hover svg {
  transform: translateX(4px);
}

/* ---------- Other brands ---------- */
.brand-others .section-heading {
  margin-bottom: 32px;
}

.brand-others__list {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.brand-chip {
  --brand-color: var(--primary);
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 10px 20px 10px 10px;
  border-radius: 12px;
  background: #fff;
  border: 1px solid var(--border);
  font-family: var(--font-heading);
  font-weight: 700;
  color: var(--navy);
  transition: var(--transition);
}

.brand-chip:hover {
  border-color: var(--brand-color);
  transform: translateY(-3px);
  box-shadow: var(--shadow-sm);
}

.brand-chip__mark {
  display: grid;
  place-items: center;
  width: 36px;
  height: 36px;
  border-radius: 9px;
  background: var(--brand-color);
  color: #fff;
  font-weight: 800;
}
```

---

## STEP 47 — `src/pages/Contact.jsx`

**Create this file:** `src/pages/Contact.jsx`

```jsx
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { FiPhone, FiMail, FiMapPin, FiClock, FiSend, FiCheckCircle } from "react-icons/fi";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import siteConfig from "../config/siteConfig";
import images from "../data/images";
import "./Contact.css";

const contactCards = [
  {
    icon: <FiPhone />,
    title: "Phone",
    value: siteConfig.phone,
    link: siteConfig.phoneLink,
  },
  {
    icon: <FiMail />,
    title: "Email",
    value: siteConfig.email,
    link: `mailto:${siteConfig.email}`,
  },
  {
    icon: <FiMapPin />,
    title: "Address",
    value: siteConfig.address,
  },
  {
    icon: <FiClock />,
    title: "Business Hours",
    value: siteConfig.businessHours,
  },
];

function Contact() {
  // If the visitor clicked "Enquire Now" on a product, pre-fill the subject
  const [searchParams] = useSearchParams();
  const productName = searchParams.get("product");

  const emptyForm = {
    fullName: "",
    email: "",
    phone: "",
    subject: productName ? `Enquiry: ${productName}` : "",
    message: "",
  };

  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: "" }));
  };

  const validate = () => {
    const newErrors = {};
    if (!form.fullName.trim()) newErrors.fullName = "Please enter your full name.";
    if (!form.email.trim()) newErrors.email = "Please enter your email address.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "Please enter a valid email address.";
    if (form.phone && !/^[0-9+\-\s()]{7,20}$/.test(form.phone))
      newErrors.phone = "Please enter a valid phone number.";
    if (!form.subject.trim()) newErrors.subject = "Please enter a subject.";
    if (!form.message.trim()) newErrors.message = "Please enter your message.";
    return newErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // FRONTEND ONLY: nothing is sent yet.
    // Later, connect this to your backend, an email service (e.g. EmailJS) or a form service.
    console.log("Enquiry form data:", form);
    setSubmitted(true);
    setForm({ ...emptyForm, subject: "" });
  };

  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Have a question about our products or need a quote? Our team is here to help."
        image={images.contactBanner}
        breadcrumbs={[{ label: "Home", path: "/" }, { label: "Contact" }]}
      />

      {/* ===== Contact detail cards ===== */}
      <section className="contact-cards-section">
        <div className="container">
          <div className="contact-cards">
            {contactCards.map((card, index) => (
              <Reveal key={card.title} delay={index * 80}>
                <div className="contact-card">
                  <span className="contact-card__icon" aria-hidden="true">{card.icon}</span>
                  <h3>{card.title}</h3>
                  {card.link ? (
                    <a href={card.link}>{card.value}</a>
                  ) : (
                    <p>{card.value}</p>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Form ===== */}
      <section className="section contact-main">
        <div className="container contact-main__grid">
          <Reveal className="contact-main__info">
            <span className="eyebrow">Get In Touch</span>
            <h2>Send Us an Enquiry</h2>
            <p>
              Fill in the form and our team will get back to you with product information,
              pricing or any support you need. For urgent requirements, please call us directly.
            </p>

            <ul className="contact-main__list">
              <li><FiCheckCircle aria-hidden="true" /> Product specifications & samples</li>
              <li><FiCheckCircle aria-hidden="true" /> Bulk orders & institutional supply</li>
              <li><FiCheckCircle aria-hidden="true" /> Distributor & partnership enquiries</li>
            </ul>

            <div className="contact-main__call">
              <span className="contact-main__call-icon"><FiPhone aria-hidden="true" /></span>
              <div>
                <small>Prefer to talk?</small>
                <a href={siteConfig.phoneLink}>{siteConfig.phone}</a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              {submitted && (
                <div className="contact-form__success" role="status">
                  <FiCheckCircle aria-hidden="true" />
                  Thank you! Your enquiry has been received. We will get back to you shortly.
                </div>
              )}

              <div className="contact-form__row">
                <div className="form-field">
                  <label htmlFor="fullName">Full Name <span>*</span></label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    placeholder="Enter your full name"
                    value={form.fullName}
                    onChange={handleChange}
                    className={errors.fullName ? "has-error" : ""}
                    autoComplete="name"
                  />
                  {errors.fullName && <small className="form-field__error">{errors.fullName}</small>}
                </div>

                <div className="form-field">
                  <label htmlFor="email">Email <span>*</span></label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={handleChange}
                    className={errors.email ? "has-error" : ""}
                    autoComplete="email"
                  />
                  {errors.email && <small className="form-field__error">{errors.email}</small>}
                </div>
              </div>

              <div className="contact-form__row">
                <div className="form-field">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+91 00000 00000"
                    value={form.phone}
                    onChange={handleChange}
                    className={errors.phone ? "has-error" : ""}
                    autoComplete="tel"
                  />
                  {errors.phone && <small className="form-field__error">{errors.phone}</small>}
                </div>

                <div className="form-field">
                  <label htmlFor="subject">Subject <span>*</span></label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="How can we help?"
                    value={form.subject}
                    onChange={handleChange}
                    className={errors.subject ? "has-error" : ""}
                  />
                  {errors.subject && <small className="form-field__error">{errors.subject}</small>}
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="message">Message <span>*</span></label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Tell us about your requirement..."
                  value={form.message}
                  onChange={handleChange}
                  className={errors.message ? "has-error" : ""}
                />
                {errors.message && <small className="form-field__error">{errors.message}</small>}
              </div>

              <button type="submit" className="btn btn--primary contact-form__submit">
                Send Enquiry <FiSend aria-hidden="true" />
              </button>
            </form>
          </Reveal>
        </div>
      </section>

      {/* ===== Map ===== */}
      <section className="contact-map" aria-label="Our location on the map">
        {/* Change the map location in src/config/siteConfig.js → mapEmbedUrl */}
        <iframe
          title="Company location map"
          src={siteConfig.mapEmbedUrl}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </section>
    </>
  );
}

export default Contact;
```

---

## STEP 48 — `src/pages/Contact.css`

**Create this file:** `src/pages/Contact.css`

```css
/* =========================================================
   CONTACT PAGE
   ========================================================= */

/* ---------- Contact cards (overlap the banner) ---------- */
.contact-cards-section {
  position: relative;
  z-index: 3;
}

.contact-cards {
  display: grid;
  gap: 18px;
  margin-top: -56px;
}

@media (min-width: 560px) {
  .contact-cards {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1100px) {
  .contact-cards {
    grid-template-columns: repeat(4, 1fr);
  }
}

.contact-card {
  height: 100%;
  padding: 30px 26px;
  background: #fff;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  transition: var(--transition);
}

.contact-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
}

.contact-card__icon {
  display: grid;
  place-items: center;
  width: 54px;
  height: 54px;
  margin-bottom: 18px;
  border-radius: 14px;
  background: var(--primary);
  color: #fff;
  font-size: 1.35rem;
  box-shadow: 0 10px 22px rgba(16, 52, 166, 0.28);
}

.contact-card h3 {
  font-size: 1.08rem;
  margin-bottom: 6px;
  letter-spacing: 0;
}

.contact-card a,
.contact-card p {
  color: var(--text-muted);
  font-size: 0.95rem;
  word-break: break-word;
  transition: color var(--transition);
}

.contact-card a:hover {
  color: var(--primary);
}

/* ---------- Form section ---------- */
.contact-main__grid {
  display: grid;
  gap: 48px;
}

@media (min-width: 992px) {
  .contact-main__grid {
    grid-template-columns: 1fr 1.5fr;
    gap: 72px;
    align-items: start;
  }
}

.contact-main__info h2 {
  font-size: clamp(1.8rem, 3.2vw, 2.4rem);
  margin-bottom: 16px;
}

.contact-main__info > p {
  color: var(--text-muted);
  margin-bottom: 26px;
}

.contact-main__list {
  display: grid;
  gap: 12px;
  margin-bottom: 32px;
}

.contact-main__list li {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 500;
  color: var(--navy);
}

.contact-main__list svg {
  color: var(--primary);
  flex-shrink: 0;
}

.contact-main__call {
  display: inline-flex;
  align-items: center;
  gap: 14px;
  padding: 18px 22px;
  border-radius: var(--radius);
  background: var(--primary-50);
  border: 1px solid var(--primary-100);
}

.contact-main__call-icon {
  display: grid;
  place-items: center;
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background: var(--primary);
  color: #fff;
}

.contact-main__call small {
  display: block;
  font-size: 0.8rem;
  color: var(--text-muted);
}

.contact-main__call a {
  font-family: var(--font-heading);
  font-weight: 800;
  font-size: 1.1rem;
  color: var(--navy);
}

/* ---------- Form ---------- */
.contact-form {
  padding: 32px 24px;
  background: #fff;
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow);
}

@media (min-width: 768px) {
  .contact-form {
    padding: 44px 40px;
  }
}

.contact-form__row {
  display: grid;
  gap: 0 20px;
}

@media (min-width: 640px) {
  .contact-form__row {
    grid-template-columns: 1fr 1fr;
  }
}

.form-field {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

.form-field label {
  margin-bottom: 8px;
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 0.88rem;
  color: var(--navy);
}

.form-field label span {
  color: #d23b3b;
}

.form-field input,
.form-field textarea {
  width: 100%;
  padding: 14px 16px;
  border-radius: 10px;
  border: 1.5px solid var(--border);
  background: var(--bg-softer);
  color: var(--text);
  font-size: 0.95rem;
  transition:
    border-color var(--transition),
    box-shadow var(--transition),
    background var(--transition);
}

.form-field textarea {
  resize: vertical;
  min-height: 140px;
}

.form-field input::placeholder,
.form-field textarea::placeholder {
  color: var(--text-light);
}

.form-field input:focus,
.form-field textarea:focus {
  outline: none;
  border-color: var(--primary);
  background: #fff;
  box-shadow: 0 0 0 4px rgba(16, 52, 166, 0.1);
}

.form-field .has-error {
  border-color: #d23b3b;
  background: #fff8f8;
}

.form-field__error {
  margin-top: 6px;
  color: #d23b3b;
  font-size: 0.8rem;
}

.contact-form__submit {
  width: 100%;
  margin-top: 4px;
}

@media (min-width: 640px) {
  .contact-form__submit {
    width: auto;
  }
}

.contact-form__success {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 24px;
  padding: 14px 18px;
  border-radius: 10px;
  background: #e9f8f1;
  border: 1px solid #b6e6cf;
  color: #0c7a50;
  font-weight: 500;
  font-size: 0.92rem;
}

.contact-form__success svg {
  flex-shrink: 0;
  font-size: 1.2rem;
}

/* ---------- Map ---------- */
.contact-map {
  line-height: 0;
  border-top: 1px solid var(--border);
}

.contact-map iframe {
  width: 100%;
  height: 420px;
  border: 0;
  filter: grayscale(0.25) contrast(1.05);
}

@media (min-width: 768px) {
  .contact-map iframe {
    height: 480px;
  }
}
```

---

## STEP 49 — `src/App.jsx`

**This file already exists. Replace the contents of this file with the following code.**

(Select everything in the file → delete → paste.)

```jsx
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import CategoryPage from "./pages/CategoryPage";
import BrandPage from "./pages/BrandPage";
import NotFound from "./pages/NotFound";
import "./App.css";

/* =========================================================
   APP — Header and Footer appear on every page.
   Only the part inside <main> changes when you navigate.
   ========================================================= */

function App() {
  return (
    <div className="app">
      <ScrollToTop />
      <Header />

      <main className="app-main">
        <Routes>
          {/* Main pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />

          {/* Category pages (all use the same CategoryPage component) */}
          <Route path="/bandages" element={<CategoryPage />} />
          <Route path="/dressings" element={<CategoryPage />} />
          <Route path="/absorbent-dressings" element={<CategoryPage />} />
          <Route path="/medicated-dressing" element={<CategoryPage />} />
          <Route path="/protective-equipment" element={<CategoryPage />} />

          {/* Brand pages (all use the same BrandPage component) */}
          <Route path="/brands/ansuya" element={<BrandPage />} />
          <Route path="/brands/bactisafe" element={<BrandPage />} />
          <Route path="/brands/clinisafe" element={<BrandPage />} />
          <Route path="/brands/elastogrip" element={<BrandPage />} />
          <Route path="/brands/innova" element={<BrandPage />} />
          <Route path="/brands/innova/fix" element={<BrandPage />} />
          <Route path="/brands/innova/crepe" element={<BrandPage />} />
          <Route path="/brands/savior" element={<BrandPage />} />
          <Route path="/brands/soft-pad" element={<BrandPage />} />

          {/* Any other URL shows the 404 page */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
```

---

## STEP 50 — Final folder structure

After all steps, your project should look like this:

```
your-project/
├── index.html
├── package.json
├── vite.config.js
├── public/
│   └── favicon.svg
└── src/
    ├── assets/
    │   └── images/              ← put your real logo & photos here later
    ├── config/
    │   └── siteConfig.js        ← company name, phone, email, address, map, socials
    ├── data/
    │   ├── images.js            ← all photo links in one place
    │   ├── categories.js        ← the 5 product categories
    │   ├── products.js          ← all products (placeholders)
    │   ├── brands.js            ← all brands incl. Innova Fix / Innova Crepe
    │   └── heroSlides.js        ← home page slider text
    ├── components/
    │   ├── Header.jsx / Header.css
    │   ├── Footer.jsx / Footer.css
    │   ├── HeroSlider.jsx / HeroSlider.css
    │   ├── ProductCard.jsx / ProductCard.css
    │   ├── ProductListing.jsx / ProductListing.css
    │   ├── PageHero.jsx / PageHero.css
    │   ├── CTASection.jsx / CTASection.css
    │   ├── Logo.jsx / Logo.css
    │   ├── SmartImage.jsx / SmartImage.css
    │   ├── SectionHeading.jsx
    │   ├── Reveal.jsx
    │   └── ScrollToTop.jsx
    ├── pages/
    │   ├── Home.jsx / Home.css
    │   ├── About.jsx / About.css
    │   ├── Products.jsx / Products.css
    │   ├── Contact.jsx / Contact.css
    │   ├── CategoryPage.jsx / CategoryPage.css
    │   ├── BrandPage.jsx / BrandPage.css
    │   └── NotFound.jsx / NotFound.css
    ├── App.jsx
    ├── App.css
    ├── index.css
    └── main.jsx
```

---

## STEP 51 — Run the website

Run this command:

```bash
npm run dev
```

Then open this URL in your browser:

**http://localhost:5173**

(If the terminal shows a different port, such as `5174`, open the URL it shows.)

### Pages to test

| Page | URL |
|---|---|
| Home | `/` |
| About Us | `/about` |
| All Products | `/products` |
| Contact | `/contact` |
| Categories | `/bandages`, `/dressings`, `/absorbent-dressings`, `/medicated-dressing`, `/protective-equipment` |
| Brands | `/brands/ansuya`, `/brands/bactisafe`, `/brands/clinisafe`, `/brands/elastogrip`, `/brands/innova`, `/brands/innova/fix`, `/brands/innova/crepe`, `/brands/savior`, `/brands/soft-pad` |

---

## How to replace the placeholders later

| What you want to change | File |
|---|---|
| Company name, phone, email, address, business hours, social links, map location | `src/config/siteConfig.js` |
| Logo (use your own image) | Follow the instructions at the top of `src/components/Logo.jsx` |
| Website photos | `src/data/images.js` |
| Product names, descriptions, images | `src/data/products.js` |
| Brand descriptions & colours | `src/data/brands.js` |
| Category descriptions | `src/data/categories.js` |
| Home slider text & buttons | `src/data/heroSlides.js` |
| About page numbers (10+, 100%, 24/7) | `stats` list at the top of `src/pages/About.jsx` |
| Brand colours / fonts for the whole site | `:root` variables at the top of `src/index.css` |

### Notes
- The contact form is **frontend only** — it validates the fields and shows a thank-you message, but does not send emails yet. Later you can connect it to a backend or a service like EmailJS inside `handleSubmit` in `src/pages/Contact.jsx`.
- Clicking **Enquire Now** on any product opens the Contact page with the subject already filled in.
- Photos load from Unsplash (needs internet). If a photo can't load, a clean blue placeholder is shown automatically.
- When you deploy the site (Netlify, Vercel, etc.), enable "SPA / single-page app" redirects so URLs like `/about` work when refreshed.
