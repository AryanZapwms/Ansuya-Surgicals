/* =========================================================
   BRANDS — PLACEHOLDER DATA
   - "slug" is used to link products (see products.js "brand")
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
    tagline: "Pure Cotton Care",
    color: "#1034A6",
    image: ansuyaLogo,
    highlights: ["100% cotton materials", "Soft on skin", "Consistent quality"],
    productBrands: ["ansuya"],
  },
  {
    slug: "bactisafe",
    name: "Bactisafe",
    tagline: "Antiseptic Protection",
    color: "#0E7C86",
    image: bactisafeLogo,
    highlights: ["Antiseptic formulation", "Infection control", "Clinically focused"],
    productBrands: ["bactisafe"],
  },
  {
    slug: "clinisafe",
    name: "Clinisafe",
    tagline: "Clinical Grade Safety",
    color: "#2456D3",
    image: clinisafeLogo,
    highlights: ["Sterile packaging", "Hospital grade", "Reliable supply"],
    productBrands: ["clinisafe"],
  },
  {
    slug: "elastogrip",
    name: "Elastogrip",
    tagline: "Support That Stays",
    color: "#0B2470",
    image: elastogripLogo,
    highlights: ["Durable elasticity", "Breathable fabric", "Secure fixation"],
    productBrands: ["elastogrip"],
  },
  {
    slug: "innova",
    name: "Innova",
    tagline: "Innovation in Fixation",
    color: "#3B5BDB",
    image: innovaLogo,
    highlights: ["Innovative design", "Comfortable wear", "Versatile range"],
    productBrands: ["innova-fix", "innova-crepe"],
    children: [
      {
        slug: "innova-fix",
        name: "Innova Fix",
        tagline: "Secure Dressing Fixation",
        color: "#3B5BDB",
        image: innovaFixLogo,
        highlights: ["Hypoallergenic", "Water resistant", "Easy to remove"],
        productBrands: ["innova-fix"],
      },
      {
        slug: "innova-crepe",
        name: "Innova Crepe",
        tagline: "Comfortable Compression",
        color: "#3B5BDB",
        image: innovaCrepeLogo,
        highlights: ["Premium cotton crepe", "Even compression", "Reusable"],
        productBrands: ["innova-crepe"],
      },
    ],
  },
  {
    slug: "savior",
    name: "Savior",
    tagline: "Advanced Protection",
    color: "#0A6E8F",
    image: saviorLogo,
    highlights: ["Advanced materials", "Protective range", "Trusted by professionals"],
    productBrands: ["savior"],
  },
  {
    slug: "soft-pad",
    name: "Soft Pad",
    tagline: "Gentle Absorbency",
    color: "#1C4FD8",
    image: softPadLogo,
    highlights: ["High absorbency", "Cushioned comfort", "Low linting"],
    productBrands: ["soft-pad"],
  },
];

export default brands;
