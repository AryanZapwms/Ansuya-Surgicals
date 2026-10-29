import { Link } from "react-router-dom";
import { FiArrowRight, FiPhoneCall } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa6";
import Reveal from "./Reveal";
import siteConfig from "../config/siteConfig";
import "./CTASection.css";

/* =========================================================
   CTA SECTION — full-width orange-to-blue band at the foot
   of a page (the home page uses the same .cta-band styles)
   Props (all optional):
   - title, text, buttonLabel, buttonLink
     (a buttonLink starting with "http" opens in a new tab;
      a WhatsApp link gets the green WhatsApp button)
   ========================================================= */

function CTASection({
  title = "Looking for Reliable Medical Dressing Solutions?",
  text = "Talk to our team for product information, bulk supply enquiries and partnership opportunities.",
  buttonLabel = "Contact Us",
  buttonLink = "/contact",
}) {
  const isWhatsApp = buttonLink.startsWith("https://wa.me/");
  const buttonClass = `btn ${isWhatsApp ? "btn--whatsapp" : "btn--orange"}`;
  const buttonContent = isWhatsApp ? (
    <>
      <FaWhatsapp aria-hidden="true" /> {buttonLabel}
    </>
  ) : (
    <>
      {buttonLabel} <FiArrowRight aria-hidden="true" />
    </>
  );

  return (
    <section className="cta-band">
      <div className="container cta-band__inner">
        <Reveal className="cta-band__content">
          <span className="cta-band__label">Get In Touch</span>
          <h2 className="cta-band__title">{title}</h2>
          <p className="cta-band__text">{text}</p>
        </Reveal>

        <div className="cta-band__actions">
          {buttonLink.startsWith("http") ? (
            <a href={buttonLink} className={buttonClass} target="_blank" rel="noopener noreferrer">
              {buttonContent}
            </a>
          ) : (
            <Link to={buttonLink} className={buttonClass}>
              {buttonContent}
            </Link>
          )}
          <a href={siteConfig.phoneLink} className="cta-band__phone">
            <span className="cta-band__phone-icon">
              <FiPhoneCall aria-hidden="true" />
            </span>
            <span>
              <small>Call us directly</small>
              {siteConfig.phone}
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default CTASection;
