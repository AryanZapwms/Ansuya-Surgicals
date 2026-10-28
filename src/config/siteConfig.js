/* =========================================================
   SITE CONFIG — CHANGE YOUR COMPANY DETAILS HERE ONLY
   Everything below is used across the Header, Footer,
   Contact page and CTA sections automatically.
   ========================================================= */

// ---- Addresses (one entry per line, shown multi-line where the layout allows) ----
const corporateOfficeLines = [
  "Office No. 33, Whispering Palms Shopping Centre,",
  "Alika Nagar, Lokhandwala Township,",
  "Kandivali (East), Mumbai,",
  "Maharashtra 400101",
];

// Factory address (also shown on the About page)
const addressLines = [
  "Unit No. 4, Balaji Industrial Estate,",
  "Chaudhary Compound, Village Dhaniv,",
  "Wakanpada, Nalasopara (E),",
  "Dist. Palghar - 401209",
];

const siteConfig = {
  // ---- Company name (the logo image itself is set in src/components/Logo.jsx) ----
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

  // Labelled addresses — shown in the Footer and on the Contact page
  addresses: [
    { label: "Corporate Office", lines: corporateOfficeLines },
    { label: "Factory", lines: addressLines },
  ],

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
