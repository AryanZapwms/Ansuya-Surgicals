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
