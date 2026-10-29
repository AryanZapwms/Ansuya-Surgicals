import { Fragment } from "react";
import { FiPhone, FiMail, FiMapPin, FiFileText, FiCheckCircle } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa6";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import siteConfig, { getWhatsAppUrl } from "../config/siteConfig";
import "./Contact.css";

/* Puts each item on its own line */
const lines = (items) =>
  items.map((item, index) => (
    <Fragment key={index}>
      {index > 0 && <br />}
      {item}
    </Fragment>
  ));

const contactCards = [
  ...siteConfig.addresses.map((address) => ({
    icon: <FiMapPin />,
    title: address.label,
    content: lines(address.lines),
    wide: true,
  })),
  {
    icon: <FiPhone />,
    title: "Phone",
    content: lines(
      siteConfig.phones.map((phone) => (
        <a key={phone.link} href={phone.link}>{phone.display}</a>
      ))
    ),
  },
  {
    icon: <FiMail />,
    title: "Email",
    content: <a href={siteConfig.emailLink}>{siteConfig.email}</a>,
  },
  {
    icon: <FiFileText />,
    title: "GST No.",
    content: siteConfig.gstNumber,
  },
];

function Contact() {
  return (
    <>
      <title>{`Contact Us | ${siteConfig.companyName}`}</title>

      <PageHero
        title="Contact Us"
        subtitle="Have a question about our products or need a quote? Our team is here to help."
        breadcrumbs={[{ label: "Home", path: "/" }, { label: "Contact" }]}
      />

      {/* ===== Contact detail cards ===== */}
      <section className="contact-cards-section">
        <div className="container">
          <div className="contact-cards">
            {contactCards.map((card, index) => (
              <Reveal
                key={card.title}
                delay={index * 80}
                className={card.wide ? "contact-cards__wide" : ""}
              >
                <div className="contact-card card card--lift">
                  <span className="contact-card__icon" aria-hidden="true">{card.icon}</span>
                  <h3>{card.title}</h3>
                  <p>{card.content}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Call / WhatsApp ===== */}
      <section className="section contact-main">
        <div className="container contact-main__grid">
          <Reveal className="contact-main__info">
            <span className="eyebrow">Get In Touch</span>
            <h2>Talk to Our Team</h2>
            <p>
              Call us or send us a WhatsApp message and our team will get back to you with
              product information, pricing or any support you need.
            </p>

            <ul className="contact-main__list">
              <li><FiCheckCircle aria-hidden="true" /> Product specifications & samples</li>
              <li><FiCheckCircle aria-hidden="true" /> Bulk orders & institutional supply</li>
              <li><FiCheckCircle aria-hidden="true" /> Distributor & partnership enquiries</li>
            </ul>
          </Reveal>

          <Reveal delay={150} className="contact-actions">
            {siteConfig.phones.map((phone) => (
              <div key={phone.link} className="contact-main__call">
                <span className="contact-main__call-icon"><FiPhone aria-hidden="true" /></span>
                <div>
                  <small>Call us</small>
                  <a href={phone.link}>{phone.display}</a>
                </div>
              </div>
            ))}

            <a
              href={getWhatsAppUrl()}
              className="btn btn--whatsapp contact-whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp aria-hidden="true" /> Chat on WhatsApp
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}

export default Contact;
