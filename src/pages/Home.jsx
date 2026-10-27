import { useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowRight, FiPhone } from "react-icons/fi";
import SectionHeading from "../components/SectionHeading";
import SmartImage from "../components/SmartImage";
import ProductListing from "../components/ProductListing";
import CTASection from "../components/CTASection";
import siteConfig, { getWhatsAppUrl } from "../config/siteConfig";
import brands from "../data/brands";
import products from "../data/products";
import "./Home.css";

/* How many products the home page shows before "View All Products" */
const HOME_PRODUCT_LIMIT = 8;

/* Every brand logo — Innova's two sub-brands (Fix, Crepe) are shown
   alongside their parent, giving 9 logos. */
const brandLogos = brands.flatMap((brand) =>
  brand.children ? [brand, ...brand.children] : [brand]
);

function Home() {
  const [activeCategory, setActiveCategory] = useState("all");
  const viewAllLink =
    activeCategory === "all" ? "/products" : `/products?category=${activeCategory}`;

  return (
    <>
      <title>{`${siteConfig.companyName} | Medical & Surgical Dressings`}</title>

      {/* ===== SECTION 1 — COMPACT HERO ===== */}
      <section className="home-hero">
        <div className="home-hero__pattern" aria-hidden="true" />
        <div className="container home-hero__content">
          <h1 className="home-hero__title">{siteConfig.companyName}</h1>
          <p className="home-hero__tagline">Medical &amp; Surgical Dressings</p>
          <div className="home-hero__actions">
            <Link to="/products" className="btn btn--white">
              View Products <FiArrowRight aria-hidden="true" />
            </Link>
            <a href={siteConfig.phoneLink} className="btn btn--ghost-light">
              <FiPhone aria-hidden="true" /> Call Us
            </a>
          </div>
        </div>
      </section>

      {/* ===== SECTION 2 — PRODUCTS ===== */}
      <section className="section home-products">
        <div className="container">
          <SectionHeading center eyebrow="Our Products" title="Our Product Range" />

          <ProductListing
            products={products}
            showFilters
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
            limit={HOME_PRODUCT_LIMIT}
          />

          <div className="home-products__more">
            <Link to={viewAllLink} className="btn btn--outline">
              View All Products <FiArrowRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== SECTION 3 — OUR BRANDS ===== */}
      <section className="section section--soft home-brands">
        <div className="container">
          <SectionHeading center eyebrow="Our Brands" title="Trusted Brands for Every Need" />

          <ul className="brand-strip">
            {brandLogos.map((brand) => (
              <li key={brand.slug} className="brand-strip__item">
                <SmartImage src={brand.image} alt={brand.name} className="brand-strip__logo" />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===== SECTION 4 — CTA ===== */}
      <CTASection
        title="Need bulk or institutional pricing?"
        text="Message us on WhatsApp or call our team for bulk and institutional supply."
        buttonLabel="Chat on WhatsApp"
        buttonLink={getWhatsAppUrl("Hello, I would like to enquire about bulk / institutional pricing.")}
      />
    </>
  );
}

export default Home;
