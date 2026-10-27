/* =========================================================
   HOME PAGE — CLIENT / PARTNER LOGOS
   Every logo in src/assets/images/our clients is listed here.
   To add a new client: drop the logo in that folder, import it
   below, then add one entry to the array.
   ========================================================= */

import lhrc from "../assets/images/our clients/LHRC_Logo_stez.svg";
import slRaheja from "../assets/images/our clients/S.L.-Raheja-Hospital_Logo-scaled.jpg";
import sahyadriHospitals from "../assets/images/our clients/Sahyadrihospitals.webp";
import breachCandy from "../assets/images/our clients/breach-candy=- hospital-trust.jpg";
import jupiterHospital from "../assets/images/our clients/jupiter-hospital.webp";
import narayanaHealth from "../assets/images/our clients/narayanahealth.svg";

const clientLogos = [
  { id: "lhrc", name: "Lilavati Hospital and Research Centre", image: lhrc },
  { id: "sl-raheja", name: "S. L. Raheja Hospital", image: slRaheja },
  { id: "sahyadri-hospitals", name: "Sahyadri Hospitals", image: sahyadriHospitals },
  { id: "breach-candy", name: "Breach Candy Hospital Trust", image: breachCandy },
  { id: "jupiter-hospital", name: "Jupiter Hospital", image: jupiterHospital },
  { id: "narayana-health", name: "Narayana Health", image: narayanaHealth },
];

export default clientLogos;
