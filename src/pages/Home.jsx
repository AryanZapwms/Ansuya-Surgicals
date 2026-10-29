import { useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import HeroCarousel from "../components/HeroCarousel";
import SectionHeading from "../components/SectionHeading";
import ProductListing from "../components/ProductListing";
import CTASection from "../components/CTASection";
import siteConfig, { getWhatsAppUrl } from "../config/siteConfig";
import products from "../data/products";
import "./Home.css";

/* How many products the home page shows before "View All Products" */
const HOME_PRODUCT_LIMIT = 8;

function Home() {
  const [activeCategory, setActiveCategory] = useState("all");
  const viewAllLink =
    activeCategory === "all" ? "/products" : `/products?category=${activeCategory}`;

  return (
    <>
      <title>{`${siteConfig.companyName} | Medical & Surgical Dressings`}</title>

      {/* ===== HERO CAROUSEL ===== */}
      <HeroCarousel />

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

      {/* ===== SECTION 3 — CTA ===== */}
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
