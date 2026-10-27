import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { FiPhone, FiMail, FiMapPin, FiClock, FiSend, FiCheckCircle } from "react-icons/fi";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import siteConfig from "../config/siteConfig";
import images from "../data/images";
import "./Contact.css";

const contactCards = [
  {
    icon: <FiPhone />,
    title: "Phone",
    value: siteConfig.phone,
    link: siteConfig.phoneLink,
  },
  {
    icon: <FiMail />,
    title: "Email",
    value: siteConfig.email,
    link: siteConfig.emailLink,
  },
  {
    icon: <FiMapPin />,
    title: "Address",
    value: siteConfig.address,
  },
  {
    icon: <FiClock />,
    title: "Business Hours",
    value: siteConfig.businessHours,
  },
];

function Contact() {
  // If the visitor clicked "Enquire Now" on a product, pre-fill the subject
  const [searchParams] = useSearchParams();
  const productName = searchParams.get("product");

  const emptyForm = {
    fullName: "",
    email: "",
    phone: "",
    subject: productName ? `Enquiry: ${productName}` : "",
    message: "",
  };

  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: "" }));
  };

  const validate = () => {
    const newErrors = {};
    if (!form.fullName.trim()) newErrors.fullName = "Please enter your full name.";
    if (!form.email.trim()) newErrors.email = "Please enter your email address.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "Please enter a valid email address.";
    if (form.phone && !/^[0-9+\-\s()]{7,20}$/.test(form.phone))
      newErrors.phone = "Please enter a valid phone number.";
    if (!form.subject.trim()) newErrors.subject = "Please enter a subject.";
    if (!form.message.trim()) newErrors.message = "Please enter your message.";
    return newErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // FRONTEND ONLY: nothing is sent yet.
    // Later, connect this to your backend, an email service (e.g. EmailJS) or a form service.
    console.log("Enquiry form data:", form);
    setSubmitted(true);
    setForm({ ...emptyForm, subject: "" });
  };

  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Have a question about our products or need a quote? Our team is here to help."
        image={images.contactBanner}
        breadcrumbs={[{ label: "Home", path: "/" }, { label: "Contact" }]}
      />

      {/* ===== Contact detail cards ===== */}
      <section className="contact-cards-section">
        <div className="container">
          <div className="contact-cards">
            {contactCards.map((card, index) => (
              <Reveal key={card.title} delay={index * 80}>
                <div className="contact-card">
                  <span className="contact-card__icon" aria-hidden="true">{card.icon}</span>
                  <h3>{card.title}</h3>
                  {card.link ? (
                    <a href={card.link}>{card.value}</a>
                  ) : (
                    <p>{card.value}</p>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Form ===== */}
      <section className="section contact-main">
        <div className="container contact-main__grid">
          <Reveal className="contact-main__info">
            <span className="eyebrow">Get In Touch</span>
            <h2>Send Us an Enquiry</h2>
            <p>
              Fill in the form and our team will get back to you with product information,
              pricing or any support you need. For urgent requirements, please call us directly.
            </p>

            <ul className="contact-main__list">
              <li><FiCheckCircle aria-hidden="true" /> Product specifications & samples</li>
              <li><FiCheckCircle aria-hidden="true" /> Bulk orders & institutional supply</li>
              <li><FiCheckCircle aria-hidden="true" /> Distributor & partnership enquiries</li>
            </ul>

            <div className="contact-main__call">
              <span className="contact-main__call-icon"><FiPhone aria-hidden="true" /></span>
              <div>
                <small>Prefer to talk?</small>
                <a href={siteConfig.phoneLink}>{siteConfig.phone}</a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              {submitted && (
                <div className="contact-form__success" role="status">
                  <FiCheckCircle aria-hidden="true" />
                  Thank you! Your enquiry has been received. We will get back to you shortly.
                </div>
              )}

              <div className="contact-form__row">
                <div className="form-field">
                  <label htmlFor="fullName">Full Name <span>*</span></label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    placeholder="Enter your full name"
                    value={form.fullName}
                    onChange={handleChange}
                    className={errors.fullName ? "has-error" : ""}
                    autoComplete="name"
                  />
                  {errors.fullName && <small className="form-field__error">{errors.fullName}</small>}
                </div>

                <div className="form-field">
                  <label htmlFor="email">Email <span>*</span></label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={handleChange}
                    className={errors.email ? "has-error" : ""}
                    autoComplete="email"
                  />
                  {errors.email && <small className="form-field__error">{errors.email}</small>}
                </div>
              </div>

              <div className="contact-form__row">
                <div className="form-field">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+91 00000 00000"
                    value={form.phone}
                    onChange={handleChange}
                    className={errors.phone ? "has-error" : ""}
                    autoComplete="tel"
                  />
                  {errors.phone && <small className="form-field__error">{errors.phone}</small>}
                </div>

                <div className="form-field">
                  <label htmlFor="subject">Subject <span>*</span></label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="How can we help?"
                    value={form.subject}
                    onChange={handleChange}
                    className={errors.subject ? "has-error" : ""}
                  />
                  {errors.subject && <small className="form-field__error">{errors.subject}</small>}
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="message">Message <span>*</span></label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Tell us about your requirement..."
                  value={form.message}
                  onChange={handleChange}
                  className={errors.message ? "has-error" : ""}
                />
                {errors.message && <small className="form-field__error">{errors.message}</small>}
              </div>

              <button type="submit" className="btn btn--primary contact-form__submit">
                Send Enquiry <FiSend aria-hidden="true" />
              </button>
            </form>
          </Reveal>
        </div>
      </section>

      {/* ===== Map ===== */}
      <section className="contact-map" aria-label="Our location on the map">
        {/* Change the map location in src/config/siteConfig.js → mapEmbedUrl */}
        <iframe
          title="Company location map"
          src={siteConfig.mapEmbedUrl}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </section>
    </>
  );
}

export default Contact;
