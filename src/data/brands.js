/* =========================================================
   BRANDS — PLACEHOLDER DATA
   - "slug" is used to link products (see products.js "brand")
   - "path" is the page URL
   - "children" creates the nested submenu (used for Innova)
   - "productBrands" decides which products appear on that
     brand page (Innova shows both Innova Fix + Innova Crepe)
   - "color" is the accent colour of the brand logo block
   - "image" is the brand logo shown on the home page
   ========================================================= */

import ansuyaLogo from "../assets/images/our-brands/ansuya.webp";
import bactisafeLogo from "../assets/images/our-brands/bactisafe.webp";
import clinisafeLogo from "../assets/images/our-brands/clinisafe.webp";
import elastogripLogo from "../assets/images/our-brands/elastogrip.webp";
import innovaLogo from "../assets/images/our-brands/innova.webp";
import innovaFixLogo from "../assets/images/our-brands/innova-fix.webp";
import innovaCrepeLogo from "../assets/images/our-brands/innova-crepe.webp";
import saviorLogo from "../assets/images/our-brands/savior.webp";
import softPadLogo from "../assets/images/our-brands/soft-pad.webp";

const brands = [
  {
    slug: "ansuya",
    name: "Ansuya",
    path: "/brands/ansuya",
    tagline: "Pure Cotton Care",
    color: "#1034A6",
    image: ansuyaLogo,
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
    image: bactisafeLogo,
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
    image: clinisafeLogo,
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
    image: elastogripLogo,
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
    image: innovaLogo,
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
        image: innovaFixLogo,
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
        image: innovaCrepeLogo,
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
    image: saviorLogo,
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
    image: softPadLogo,
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
