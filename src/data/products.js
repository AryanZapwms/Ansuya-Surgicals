/* =========================================================
   PRODUCTS
   Real catalog built from the images in
   src/assets/images/home-products (the same 22 photos shown
   in the "Our Product Range" carousel on the home page).

   Each product has:
   - id:          unique number (never repeat)
   - name:        product name
   - category:    array of category slugs (see categories.js).
                  A product can belong to more than one category
                  (e.g. Abdominal Pad appears under both
                  Absorbent Dressings and Dressings).
   - brand:       must be one of the brand slugs in brands.js
                  (ansuya, bactisafe, clinisafe, elastogrip,
                   innova-fix, innova-crepe, savior, soft-pad)
   - image:       imported product photo
   - hoverImage:  imported "cover" photo shown on hover (crossfade) —
                  undefined for the one product with no cover photo yet
   - gallery:     optional array of extra imported photos shown as
                  additional thumbnails on the product detail page
   - description: short one or two line description
   ========================================================= */

import castPadding from "../assets/images/home-products/Cast-Padding.webp";
import castPaddingCover from "../assets/images/home-products/Cast-Padding-cover.webp";
import chlorhexidineGauzeDressing from "../assets/images/home-products/Chlorhexidine-Gauze-Dressing-B.P-.webp";
import chlorhexidineGauzeDressingCover from "../assets/images/home-products/Chlorhexidine-Gauze-Dressing-B.P-cover.webp";
import combineDressing from "../assets/images/home-products/Combine-Dressing-600x600.webp";
import combineDressingCover from "../assets/images/home-products/Combine-Dressing-cover.webp";
import disposableHivKit from "../assets/images/home-products/Disposable-HIV-Protection-Kit.webp";
import disposableHivKitCover from "../assets/images/home-products/Disposable-HIV-Protection-Kit-cover.webp";
import elasticCrepeBandage from "../assets/images/home-products/Elastic-crepe-bandage-1.webp";
import elasticCrepeBandageCover from "../assets/images/home-products/Elastic-crepe-bandage-cover.webp";
import gamjeeRoll from "../assets/images/home-products/Gamjee-Roll-2-600x600.webp";
import gamjeeRollCover from "../assets/images/home-products/Gamjee-Roll-cover.webp";
import gauzeSwabs from "../assets/images/home-products/Gauze-Swabs-.webp";
import gauzeSwabsCover from "../assets/images/home-products/Gauze-Swab-cover.webp";
import paraffinGauzeDressing from "../assets/images/home-products/Paraffin-gauze-dressing-600x600.webp";
import paraffinGauzeDressingCover from "../assets/images/home-products/Paraffin-gauze-dressing-cover.webp";
import plainPolyethyleneSheet from "../assets/images/home-products/Plain-POLYETHYLENE-sheet-Green-color-600x600.webp";
import plainPolyethyleneSheetCover from "../assets/images/home-products/Plain-POLYETHYLENE-sheet-Green-color-cover.webp";
import plainSheetPremium from "../assets/images/home-products/Plain-Sheet-Premium-blue-color-2-600x600.webp";
import plainSheetPremiumCover from "../assets/images/home-products/Plain-Sheet-Premium-blue-color-cover.webp";
import plasterOfParisBandage from "../assets/images/home-products/Plaster-of-Paris-Bandage.webp";
import plasterOfParisBandageCover from "../assets/images/home-products/Plaster-of-Paris-Bandage-cover.webp";
import abdominalPads from "../assets/images/home-products/abdominal-paddes.webp";
import abdominalPadsCover from "../assets/images/home-products/abdominal-paddes-cover.webp";
import cannulaFixator from "../assets/images/home-products/cannula-fixator.webp";
import cannulaFixatorCover from "../assets/images/home-products/cannuala-fixatorcover.webp";
import cottonGamjeePad from "../assets/images/home-products/cotton-Gamjee-pad-1-600x600.webp";
import cottonGamjeePadCover from "../assets/images/home-products/cotton-Gamjee-pad-cover.webp";
import cottonAdhesiveTape from "../assets/images/home-products/cotton-adhesive-tape.webp";
import cottonAdhesiveTapeCover from "../assets/images/home-products/cotton-adhesive-tape-cover.webp";
import cottonCrepeBandage from "../assets/images/home-products/cotton-crepe-bandage.webp";
import cottonCrepeBandageCover from "../assets/images/home-products/cotton-crepe-bandage-cover.webp";
import elasticAdhesiveBandages from "../assets/images/home-products/elastic-adhesive-bandages.webp";
import elasticAdhesiveBandagesCover from "../assets/images/home-products/elastic-adhesive-bandages-cover.webp";
import eyePad from "../assets/images/home-products/eye-pad.webp";
import eyePadCover from "../assets/images/home-products/eye-pad-cover.webp";
import microporousSurgicalTape from "../assets/images/home-products/microporous-surgical-tape.webp";
import microporousSurgicalTapeCover from "../assets/images/home-products/microporous-surgical-tape-cover.webp";
import rolledBandages from "../assets/images/home-products/rolled-bandages.webp";
import rolledBandagesCover from "../assets/images/home-products/rolled-bandages-cover.webp";
import surgeonGown from "../assets/images/home-products/surgeongown.webp";
import surgeonGownCover from "../assets/images/home-products/surgeongown.cover.webp";

// Extra gallery photos (numbered 3, 4, 5 ... per product)
import abdominalPads3 from "../assets/images/home-products/Abdominal-pad-3.webp";
import abdominalPads4 from "../assets/images/home-products/Abdominal-Pad-4.webp";
import combineDressing3 from "../assets/images/home-products/Combine-Dressing-3.webp";
import cottonGamjeePad3 from "../assets/images/home-products/Gamjee-pad3.webp";
import cottonGamjeePad4 from "../assets/images/home-products/Cotton-Gamjee-Pad-4.webp";
import gamjeeRoll3 from "../assets/images/home-products/Gamjee-Roll-3.webp";
import gamjeeRoll4 from "../assets/images/home-products/Gamjee-Roll-4.webp";
import gamjeeRoll5 from "../assets/images/home-products/Gamjee-Roll-5.webp";
import gauzeSwabs3 from "../assets/images/home-products/Gauze-Swabs-3.webp";
import gauzeSwabs4 from "../assets/images/home-products/Gauze Swab4.webp";
import gauzeSwabs5 from "../assets/images/home-products/Gauze Swab5.webp";
import cannulaFixator3 from "../assets/images/home-products/cannula-fixator.3.webp";
import cannulaFixator4 from "../assets/images/home-products/cannula-fixator.4.webp";
import cannulaFixator5 from "../assets/images/home-products/cannula-fixator.5.webp";
import cottonAdhesiveTape3 from "../assets/images/home-products/cotton-adhesive-tape-3.webp";
import cottonCrepeBandage3 from "../assets/images/home-products/cotton-crepe-bandage3.webp";
import cottonCrepeBandage4 from "../assets/images/home-products/cotton-crepe-bandage4.webp";
import cottonCrepeBandage5 from "../assets/images/home-products/cotton-crepe-bandage5.webp";
import cottonCrepeBandage6 from "../assets/images/home-products/cotton-crepe-bandage6.webp";
import elasticAdhesiveBandages3 from "../assets/images/home-products/Elastic Adhesive Bandages3.webp";
import elasticAdhesiveBandages4 from "../assets/images/home-products/Elastic Adhesive Bandages4.webp";
import elasticAdhesiveBandages5 from "../assets/images/home-products/Elastic Adhesive Bandages5.webp";
import elasticCrepeBandage3 from "../assets/images/home-products/Elastic Crepe Bandage3.webp";
import microporousSurgicalTape3 from "../assets/images/home-products/Microporous Surgical Tape3.webp";
import microporousSurgicalTape4 from "../assets/images/home-products/Microporous Surgical Tape4.webp";
import plasterOfParisBandage3 from "../assets/images/home-products/Plaster Of Paris Bandage3.webp";
import plasterOfParisBandage4 from "../assets/images/home-products/Plaster Of Paris Bandage4.webp";
import rolledBandages3 from "../assets/images/home-products/rolled-bandages3.webp";
import rolledBandages4 from "../assets/images/home-products/rolled-bandage4.webp";
import rolledBandages5 from "../assets/images/home-products/Rolled Bandages4.webp";
import castPadding3 from "../assets/images/home-products/Cast-Padding 3.webp";
import chlorhexidineGauzeDressing3 from "../assets/images/home-products/Chlorhexidine-Gauze-Dressing-B.P-3-.webp";
import chlorhexidineGauzeDressing4 from "../assets/images/home-products/chChlorhexidine-Gauze-Dressing-B.P-4.webp";
import eyePad3 from "../assets/images/home-products/Eye Pad3.webp";
import eyePad4 from "../assets/images/home-products/Eye Pad4.webp";
import eyePad5 from "../assets/images/home-products/Eye Pad5.webp";
import paraffinGauzeDressing3 from "../assets/images/home-products/Paraffin Gauze Dressing B.P3.webp";
import paraffinGauzeDressing4 from "../assets/images/home-products/Paraffin Gauze Dressing B.P4.webp";
import surgeonGown3 from "../assets/images/home-products/Surgeon Gown3.webp";
import surgeonGown4 from "../assets/images/home-products/Surgeon Gown4.webp";
import surgeonGown5 from "../assets/images/home-products/Surgeon Gown5.webp";
import surgeonGown6 from "../assets/images/home-products/Surgeon Gown6.webp";
import plainPolyethyleneSheet3 from "../assets/images/home-products/Plain-POLYETHYLENE-sheet-Green-color-3.webp";
import plainSheetPremium3 from "../assets/images/home-products/Plain-Sheet-Premium-blue-color-3.webp";

const products = [
  // ---------------- ABSORBENT DRESSINGS (+ shared with Dressings) ----------------
  {
    id: 1,
    name: "Abdominal Pad (Sterile & Non-Sterile)",
    category: ["absorbent-dressings", "dressings"],
    brand: "soft-pad",
    image: abdominalPads,
    hoverImage: abdominalPadsCover,
    gallery: [abdominalPads3, abdominalPads4],
    description:
      "High-absorbency abdominal pad available in sterile and non-sterile options for post-operative and heavy-exudate wound care.",
  },
  {
    id: 2,
    name: "Combine Dressing",
    category: ["absorbent-dressings", "dressings"],
    brand: "soft-pad",
    image: combineDressing,
    hoverImage: combineDressingCover,
    gallery: [combineDressing3],
    description:
      "Multi-layer combine dressing pad for surgical wounds requiring extra absorbency and cushioning.",
  },
  {
    id: 3,
    name: "Cotton Gamjee Pad",
    category: ["absorbent-dressings", "dressings"],
    brand: "ansuya",
    image: cottonGamjeePad,
    hoverImage: cottonGamjeePadCover,
    gallery: [cottonGamjeePad3, cottonGamjeePad4],
    description:
      "Soft cotton gamjee pad used for padding, absorption and protection in general clinical care.",
  },
  {
    id: 4,
    name: "Cotton Gamjee Roll",
    category: ["absorbent-dressings", "dressings"],
    brand: "ansuya",
    image: gamjeeRoll,
    hoverImage: gamjeeRollCover,
    gallery: [gamjeeRoll3, gamjeeRoll4, gamjeeRoll5],
    description:
      "Cotton wool enclosed in gauze, rolled for convenient padding, absorption and protection.",
  },
  {
    id: 5,
    name: "Gauze Swab (Sterile & Non-Sterile)",
    category: ["absorbent-dressings", "dressings"],
    brand: "clinisafe",
    image: gauzeSwabs,
    hoverImage: gauzeSwabsCover,
    gallery: [gauzeSwabs3, gauzeSwabs4, gauzeSwabs5],
    description:
      "Soft gauze swabs for cleaning, packing and covering wounds, available sterile and non-sterile.",
  },

  // ---------------- BANDAGES ----------------
  {
    id: 6,
    name: "Cannula Fixator",
    category: ["bandages"],
    brand: "innova-fix",
    image: cannulaFixator,
    hoverImage: cannulaFixatorCover,
    gallery: [cannulaFixator3, cannulaFixator4, cannulaFixator5],
    description:
      "Secure, breathable fixator that holds IV cannulas firmly in place for patient comfort and safety.",
  },
  {
    id: 7,
    name: "Cotton Adhesive Tape",
    category: ["bandages"],
    brand: "innova-fix",
    image: cottonAdhesiveTape,
    hoverImage: cottonAdhesiveTapeCover,
    gallery: [cottonAdhesiveTape3],
    description:
      "Strong cotton adhesive tape for general-purpose fixation of dressings and bandages.",
  },
  {
    id: 8,
    name: "Cotton Crepe Bandage",
    category: ["bandages"],
    brand: "elastogrip",
    image: cottonCrepeBandage,
    hoverImage: cottonCrepeBandageCover,
    gallery: [cottonCrepeBandage3, cottonCrepeBandage4, cottonCrepeBandage5, cottonCrepeBandage6],
    description:
      "Breathable cotton crepe bandage providing firm, even support and compression.",
  },
  {
    id: 9,
    name: "Elastic Adhesive Bandages",
    category: ["bandages"],
    brand: "elastogrip",
    image: elasticAdhesiveBandages,
    hoverImage: elasticAdhesiveBandagesCover,
    gallery: [elasticAdhesiveBandages3, elasticAdhesiveBandages4, elasticAdhesiveBandages5],
    description:
      "Self-adhesive elastic bandage offering flexible support and secure fixation.",
  },
  {
    id: 10,
    name: "Elastic Crepe Bandage",
    category: ["bandages"],
    brand: "innova-crepe",
    image: elasticCrepeBandage,
    hoverImage: elasticCrepeBandageCover,
    gallery: [elasticCrepeBandage3],
    description:
      "Elastic crepe bandage providing firm, even compression and support for sprains and strains.",
  },
  {
    id: 11,
    name: "Microporous Surgical Tape",
    category: ["bandages"],
    brand: "innova-fix",
    image: microporousSurgicalTape,
    hoverImage: microporousSurgicalTapeCover,
    gallery: [microporousSurgicalTape3, microporousSurgicalTape4],
    description:
      "Gentle, breathable microporous tape for securing dressings on sensitive skin.",
  },
  {
    id: 12,
    name: "Plaster Of Paris Bandage",
    category: ["bandages"],
    brand: "elastogrip",
    image: plasterOfParisBandage,
    hoverImage: plasterOfParisBandageCover,
    gallery: [plasterOfParisBandage3, plasterOfParisBandage4],
    description:
      "Plaster of Paris bandage for orthopaedic casting and immobilisation.",
  },
  {
    id: 13,
    name: "Rolled Bandages",
    category: ["bandages"],
    brand: "elastogrip",
    image: rolledBandages,
    hoverImage: rolledBandagesCover,
    gallery: [rolledBandages3, rolledBandages4, rolledBandages5],
    description:
      "Conforming rolled bandage that moulds easily to joints and contours.",
  },

  // ---------------- DRESSINGS (remaining, not already listed above) ----------------
  {
    id: 14,
    name: "Cast Padding",
    category: ["dressings"],
    brand: "soft-pad",
    image: castPadding,
    hoverImage: castPaddingCover,
    gallery: [castPadding3],
    description:
      "Soft synthetic cast padding used under plaster casts for cushioning and protection.",
  },
  {
    id: 15,
    name: "Chlorhexidine Gauze Dressing B.P",
    category: ["dressings", "medicated-dressing"],
    brand: "bactisafe",
    image: chlorhexidineGauzeDressing,
    hoverImage: chlorhexidineGauzeDressingCover,
    gallery: [chlorhexidineGauzeDressing3, chlorhexidineGauzeDressing4],
    description:
      "Chlorhexidine-impregnated gauze dressing that helps reduce the risk of wound infection.",
  },
  {
    id: 16,
    name: "Eye Pad",
    category: ["dressings"],
    brand: "soft-pad",
    image: eyePad,
    hoverImage: eyePadCover,
    gallery: [eyePad3, eyePad4, eyePad5],
    description:
      "Soft, absorbent eye pad for post-operative eye care and protection.",
  },
  {
    id: 17,
    name: "Paraffin Gauze Dressing B.P",
    category: ["dressings", "medicated-dressing"],
    brand: "bactisafe",
    image: paraffinGauzeDressing,
    hoverImage: paraffinGauzeDressingCover,
    gallery: [paraffinGauzeDressing3, paraffinGauzeDressing4],
    description:
      "Non-adherent paraffin gauze dressing ideal for burns, grafts and abrasions.",
  },

  // ---------------- PROTECTIVE EQUIPMENT ----------------
  {
    id: 18,
    name: "Surgeon Gown",
    category: ["protective-equipment"],
    brand: "savior",
    image: surgeonGown,
    hoverImage: surgeonGownCover,
    gallery: [surgeonGown3, surgeonGown4, surgeonGown5, surgeonGown6],
    description:
      "Fluid-resistant disposable surgeon gown for surgical and isolation procedures.",
  },
  // {
  //   id: 19,
  //   name: "Ansuya Surgeon Gown",
  //   category: ["protective-equipment"],
  //   brand: "savior",
  //   image: ansuyaSurgeonGown,
  //   description:
  //     "Fluid-resistant disposable surgeon gown for surgical and isolation procedures.",
  // },
  {
    id: 20,
    name: "Disposable HIV Protection Kit",
    category: ["protective-equipment"],
    brand: "savior",
    image: disposableHivKit,
    hoverImage: disposableHivKitCover,
    description:
      "Complete disposable protection kit for safe handling of high-risk procedures.",
  },
  {
    id: 21,
    name: "Plain POLYETHYLENE Sheet",
    category: ["protective-equipment"],
    brand: "savior",
    image: plainPolyethyleneSheet,
    hoverImage: plainPolyethyleneSheetCover,
    gallery: [plainPolyethyleneSheet3],
    description:
      "Waterproof polyethylene sheet for bed protection and general clinical use.",
  },
  {
    id: 22,
    name: "Plain Sheet Premium",
    category: ["protective-equipment"],
    brand: "savior",
    image: plainSheetPremium,
    hoverImage: plainSheetPremiumCover,
    gallery: [plainSheetPremium3],
    description:
      "Premium quality plain protective sheet for hospital and clinical settings.",
  },
];

export default products;
