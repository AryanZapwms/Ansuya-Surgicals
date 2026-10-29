/* =========================================================
   BRANDS
   - "slug" links products to a brand (see products.js "brand")
   - "name" is shown on the product page and the About page
   - "color" is the accent colour of the brand badge on the
     product page
   - "children" lists sub-brands (Innova → Innova Fix, Innova Crepe)
   ========================================================= */

const brands = [
  { slug: "ansuya", name: "Ansuya", color: "#1034A6" },
  { slug: "bactisafe", name: "Bactisafe", color: "#0E7C86" },
  { slug: "clinisafe", name: "Clinisafe", color: "#2456D3" },
  { slug: "elastogrip", name: "Elastogrip", color: "#0B2470" },
  {
    slug: "innova",
    name: "Innova",
    color: "#3B5BDB",
    children: [
      { slug: "innova-fix", name: "Innova Fix", color: "#3B5BDB" },
      { slug: "innova-crepe", name: "Innova Crepe", color: "#3B5BDB" },
    ],
  },
  { slug: "savior", name: "Savior", color: "#0A6E8F" },
  { slug: "soft-pad", name: "Soft Pad", color: "#1C4FD8" },
];

/* Every brand in one flat list, sub-brands right after their parent
   (… Innova, Innova Fix, Innova Crepe …) */
export const allBrands = brands.flatMap((brand) =>
  brand.children ? [brand, ...brand.children] : [brand]
);

/* The brand (or sub-brand) with this slug, or null */
export function findBrand(slug) {
  return allBrands.find((brand) => brand.slug === slug) ?? null;
}

export default brands;
