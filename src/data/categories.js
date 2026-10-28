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
    description:
      "Our absorbent dressings are designed to manage moderate to heavy exudate, keeping the wound area clean and dry. Ideal for surgical wounds, trauma care and general ward use.",
  },
  {
    slug: "bandages",
    name: "Bandages",
    path: "/products?category=bandages",
    shortDescription:
      "Crepe, elastic adhesive, plaster of Paris and rolled bandages, plus cannula fixators and surgical tapes.",
    description:
      "Our bandage range offers dependable compression, support and fixation for sprains, post-operative care and everyday clinical use. Each bandage is designed for comfort, breathability and consistent elasticity.",
  },
  {
    slug: "dressings",
    name: "Dressings",
    path: "/products?category=dressings",
    shortDescription:
      "Pads, gauze swabs, combine dressings, eye pads, cast padding and gauze dressings.",
    description:
      "From sterile gauze to transparent film and island dressings, our wound dressings are engineered to protect wounds, manage moisture and support faster, safer healing across hospital and home-care settings.",
  },
  {
    slug: "medicated-dressing",
    name: "Medicated Dressing",
    path: "/products?category=medicated-dressing",
    shortDescription:
      "Chlorhexidine and paraffin gauze dressings.",
    description:
      "Our medicated dressing range combines trusted wound-care materials with antiseptic and soothing agents to help reduce the risk of infection and support a healthy healing environment.",
  },
  {
    slug: "protective-equipment",
    name: "Protective Equipment",
    path: "/products?category=protective-equipment",
    shortDescription:
      "Surgeon gowns, disposable HIV protection kits and plain protective sheets.",
    description:
      "Our protective equipment helps healthcare professionals maintain safe, hygienic working environments. The range includes surgical masks, examination gloves, caps, shoe covers and gowns.",
  },
];

export default categories;
