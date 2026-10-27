/* =========================================================
   HOME PAGE — PRODUCT CAROUSEL
   Every image in src/assets/images/home-products is listed
   here with a clean, readable name (derived from the file name).

   hoverImage is the matching "-cover" photo — shown as a
   crossfade when the pointer is over the product image.
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
import ansuyaSurgeonGown from "../assets/images/home-products/ansuya-4-surgeon-gown.webp";
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

/* To add a new product: drop the image (and its "-cover" photo) in
   src/assets/images/home-products, import both above, then add one
   entry below. */
const homeProducts = [
  { id: "cast-padding", name: "Cast Padding", image: castPadding, hoverImage: castPaddingCover },
  { id: "chlorhexidine-gauze-dressing", name: "Chlorhexidine Gauze Dressing B.P.", image: chlorhexidineGauzeDressing, hoverImage: chlorhexidineGauzeDressingCover },
  { id: "combine-dressing", name: "Combine Dressing", image: combineDressing, hoverImage: combineDressingCover },
  { id: "disposable-hiv-kit", name: "Disposable HIV Protection Kit", image: disposableHivKit, hoverImage: disposableHivKitCover },
  { id: "elastic-crepe-bandage", name: "Elastic Crepe Bandage", image: elasticCrepeBandage, hoverImage: elasticCrepeBandageCover },
  { id: "gamjee-roll", name: "Gamjee Roll", image: gamjeeRoll, hoverImage: gamjeeRollCover },
  { id: "gauze-swabs", name: "Gauze Swabs", image: gauzeSwabs, hoverImage: gauzeSwabsCover },
  { id: "paraffin-gauze-dressing", name: "Paraffin Gauze Dressing", image: paraffinGauzeDressing, hoverImage: paraffinGauzeDressingCover },
  { id: "plain-polyethylene-sheet", name: "Plain Polyethylene Sheet - Green", image: plainPolyethyleneSheet, hoverImage: plainPolyethyleneSheetCover },
  { id: "plain-sheet-premium", name: "Plain Sheet Premium - Blue", image: plainSheetPremium, hoverImage: plainSheetPremiumCover },
  { id: "plaster-of-paris-bandage", name: "Plaster of Paris Bandage", image: plasterOfParisBandage, hoverImage: plasterOfParisBandageCover },
  { id: "abdominal-pads", name: "Abdominal Pads", image: abdominalPads, hoverImage: abdominalPadsCover },
  // No "-cover" photo exists yet for this one — add
  // "ansuya-4-surgeon-gown-cover.webp" to enable its hover swap.
  { id: "ansuya-surgeon-gown", name: "Ansuya Surgeon Gown", image: ansuyaSurgeonGown },
  { id: "cannula-fixator", name: "Cannula Fixator", image: cannulaFixator, hoverImage: cannulaFixatorCover },
  { id: "cotton-gamjee-pad", name: "Cotton Gamjee Pad", image: cottonGamjeePad, hoverImage: cottonGamjeePadCover },
  { id: "cotton-adhesive-tape", name: "Cotton Adhesive Tape", image: cottonAdhesiveTape, hoverImage: cottonAdhesiveTapeCover },
  { id: "cotton-crepe-bandage", name: "Cotton Crepe Bandage", image: cottonCrepeBandage, hoverImage: cottonCrepeBandageCover },
  { id: "elastic-adhesive-bandages", name: "Elastic Adhesive Bandages", image: elasticAdhesiveBandages, hoverImage: elasticAdhesiveBandagesCover },
  { id: "eye-pad", name: "Eye Pad", image: eyePad, hoverImage: eyePadCover },
  { id: "microporous-surgical-tape", name: "Microporous Surgical Tape", image: microporousSurgicalTape, hoverImage: microporousSurgicalTapeCover },
  { id: "rolled-bandages", name: "Rolled Bandages", image: rolledBandages, hoverImage: rolledBandagesCover },
];

export default homeProducts;
