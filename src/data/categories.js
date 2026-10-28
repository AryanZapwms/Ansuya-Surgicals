/* =========================================================
   PRODUCT CATEGORIES
   "slug" must match the "category" value used in products.js
   "path" opens the Products page with that category preselected.
   ========================================================= */

const categories = [
  {
    slug: "absorbent-dressings",
    name: "Absorbent Dressings",
    path: "/products?category=absorbent-dressings",
    shortDescription:
      "Abdominal pads, combine dressings, gamjee pads and rolls, and gauze swabs.",
  },
  {
    slug: "bandages",
    name: "Bandages",
    path: "/products?category=bandages",
    shortDescription:
      "Crepe, elastic adhesive, plaster of Paris and rolled bandages, plus cannula fixators and surgical tapes.",
  },
  {
    slug: "dressings",
    name: "Dressings",
    path: "/products?category=dressings",
    shortDescription:
      "Pads, gauze swabs, combine dressings, eye pads, cast padding and gauze dressings.",
  },
  {
    slug: "medicated-dressing",
    name: "Medicated Dressing",
    path: "/products?category=medicated-dressing",
    shortDescription:
      "Chlorhexidine and paraffin gauze dressings.",
  },
  {
    slug: "protective-equipment",
    name: "Protective Equipment",
    path: "/products?category=protective-equipment",
    shortDescription:
      "Surgeon gowns, disposable HIV protection kits and plain protective sheets.",
  },
];

export default categories;
