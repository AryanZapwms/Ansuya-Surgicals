/* =========================================================
   IMAGES — all website photos in one place.
   To use your own photos:
   1. Put the image in src/assets/images/  (e.g. hero1.jpg)
   2. At the top of this file add:  import hero1 from "../assets/images/hero1.jpg";
   3. Replace the URL below with:   hero1
   ========================================================= */

// 1. Import your local image here
import aboutUsLocal from "../assets/images/about-us2.webp";
import eleasticcreepe from "../assets/images/home-products/Elastic-crepe-bandage-1.webp";
const unsplash = (id, width = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=80`;

const images = {
  hero1: unsplash("photo-1551076805-e1869033e561"),
  hero2: unsplash("photo-1579684385127-1ef15d508118"),
  hero3: unsplash("photo-1576091160550-2173dba999ef"),

  // 2. Replace the unsplash function with your imported variable
  aboutHome: aboutUsLocal, 
  eleasticCreepe: eleasticcreepe,
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