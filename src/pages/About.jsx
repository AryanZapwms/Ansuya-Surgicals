import { Fragment } from "react";
import { Link } from "react-router-dom";
import { FiArrowRight, FiCheckCircle, FiMapPin } from "react-icons/fi";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import SmartImage from "../components/SmartImage";
import CTASection from "../components/CTASection";
import siteConfig from "../config/siteConfig";
import brands from "../data/brands";
import categories from "../data/categories";
import products from "../data/products";
import images from "../data/images";
import "./About.css";

/* Every brand name — Innova's sub-brands are listed after their parent */
const brandNames = brands.flatMap((brand) =>
  brand.children ? [brand.name, ...brand.children.map((child) => child.name)] : [brand.name]
);

/* Each category with the products that belong to it (from src/data) */
const range = categories.map((category) => ({
  ...category,
  products: products.filter((product) => product.category.includes(category.slug)),
}));

function About() {
  return (
    <>
      <title>{`About Us | ${siteConfig.companyName}`}</title>

      <PageHero
        title="About Us"
        subtitle="Making surgical dressings since 1996."
        breadcrumbs={[{ label: "Home", path: "/" }, { label: "About Us" }]}
      />

      {/* ===== Company introduction ===== */}
      <section className="section about-main">
        <div className="container about-main__grid">
          <Reveal className="about-main__media">
            <div className="about-main__frame">
              <SmartImage
                src={images.aboutHome}
                alt="Bandages and wound dressings being applied"
                className="about-main__image"
              />
            </div>
          </Reveal>

          <Reveal delay={150} className="about-main__content">
            <span className="eyebrow">Who We Are</span>
            <h2>{siteConfig.companyName}</h2>
            <p className="about-main__lead">
              {siteConfig.companyName} has made surgical dressings since 1996. The company began
              as a general trading business and grew across India under its own brands, opening
              its own manufacturing facility in 2010.
            </p>
            <p>
              Our corporate office is in Mumbai and our manufacturing facility is in Nalasopara,
              Vasai (Maharashtra). A network of regional representatives and channel partners
              serves customers across India.
            </p>
            <p>
              We supply private and corporate hospitals, government hospitals, medical
              institutions and armed forces hospitals.
            </p>

            <h3 className="about-main__subtitle">Our Brands</h3>
            <ul className="about-main__points">
              {brandNames.map((name) => (
                <li key={name}>
                  <FiCheckCircle aria-hidden="true" /> {name}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ===== What we make ===== */}
      <section className="section section--soft about-range">
        <div className="container">
          <SectionHeading center eyebrow="What We Make" title="Our Product Range" />

          <div className="about-range__grid">
            {range.map((category, index) => (
              <Reveal key={category.slug} delay={index * 80} className="range-card">
                <h3>{category.name}</h3>
                <ul className="range-card__list">
                  {category.products.map((product) => (
                    <li key={product.id}>
                      <Link to={`/products/${product.id}`}>{product.name}</Link>
                    </li>
                  ))}
                </ul>
                <Link to={category.path} className="range-card__more">
                  View products <FiArrowRight aria-hidden="true" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Address ===== */}
      <section className="section about-address">
        <div className="container">
          <Reveal className="about-address__card">
            <span className="about-address__icon" aria-hidden="true"><FiMapPin /></span>
            <div>
              <span className="eyebrow">Where We Are</span>
              <address className="about-address__lines">
                {siteConfig.addressLines.map((line, index) => (
                  <Fragment key={line}>
                    {index > 0 && <br />}
                    {line}
                  </Fragment>
                ))}
              </address>
              <Link to="/contact" className="btn btn--primary">
                Contact Us <FiArrowRight aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection
        title="Looking for Reliable Medical Dressing Solutions?"
        text="Talk to our team for product information and bulk supply enquiries."
      />
    </>
  );
}

export default About;
