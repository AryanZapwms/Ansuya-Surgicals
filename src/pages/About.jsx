import { Link } from "react-router-dom";
import { FiTarget, FiEye, FiArrowRight, FiCheckCircle } from "react-icons/fi";
import { FaAward, FaShieldHeart, FaLightbulb, FaUsers } from "react-icons/fa6";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import SmartImage from "../components/SmartImage";
import CTASection from "../components/CTASection";
import images from "../data/images";
import "./About.css";

/* PLACEHOLDER NUMBERS — replace with your real figures */
const stats = [
  { value: "10+", label: "Product Categories" },
  { value: "100%", label: "Quality Focus" },
  { value: "24/7", label: "Customer Support" },
];

const aboutPoints = [
  "Carefully selected, skin-friendly materials",
  "Consistent quality checks at every stage",
  "Products for hospitals, clinics and home care",
  "Dependable supply and responsive service",
];

const whyChooseUs = [
  {
    icon: <FaAward />,
    title: "Quality",
    text: "Every product is made with carefully selected materials and checked to meet consistent quality standards.",
  },
  {
    icon: <FaShieldHeart />,
    title: "Reliability",
    text: "Healthcare teams count on our products performing the same way, every single time they are used.",
  },
  {
    icon: <FaLightbulb />,
    title: "Innovation",
    text: "We continuously improve our range to bring better comfort, absorbency and protection to patients.",
  },
  {
    icon: <FaUsers />,
    title: "Customer Focus",
    text: "We listen closely to clinicians and partners, and support them with fast, helpful service.",
  },
];

function About() {
  return (
    <>
      <PageHero
        title="About Us"
        subtitle="Dedicated to delivering safe, dependable medical and surgical dressing solutions for healthcare professionals."
        image={images.aboutBanner}
        breadcrumbs={[{ label: "Home", path: "/" }, { label: "About Us" }]}
      />

      {/* ===== Main about section ===== */}
      <section className="section about-main">
        <div className="container about-main__grid">
          <Reveal className="about-main__media">
            <div className="about-main__frame">
              <SmartImage
                src={images.aboutPage}
                alt="Medical professional preparing wound-care supplies"
                className="about-main__image"
              />
            </div>
            <div className="about-main__experience">
              <FiCheckCircle aria-hidden="true" />
              <span>
                <strong>Quality First</strong>
                In every product we make
              </span>
            </div>
          </Reveal>

          <Reveal delay={150} className="about-main__content">
            <span className="eyebrow">Who We Are</span>
            <h2>Committed to Quality, Care and Reliability</h2>
            <p className="about-main__lead">
              We are a medical and surgical dressings company focused on one goal — giving
              healthcare professionals products they can rely on, every day.
            </p>
            <p>
              Our range covers bandages, sterile wound dressings, absorbent dressings, medicated
              dressings and protective equipment. Each product is developed with attention to
              material quality, patient comfort and clinical performance, so that hospitals,
              clinics, nursing homes and pharmacies can deliver safe and effective care.
            </p>
            <p>
              Behind every product is a team that values precision, consistency and long-term
              relationships with the people we serve.
            </p>

            <ul className="about-main__points">
              {aboutPoints.map((point) => (
                <li key={point}>
                  <FiCheckCircle aria-hidden="true" /> {point}
                </li>
              ))}
            </ul>

            <div className="about-stats">
              {stats.map((stat) => (
                <div key={stat.label} className="about-stats__item">
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== Mission & Vision ===== */}
      <section className="section mission">
        <div className="mission__bg" aria-hidden="true" />
        <div className="container">
          <SectionHeading
            center
            eyebrow="Our Purpose"
            title="Mission & Vision"
            text="The principles that guide every product we develop and every partnership we build."
          />

          <div className="mission__grid">
            <Reveal className="mission-card">
              <span className="mission-card__icon" aria-hidden="true"><FiTarget /></span>
              <h3>Our Mission</h3>
              <p>
                To provide high-quality, affordable medical and surgical dressings that help
                healthcare professionals deliver safe, comfortable and effective patient care.
              </p>
            </Reveal>

            <Reveal delay={150} className="mission-card mission-card--accent">
              <span className="mission-card__icon" aria-hidden="true"><FiEye /></span>
              <h3>Our Vision</h3>
              <p>
                To be a trusted name in wound care and medical consumables, recognised for
                quality, reliability and a genuine commitment to better healthcare outcomes.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== Why choose us ===== */}
      <section className="section why-us">
        <div className="container">
          <SectionHeading
            center
            eyebrow="Why Choose Us"
            title="What Makes Us Different"
            text="Four commitments that shape how we work with healthcare professionals and partners."
          />

          <div className="why-us__grid">
            {whyChooseUs.map((item, index) => (
              <Reveal key={item.title} delay={index * 100}>
                <div className="why-card">
                  <span className="why-card__icon" aria-hidden="true">{item.icon}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="why-us__more">
            <Link to="/products" className="btn btn--primary">
              Explore Our Products <FiArrowRight aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}

export default About;
