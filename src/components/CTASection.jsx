import { Link } from "react-router-dom";
import { FiArrowRight, FiPhoneCall } from "react-icons/fi";
import Reveal from "./Reveal";
import siteConfig from "../config/siteConfig";
import "./CTASection.css";

/* =========================================================
   CTA SECTION — strong call-to-action banner
   Props (all optional):
   - title, text, buttonLabel, buttonLink
     (a buttonLink starting with "http", e.g. WhatsApp, opens in a new tab)
   ========================================================= */

function CTASection({
  title = "Looking for Reliable Medical Dressing Solutions?",
  text = "Talk to our team for product information, bulk supply enquiries and partnership opportunities.",
  buttonLabel = "Contact Us",
  buttonLink = "/contact",
}) {
  return (
    <section className="cta">
      <div className="container">
        <Reveal className="cta__box">
          <div className="cta__shape cta__shape--one" aria-hidden="true" />
          <div className="cta__shape cta__shape--two" aria-hidden="true" />

          <div className="cta__content">
            <span className="cta__label">Get In Touch</span>
            <h2 className="cta__title">{title}</h2>
            <p className="cta__text">{text}</p>
          </div>

          <div className="cta__actions">
            {buttonLink.startsWith("http") ? (
              <a href={buttonLink} className="btn btn--white" target="_blank" rel="noopener noreferrer">
                {buttonLabel} <FiArrowRight aria-hidden="true" />
              </a>
            ) : (
              <Link to={buttonLink} className="btn btn--white">
                {buttonLabel} <FiArrowRight aria-hidden="true" />
              </Link>
            )}
            <a href={siteConfig.phoneLink} className="cta__phone">
              <span className="cta__phone-icon">
                <FiPhoneCall aria-hidden="true" />
              </span>
              <span>
                <small>Call us directly</small>
                {siteConfig.phone}
              </span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default CTASection;
