/* =========================================================
   SITE CONFIG — CHANGE YOUR COMPANY DETAILS HERE ONLY
   Everything below is used across the Header, Footer,
   Contact page and CTA sections automatically.
   ========================================================= */

// ---- Address (one entry per line, shown multi-line where the layout allows) ----
const addressLines = [
  "Unit No. 4, Balaji Industrial Estate,",
  "Chaudhari Compound, Village Dhaniv,",
  "Wakanpada, Nallasopara (E),",
  "Dist. Palghar - 401209",
];

const siteConfig = {
  // ---- Logo / Company name (placeholder) ----
  // To use a real logo image: put your logo in src/assets/images/
  // then import it in src/components/Logo.jsx (instructions are there).
  logoTextMain: "Ansuya",
  logoTextAccent: "Surgicals",
  logoTagline: "Surgical Care",
  companyName: "Ansuya Surgicals Ltd.",

  // ---- Short description used in the footer ----
  footerDescription:
    "Delivering reliable medical and surgical dressing solutions designed for quality, safety and patient care.",

  // ---- Contact details ----
  // Primary phone — used by every single "Call Us" button
  phone: "+91 91677 33790",
  phoneLink: "tel:+919167733790",

  // All phone numbers — listed in the Footer and on the Contact page
  phones: [
    { display: "+91 63666 84524", link: "tel:+916366684524" },
    { display: "+91 91677 33790", link: "tel:+919167733790" },
  ],

  // WhatsApp number (country code + number, no "+" or spaces)
  whatsappNumber: "919167733790",

  email: "ansuyasurgicals@gmail.com",
  emailLink: "mailto:ansuyasurgicals@gmail.com",

  addressLines,
  address: addressLines.join(" "),
  gstNumber: "27AADCA0305N1ZW",

  copyrightYear: 2026,
};

/* Builds a WhatsApp chat link, optionally with a pre-filled message */
export function getWhatsAppUrl(message) {
  const url = `https://wa.me/${siteConfig.whatsappNumber}`;
  return message ? `${url}?text=${encodeURIComponent(message)}` : url;
}

/* WhatsApp link used by every "Enquire Now" button */
export function getProductEnquiryUrl(productName) {
  return getWhatsAppUrl(`Hello, I would like to enquire about: ${productName}`);
}

export default siteConfig;
