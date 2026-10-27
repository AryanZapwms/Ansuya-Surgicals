/* =========================================================
   PRODUCT CATEGORIES
   "slug" must match the "category" value used in products.js
   "path" opens the Products page with that category preselected.
   ========================================================= */
import images from "./images";

const categories = [
  {
    slug: "absorbent-dressings",
    name: "Absorbent Dressings",
    path: "/products?category=absorbent-dressings",
    image: images.absorbent,
    shortDescription:
      "High-absorbency pads and rolls for effective exudate management.",
    description:
      "Our absorbent dressings are designed to manage moderate to heavy exudate, keeping the wound area clean and dry. Ideal for surgical wounds, trauma care and general ward use.",
  },
  {
    slug: "bandages",
    name: "Bandages",
    path: "/products?category=bandages",
    image: images.eleasticCreepe,
    shortDescription:
      "Elastic, crepe and conforming bandages for firm support and secure fixation.",
    description:
      "Our bandage range offers dependable compression, support and fixation for sprains, post-operative care and everyday clinical use. Each bandage is designed for comfort, breathability and consistent elasticity.",
  },
  {
    slug: "dressings",
    name: "Dressings",
    path: "/products?category=dressings",
    image: images.dressings,
    shortDescription:
      "Sterile wound dressings that protect, cushion and support natural healing.",
    description:
      "From sterile gauze to transparent film and island dressings, our wound dressings are engineered to protect wounds, manage moisture and support faster, safer healing across hospital and home-care settings.",
  },
  {
    slug: "medicated-dressing",
    name: "Medicated Dressing",
    path: "/products?category=medicated-dressing",
    image: images.medicated,
    shortDescription:
      "Antiseptic and medicated dressings that help reduce infection risk.",
    description:
      "Our medicated dressing range combines trusted wound-care materials with antiseptic and soothing agents to help reduce the risk of infection and support a healthy healing environment.",
  },
  {
    slug: "protective-equipment",
    name: "Protective Equipment",
    path: "/products?category=protective-equipment",
    image: images.protective,
    shortDescription:
      "Masks, gloves, caps and gowns for safe clinical environments.",
    description:
      "Our protective equipment helps healthcare professionals maintain safe, hygienic working environments. The range includes surgical masks, examination gloves, caps, shoe covers and gowns.",
  },
];

export default categories;
