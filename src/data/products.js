/* =========================================================
   PRODUCTS
   Product names, brands, categories, sizes and details come
   from the client's old website catalogue. Photos are in
   src/assets/images/home-products.

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
   - thumb / hoverThumb:
                  ~300px-wide copies of image / hoverImage, kept in
                  home-products/thumbs with the same file name. Product
                  cards and carousels use them on smaller screens; if one
                  is missing the full-size photo is used instead.
   - gallery:     optional array of extra imported photos shown as
                  additional thumbnails on the product detail page
   - description: short one or two line description
   - sizes:       list of available sizes, shown as written
                  (empty list = nothing shown)
   - details:     list of short factual points
                  (empty list = nothing shown)
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

// ~300px-wide copies for product cards and carousels (see "thumb" above)
const thumbFiles = import.meta.glob("../assets/images/home-products/thumbs/*.webp", {
  eager: true,
  import: "default",
});
const thumb = (fileName) => thumbFiles[`../assets/images/home-products/thumbs/${fileName}`];

const products = [
  // ---------------- ABSORBENT DRESSINGS (+ shared with Dressings) ----------------
  {
    id: 1,
    name: "Abdominal Pad (Sterile & Non-Sterile)",
    category: ["absorbent-dressings", "dressings"],
    brand: "clinisafe",
    image: abdominalPads,
    hoverImage: abdominalPadsCover,
    thumb: thumb("abdominal-paddes.webp"),
    hoverThumb: thumb("abdominal-paddes-cover.webp"),
    gallery: [abdominalPads3, abdominalPads4],
    description:
      "Highly absorbent abdominal pad with X-ray detectable thread, used as a mopping pad in abdominal surgery. Sterilised by gamma radiation.",
    sizes: [
      "25 x 25 cm x 8 ply",
      "25 x 40 cm x 8 ply",
      "30 x 30 cm x 8 ply",
      "Other sizes can be made to customer requirement",
    ],
    details: [
      "With X-ray detectable thread",
      "Used as a mopping pad in abdominal surgery",
      "Highly absorbent",
      "Sterilised by gamma radiation",
    ],
  },
  {
    id: 2,
    name: "Combine Dressing",
    category: ["absorbent-dressings", "dressings"],
    brand: "clinisafe",
    image: combineDressing,
    hoverImage: combineDressingCover,
    thumb: thumb("Combine-Dressing-600x600.webp"),
    hoverThumb: thumb("Combine-Dressing-cover.webp"),
    gallery: [combineDressing3],
    description:
      "Post-operative dressing for moderate and heavily secreting wounds, with a non-adherent absorbent over wrap. Sterilised by gamma radiation.",
    sizes: [
      "10 x 10 cm (pouch pack)",
      "10 x 20 cm (pouch pack)",
    ],
    details: [
      "Non-adherent absorbent over wrap",
      "Dressing can be changed and the wound inspected without disturbance",
      "Sterilised by gamma radiation",
      "Post-operative dressing for moderate and heavily secreting wounds",
    ],
  },
  {
    id: 3,
    name: "Cotton Gamjee Pad",
    category: ["absorbent-dressings", "dressings"],
    brand: "clinisafe",
    image: cottonGamjeePad,
    hoverImage: cottonGamjeePadCover,
    thumb: thumb("cotton-Gamjee-pad-1-600x600.webp"),
    hoverThumb: thumb("cotton-Gamjee-pad-cover.webp"),
    gallery: [cottonGamjeePad3, cottonGamjeePad4],
    description:
      "Absorbent cotton wool I.P. in gauze B.P., used as a sterile combine dressing pad and post-operative dressing.",
    sizes: [
      "20 x 10 cm",
      "15 x 10 cm",
      "10 x 10 cm",
      "5 x 8 cm",
      "5 x 5 cm",
    ],
    details: [
      "Absorbent cotton wool I.P. in gauze B.P.",
      "Used as a sterile combine dressing pad",
      "Post-operative dressing",
      "Sterilised by gamma radiation",
      "Available in poly pack and paper pack",
    ],
  },
  {
    id: 4,
    name: "Cotton Gamjee Roll",
    category: ["absorbent-dressings", "dressings"],
    brand: "ansuya",
    image: gamjeeRoll,
    hoverImage: gamjeeRollCover,
    thumb: thumb("Gamjee-Roll-2-600x600.webp"),
    hoverThumb: thumb("Gamjee-Roll-cover.webp"),
    gallery: [gamjeeRoll3, gamjeeRoll4, gamjeeRoll5],
    description:
      "Highly absorbent cotton wool, used in hospitals for primary wound dressing and bandaging.",
    sizes: [
      "10 cm x 2.7 m",
      "15 cm x 2.7 m",
    ],
    details: [
      "Highly absorbent cotton wool",
      "Used in hospitals for primary wound dressing and bandaging",
    ],
  },
  {
    id: 5,
    name: "Gauze Swab (Sterile & Non-Sterile)",
    category: ["absorbent-dressings", "dressings"],
    brand: "clinisafe",
    image: gauzeSwabs,
    hoverImage: gauzeSwabsCover,
    thumb: thumb("Gauze-Swabs-.webp"),
    hoverThumb: thumb("Gauze-Swab-cover.webp"),
    gallery: [gauzeSwabs3, gauzeSwabs4, gauzeSwabs5],
    description:
      "Gauze swabs made from fine yarn bleached with hydrogen peroxide for high absorbency. Available with and without X-ray detectable thread.",
    sizes: [
      "5 x 5 cm and 7.5 x 7.5 cm in 8/12/16 ply",
      "10 x 10 cm in 8/12/16 ply",
    ],
    details: [
      "Fine yarn bleached with hydrogen peroxide for high absorbency",
      "Available with and without X-ray detectable thread",
      "No foreign material added",
    ],
  },

  // ---------------- BANDAGES ----------------
  {
    id: 6,
    name: "Cannula Fixator",
    category: ["bandages"],
    brand: "innova-fix",
    image: cannulaFixator,
    hoverImage: cannulaFixatorCover,
    thumb: thumb("cannula-fixator.webp"),
    hoverThumb: thumb("cannuala-fixatorcover.webp"),
    gallery: [cannulaFixator3, cannulaFixator4, cannulaFixator5],
    description:
      "Non-allergic adhesive cannula fixator with paper and a liner for easy removal.",
    sizes: [
      "Small",
      "Medium",
      "Large",
      "Box of 100",
    ],
    details: [
      "Non-allergic",
      "Adhesive with paper",
      "Liner for easy removal",
    ],
  },
  {
    id: 7,
    name: "Cotton Adhesive Tape",
    category: ["bandages"],
    brand: "ansuya",
    image: cottonAdhesiveTape,
    hoverImage: cottonAdhesiveTapeCover,
    thumb: thumb("cotton-adhesive-tape.webp"),
    hoverThumb: thumb("cotton-adhesive-tape-cover.webp"),
    gallery: [cottonAdhesiveTape3],
    description:
      "Durable, breathable cloth tape that tears in any direction and leaves no sticky residue when removed. Often used to secure splints.",
    sizes: [],
    details: [
      "Durable cloth tape",
      "Flexible and comfortable",
      "No sticky residue when removed",
      "Tears in any direction",
      "Breathable",
      "Suited to long-term use",
      "Often used to secure splints",
    ],
  },
  {
    id: 8,
    name: "Cotton Crepe Bandage",
    category: ["bandages"],
    brand: "innova-crepe",
    image: cottonCrepeBandage,
    hoverImage: cottonCrepeBandageCover,
    thumb: thumb("cotton-crepe-bandage.webp"),
    hoverThumb: thumb("cotton-crepe-bandage-cover.webp"),
    gallery: [cottonCrepeBandage3, cottonCrepeBandage4, cottonCrepeBandage5, cottonCrepeBandage6],
    description:
      "Thick-fabric cotton crepe bandage with better elasticity, giving controlled and uniform pressure while allowing normal skin breathing.",
    sizes: [
      "6, 8, 10, 15 cm x 4 m (stretched)",
    ],
    details: [
      "Thick fabric",
      "Better elasticity",
      "Controlled and uniform pressure",
      "Allows normal skin breathing",
    ],
  },
  {
    id: 9,
    name: "Elastic Adhesive Bandages",
    category: ["bandages"],
    brand: "innova-fix",
    image: elasticAdhesiveBandages,
    hoverImage: elasticAdhesiveBandagesCover,
    thumb: thumb("elastic-adhesive-bandages.webp"),
    hoverThumb: thumb("elastic-adhesive-bandages-cover.webp"),
    gallery: [elasticAdhesiveBandages3, elasticAdhesiveBandages4, elasticAdhesiveBandages5],
    description:
      "Elastic adhesive bandage with a porous, non-allergic adhesive that allows skin breathing, and a plastic liner for easy unrolling.",
    sizes: [
      "10 cm x 4/6 m (stretched)",
      "8 cm x 4/6 m (stretched)",
      "6 cm x 4/6 m (stretched)",
      "10 cm x 1 m (stretched)",
    ],
    details: [
      "Porous adhesive that allows skin breathing",
      "Good elasticity",
      "Non-allergic adhesive",
      "Plastic liner for easy unrolling",
    ],
  },
  {
    id: 10,
    name: "Elastic Crepe Bandage",
    category: ["bandages"],
    brand: "elastogrip",
    image: elasticCrepeBandage,
    hoverImage: elasticCrepeBandageCover,
    thumb: thumb("Elastic-crepe-bandage-1.webp"),
    hoverThumb: thumb("Elastic-crepe-bandage-cover.webp"),
    gallery: [elasticCrepeBandage3],
    description:
      "Skin-friendly, soft and absorbent crepe bandage that provides firm compression and support.",
    sizes: [
      "6, 8, 10, 15 cm x 4 m (stretched)",
    ],
    details: [
      "Offers support and compression",
      "Skin-friendly, soft and absorbent",
      "Provides firm compression and support",
    ],
  },
  {
    id: 11,
    name: "Microporous Surgical Tape",
    category: ["bandages"],
    brand: "ansuya",
    image: microporousSurgicalTape,
    hoverImage: microporousSurgicalTapeCover,
    thumb: thumb("microporous-surgical-tape.webp"),
    hoverThumb: thumb("microporous-surgical-tape-cover.webp"),
    gallery: [microporousSurgicalTape3, microporousSurgicalTape4],
    description:
      "Surgical paper tape.",
    sizes: [
      "1.25, 2.5, 5.0, 7.5 cm x 9 m",
      "Also available in 5 m",
    ],
    details: [
      "Surgical paper tape",
    ],
  },
  {
    id: 12,
    name: "Plaster Of Paris Bandage",
    category: ["bandages"],
    brand: "ansuya",
    image: plasterOfParisBandage,
    hoverImage: plasterOfParisBandageCover,
    thumb: thumb("Plaster-of-Paris-Bandage.webp"),
    hoverThumb: thumb("Plaster-of-Paris-Bandage-cover.webp"),
    gallery: [plasterOfParisBandage3, plasterOfParisBandage4],
    description:
      "Plaster of Paris bandage with high cast strength, optimum setting time and minimum powder loss.",
    sizes: [
      "10 cm x 2.7 m",
      "15 cm x 2.7 m",
    ],
    details: [
      "High cast strength",
      "Optimum setting time",
      "Extra durable",
      "Minimum powder loss",
    ],
  },
  {
    id: 13,
    name: "Rolled Bandages",
    category: ["bandages"],
    brand: "ansuya",
    image: rolledBandages,
    hoverImage: rolledBandagesCover,
    thumb: thumb("rolled-bandages.webp"),
    hoverThumb: thumb("rolled-bandages-cover.webp"),
    gallery: [rolledBandages3, rolledBandages4, rolledBandages5],
    description:
      "Rolled bandage used to immobilise injured body parts, apply pressure, absorb drainage and secure dressings.",
    sizes: [
      "5, 7.5, 10, 15 cm x 3 m",
    ],
    details: [
      "Used to immobilise injured body parts",
      "Applies pressure",
      "Absorbs drainage",
      "Secures dressings",
    ],
  },

  // ---------------- DRESSINGS (remaining, not already listed above) ----------------
  {
    id: 14,
    name: "Cast Padding",
    category: ["dressings"],
    brand: "soft-pad",
    image: castPadding,
    hoverImage: castPaddingCover,
    thumb: thumb("Cast-Padding.webp"),
    hoverThumb: thumb("Cast-Padding-cover.webp"),
    gallery: [castPadding3],
    description:
      "Cast padding made from natural cellulose fibres, used as a cushion between skin and plaster.",
    sizes: [
      "10 cm x 3 m",
      "15 cm x 3 m",
    ],
    details: [
      "Natural cellulose fibres",
      "Cushion between skin and plaster",
      "Absorbs exudate and sweat",
      "Protects bony prominences",
    ],
  },
  {
    id: 15,
    name: "Chlorhexidine Gauze Dressing B.P",
    category: ["dressings", "medicated-dressing"],
    brand: "bactisafe",
    image: chlorhexidineGauzeDressing,
    hoverImage: chlorhexidineGauzeDressingCover,
    thumb: thumb("Chlorhexidine-Gauze-Dressing-B.P-.webp"),
    hoverThumb: thumb("Chlorhexidine-Gauze-Dressing-B.P-cover.webp"),
    gallery: [chlorhexidineGauzeDressing3, chlorhexidineGauzeDressing4],
    description:
      "Gauze dressing coated with Chlorhexidine 0.5% w/w in white soft paraffin, used as a primary wound treatment for burns, skin grafts, ulcers and other injuries.",
    sizes: [
      "10 x 10 cm (box of 10)",
      "30 x 30 cm (box of 10)",
    ],
    details: [
      "Coated with Chlorhexidine 0.5% w/w in white soft paraffin",
      "Used as a primary wound treatment for burns, skin grafts, ulcers and other injuries",
    ],
  },
  {
    id: 16,
    name: "Eye Pad",
    category: ["dressings"],
    brand: "clinisafe",
    image: eyePad,
    hoverImage: eyePadCover,
    thumb: thumb("eye-pad.webp"),
    hoverThumb: thumb("eye-pad-cover.webp"),
    gallery: [eyePad3, eyePad4, eyePad5],
    description:
      "Eye pad.",
    sizes: [],
    details: [],
  },
  {
    id: 17,
    name: "Paraffin Gauze Dressing B.P",
    category: ["dressings", "medicated-dressing"],
    brand: "clinisafe",
    image: paraffinGauzeDressing,
    hoverImage: paraffinGauzeDressingCover,
    thumb: thumb("Paraffin-gauze-dressing-600x600.webp"),
    hoverThumb: thumb("Paraffin-gauze-dressing-cover.webp"),
    gallery: [paraffinGauzeDressing3, paraffinGauzeDressing4],
    description:
      "Sterile gauze dressing impregnated with white soft paraffin, used as a primary wound treatment for burns, skin grafts, ulcers and other injuries.",
    sizes: [
      "10 x 10 cm in 1's/2's/5's/10's (aluminium foil pouch)",
      "10 x 10 cm in 20/24 nos (aluminium tin or plastic container)",
    ],
    details: [
      "Sterile",
      "Impregnated with white soft paraffin",
      "Primary wound treatment for burns, skin grafts, ulcers and other injuries",
    ],
  },

  // ---------------- PROTECTIVE EQUIPMENT ----------------
  {
    id: 18,
    name: "Surgeon Gown",
    category: ["protective-equipment"],
    brand: "clinisafe",
    image: surgeonGown,
    hoverImage: surgeonGownCover,
    thumb: thumb("surgeongown.webp"),
    hoverThumb: thumb("surgeongown.cover.webp"),
    gallery: [surgeonGown3, surgeonGown4, surgeonGown5, surgeonGown6],
    description:
      "Available in ULTRA reinforcement, SMMS and non-woven types, along with hand towels.",
    sizes: [],
    details: [
      "Types: ULTRA reinforcement, SMMS, non-woven, hand towels",
    ],
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
    brand: "clinisafe",
    image: disposableHivKit,
    hoverImage: disposableHivKitCover,
    thumb: thumb("Disposable-HIV-Protection-Kit.webp"),
    hoverThumb: thumb("Disposable-HIV-Protection-Kit-cover.webp"),
    description:
      "Disposable kit containing a face mask, cap, gown, bed sheet, goggle, shoe covers, nitrile gloves and a disposal bag. Also available as a 3D HIV kit (3 kits).",
    sizes: [],
    details: [
      "Face mask 1 pc (3 ply)",
      "Cap 1 pc",
      "Gown 1 pc",
      "Bed sheet 1 pc",
      "Goggle 1 pc",
      "Shoe cover 1 pair (2 nos)",
      "Gloves 1 pair nitrile (2 nos)",
      "Disposal bag 1 pc",
      "Also available as a 3D HIV kit (3 kits)",
    ],
  },
  {
    id: 21,
    name: "Plain POLYETHYLENE Sheet",
    category: ["protective-equipment"],
    brand: "savior",
    image: plainPolyethyleneSheet,
    hoverImage: plainPolyethyleneSheetCover,
    thumb: thumb("Plain-POLYETHYLENE-sheet-Green-color-600x600.webp"),
    hoverThumb: thumb("Plain-POLYETHYLENE-sheet-Green-color-cover.webp"),
    gallery: [plainPolyethyleneSheet3],
    description:
      "Plain polyethylene sheet, also known as green sheet or bed sheet.",
    sizes: [
      "140 x 150 cm",
      "Other sizes on request",
    ],
    details: [
      "Also known as green sheet / bed sheet",
    ],
  },
  {
    id: 22,
    name: "Plain Sheet Premium",
    category: ["protective-equipment"],
    brand: "savior",
    image: plainSheetPremium,
    hoverImage: plainSheetPremiumCover,
    thumb: thumb("Plain-Sheet-Premium-blue-color-2-600x600.webp"),
    hoverThumb: thumb("Plain-Sheet-Premium-blue-color-cover.webp"),
    gallery: [plainSheetPremium3],
    description:
      "Biodegradable plain sheet.",
    sizes: [
      "Regular 120 x 210 cm",
    ],
    details: [
      "Biodegradable plain sheet",
    ],
  },
];

export default products;
