import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiCheck,
  FiShield,
  FiLayers,
  FiHeart,
  FiHeadphones,
} from "react-icons/fi";
import {
  FaBriefcaseMedical,
  FaClipboardCheck,
  FaTruckMedical,
  FaHandshake,
} from "react-icons/fa6";
import HeroSlider from "../components/HeroSlider";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import SmartImage from "../components/SmartImage";
import ProductCarousel from "../components/ProductCarousel";
import CTASection from "../components/CTASection";
import brands from "../data/brands";
import images from "../data/images";
import products from "../data/products";
import clientLogos from "../data/clientLogos";
import "./Home.css";

/* ---------- Page content (edit text here) ---------- */

const trustItems = [
  { icon: <FiShield />, title: "Quality Checked", text: "Consistent product standards" },
  { icon: <FiLayers />, title: "Wide Range", text: "Bandages to protective wear" },
  { icon: <FiHeart />, title: "Patient Focused", text: "Comfort and safety first" },
  { icon: <FiHeadphones />, title: "Quick Support", text: "Responsive enquiry handling" },
];
const services = [
  {
    icon: <FaBriefcaseMedical />,
    title: "Manufacturer",
    text: " Ansuya specializes in the crafting of high-quality medical surgical dressing and advanced equipment for the healthcare industry.",
  },
  {
    icon: <FaClipboardCheck />,
    title: "Surgical Innovation and Excellence",
    text: "Ansuya Focuses on providing innovative and excellent surgical dressings. They prioritize quality and advancement in their offerings.",
  },
  {
    icon: <FaTruckMedical />,
    title: "High Quality Surgical Supplies",
    text: "Ansuya produces top-tier medical surgical dressings supplies, ensuring quality and reliability for healthcare professionals.",
  },
  {
    icon: <FaHandshake />,
    title: "Safe Products",
    text: "Ansuya guarentees the safety of all products sold. This includes quality control and adherence to safety standards",
  },
];

/* Every brand as its own tile — Innova's two sub-brands (Fix, Crepe)
   are shown alongside their parent, giving 9 tiles for the 9 logos. */
const brandTiles = brands.flatMap((brand) =>
  brand.children ? [brand, ...brand.children] : [brand]
);

function Home() {
  return (
    <>
      {/* ===== SECTION 1 — HERO SLIDER ===== */}
      <HeroSlider />

      {/* Trust strip */}
      <section className="trust-strip" aria-label="Why customers trust us">
        <div className="container">
          <div className="trust-strip__grid">
            {trustItems.map((item, index) => (
              <Reveal key={item.title} delay={index * 80} className="trust-strip__item">
                <span className="trust-strip__icon" aria-hidden="true">{item.icon}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 2 — ABOUT PREVIEW ===== */}
      <section className="section home-about">
        <div className="container home-about__grid">
          <Reveal className="home-about__media">
            <div className="home-about__image-wrap">
              <SmartImage
                src={images.aboutHome}
                alt="Healthcare professional handling sterile medical supplies"
                className="home-about__image"
              />
            </div>
            <div className="home-about__badge">
              {/* PLACEHOLDER NUMBER — change it to your real value */}
              <strong>10+</strong>
              <span>Product<br />Categories</span>
            </div>
            <div className="home-about__dots" aria-hidden="true" />
          </Reveal>

          <Reveal delay={150} className="home-about__content">
            <span className="eyebrow">About Us</span>
            <h2>Medicated Surgical Dressings</h2>
            <p className="home-about__lead">
              Ultimately, the aim of a dressing is to promote healing of 
              the wound by providing a sterile, breathable and moist
               environment that facilitates granulation and epithelialization.
                This will then reduce the risk of infection, help the wound 
                heal more quickly, and reduce scarring.
            </p>
            <p>
              The main purpose of wound dressing is:<br/>

a) Provide a temporary protective physical barrier.<br/>

b) Absorb wound drainage.<br/>

c) Provide the moisture necessary to optimize re-epithelialization.<br/>

The choice of dressing depends on the anatomical and pathophysiological characteristics of the wound.


            </p><br/>

            {/* <ul className="home-about__highlights">
              <li><FiCheck aria-hidden="true" /> Quality Focused</li>
              <li><FiCheck aria-hidden="true" /> Reliable Products</li>
              <li><FiCheck aria-hidden="true" /> Healthcare Driven</li>
            </ul> */}

            <Link to="/about" className="btn btn--primary">
              Know More <FiArrowRight aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ===== SECTION 3 — PRODUCT RANGE ===== */}
      <section className="section section--soft home-products">
        <div className="container">
          <SectionHeading
            center
            eyebrow="Our Products"
            title="Our Product Range"
            text="We provide a comprehensive range of medical and surgical dressing products — designed for hospitals, clinics and home-care settings."
          />

          <ProductCarousel products={products} />

          <div className="home-products__more">
            <Link to="/products" className="btn btn--outline">
              View All Products <FiArrowRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== SECTION 4 — WHAT WE DO ===== */}
      <section className="section what-we-do">
        <div className="container">
          <div className="what-we-do__head">
            <SectionHeading
              eyebrow="What We Do"
              title="Your Path To Healing
"
            />
            <Reveal delay={100}>
              <p className="what-we-do__intro">
                Ansuya expertly produces specialized medicated 
                surgical dressing and a variety of precision medical dressings.
              </p>
            </Reveal>
          </div>

          <div className="service-cards">
            {services.map((service, index) => (
              <Reveal key={service.title} delay={index * 100}>
                <div className="service-card">
                  <span className="service-card__icon" aria-hidden="true">{service.icon}</span>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <span className="service-card__index" aria-hidden="true">0{index + 1}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 5 — OUR BRANDS ===== */}
      <section className="section section--soft home-brands">
        <div className="container">
          <SectionHeading
            center
            eyebrow="Our Brands"
            title="Trusted Brands for Every Need"
            text="Each of our brands is focused on a specific area of care, giving you the right product for the right application."
          />

          <div className="brand-grid">
            {brandTiles.map((brand, index) => (
              <Reveal key={brand.slug} delay={index * 60} className="brand-tile-wrap">
                <Link
                  to={brand.path}
                  className="brand-tile"
                  style={{ "--brand-color": brand.color }}
                  aria-label={`${brand.name} — ${brand.tagline}`}
                >
                  <span className="brand-tile__accent" aria-hidden="true" />
                  <span className="brand-tile__media">
                    <SmartImage
                      src={brand.image}
                      alt={brand.name}
                      className="brand-tile__logo"
                    />
                  </span>
                  <span className="brand-tile__footer">
                    <span className="brand-tile__text">
                      <span className="brand-tile__name">{brand.name}</span>
                      <span className="brand-tile__tagline">{brand.tagline}</span>
                    </span>
                    <span className="brand-tile__arrow" aria-hidden="true">
                      <FiArrowRight />
                    </span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 6 — CLIENTS & PARTNERS ===== */}
      <section className="section home-clients">
        <div className="container">
          <SectionHeading
            center
            eyebrow="Our Network"
            title="Our Clients & Partners"
            text="Ansuya Surgicals Ltd. proudly supplies to a diverse clientele, including Private & Corporate Hospitals, Government Hospitals, Medical Institutions, and Armed Forces Hospitals

"
          />

          <div className="client-cards">
            {clientLogos.map((client, index) => (
              <Reveal key={client.id} delay={index * 70}>
                <div className="client-card">
                  <div className="client-card__logo-frame">
                    <SmartImage
                      src={client.image}
                      alt={client.name}
                      className="client-card__logo"
                    />
                  </div>
                  <span className="client-card__name">{client.name}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 7 — CTA ===== */}
      <CTASection />
    </>
  );
}

export default Home;
