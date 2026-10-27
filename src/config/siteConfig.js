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

  // TBD — real email address not confirmed yet (placeholder)
  email: "info@example.com",
  emailLink: "mailto:info@example.com",

  addressLines,
  address: addressLines.join(" "),
  gstNumber: "27AADCA0305N1ZW",

  // TBD — real business hours not confirmed yet (placeholder)
  businessHours: "Mon – Sat: 9:30 AM – 6:30 PM",

  // ---- Google Map (search embed for the address above, no API key needed) ----
  mapEmbedUrl: `https://www.google.com/maps?q=${encodeURIComponent(
    addressLines.join(" ")
  )}&output=embed`,

  copyrightYear: 2026,
};

export default siteConfig;
