import { useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowRight, FiPhone } from "react-icons/fi";
import {
  FaBoxesStacked,
  FaHospital,
  FaIndustry,
  FaMapLocationDot,
  FaWhatsapp,
} from "react-icons/fa6";
import HeroCarousel from "../components/HeroCarousel";
import FeaturedProducts from "../components/FeaturedProducts";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import ProductListing from "../components/ProductListing";
import BackToTop from "../components/BackToTop";
import siteConfig, { getWhatsAppUrl } from "../config/siteConfig";
import products from "../data/products";
import { allBrands } from "../data/brands";
import collageCrepeBandage from "../assets/images/home/collage-crepe-bandage.webp";
import collageSoftPadPacks from "../assets/images/home/collage-soft-pad-packs.webp";
import collageGamjeeRoll from "../assets/images/home/collage-gamjee-roll.webp";
import collageGauzeBandage from "../assets/images/home/collage-gauze-bandage.webp";
import "./Home.css";

/* How many products the home page shows before "View All Products" */
const HOME_PRODUCT_LIMIT = 8;

/* Products in the Featured Products carousel, in this order (ids from products.js) */
const FEATURED_PRODUCT_IDS = [11, 17, 15, 4, 9, 14, 10, 8];
const featuredProducts = FEATURED_PRODUCT_IDS.map((id) => products.find((p) => p.id === id)).filter(Boolean);

/* What We Do cards — one plain, factual line each (facts from the About page) */
const services = [
  {
    icon: FaIndustry,
    title: "Manufacturer",
    text: "Surgical dressings and bandages made at our own facility in Nalasopara.",
  },
  {
    icon: FaBoxesStacked,
    title: "Wide Product Range",
    text: "Absorbent dressings, bandages, medicated dressings and protective equipment.",
  },
  {
    icon: FaHospital,
    title: "Bulk & Institutional Supply",
    text: "Bulk supply to hospitals and medical institutions.",
  },
  {
    icon: FaMapLocationDot,
    title: "Pan-India Supply",
    text: "Supplied across India through regional representatives and channel partners.",
  },
];

/* Photo collage next to "Surgical dressings, made in India" (all 720 × 720) */
const collagePhotos = [
  { src: collageCrepeBandage, alt: "Crepe bandage being wrapped around a hand" },
  { src: collageSoftPadPacks, alt: "Soft Pad cast padding packs and rolls" },
  { src: collageGamjeeRoll, alt: "Cotton gamjee roll" },
  { src: collageGauzeBandage, alt: "Rolled gauze bandage on a hand" },
];

function Home() {
  const [activeCategory, setActiveCategory] = useState("all");
  const viewAllLink =
    activeCategory === "all" ? "/products" : `/products?category=${activeCategory}`;

  return (
    <>
      <title>{`${siteConfig.companyName} | Medical & Surgical Dressings`}</title>

      {/* ===== HERO CAROUSEL ===== */}
      <HeroCarousel />

      {/* ===== DIAGONAL BLUE BAND ===== */}
      <section className="home-band">
        <span className="home-band__watermark" aria-hidden="true">ANSUYA</span>
        <div className="container home-band__inner">
          <Reveal className="home-band__text">
            <h2 className="home-band__title">Medical Surgicals</h2>
            <p className="home-band__tagline">Your path to healing</p>
          </Reveal>
          <Link to="/about" className="btn btn--orange home-band__btn">
            About Us <FiArrowRight aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* ===== FEATURED PRODUCTS ===== */}
      <section className="section home-featured">
        <div className="container">
          <FeaturedProducts title="Featured Products" products={featuredProducts} />
        </div>
      </section>

      {/* ===== OUR PRODUCT RANGE ===== */}
      <section className="section home-range">
        <div className="container">
          <SectionHeading center title="Our Product Range" />

          <ProductListing
            products={products}
            showFilters
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
            limit={HOME_PRODUCT_LIMIT}
          />

          <div className="home-range__more">
            <Link to={viewAllLink} className="btn btn--orange">
              View All Products <FiArrowRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== PHOTO COLLAGE ===== */}
      <section className="section home-photos">
        <div className="container home-photos__grid">
          <Reveal className="home-photos__collage">
            <span className="home-photos__accent" aria-hidden="true" />
            <div className="home-photos__tiles">
              {collagePhotos.map((photo) => (
                <div key={photo.src} className="home-photos__tile">
                  <img src={photo.src} alt={photo.alt} width={720} height={720} loading="lazy" />
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120} className="home-photos__text">
            <h2 className="home-photos__title">Surgical dressings, made in India</h2>
            <p className="home-photos__lead">
              Supplied to hospitals and medical institutions across India.
            </p>
            <Link to="/products" className="btn btn--orange">
              View All Products <FiArrowRight aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ===== WHAT WE DO ===== */}
      <section className="section home-services">
        <div className="container">
          <SectionHeading center title="What We Do" />
          <div className="home-services__grid">
            {services.map(({ icon: Icon, title, text }, index) => (
              <Reveal key={title} delay={index * 80}>
                <div className="home-service">
                  <span className="home-service__icon" aria-hidden="true">
                    <Icon />
                  </span>
                  <h3 className="home-service__title">{title}</h3>
                  <p className="home-service__text">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== OUR BRANDS — pastel tiles, each opens its products ===== */}
      <section className="section home-brands">
        <div className="container">
          <SectionHeading center title="Our Brands" />
          <ul className="home-brands__grid">
            {allBrands.map((brand, index) => (
              <li key={brand.slug}>
                <Reveal delay={index * 50}>
                  <Link
                    to={`/products?brand=${brand.slug}`}
                    className={`brand-tile brand-tone--${brand.slug}`}
                  >
                    {brand.name}
                  </Link>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===== CALL TO ACTION — orange-to-blue band ===== */}
      <section className="home-cta">
        <div className="container home-cta__inner">
          <h2 className="home-cta__title">Need bulk or institutional pricing?</h2>
          <div className="home-cta__actions">
            <a
              href={getWhatsAppUrl("Hello, I would like to enquire about bulk / institutional pricing.")}
              className="btn btn--whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp aria-hidden="true" /> Chat on WhatsApp
            </a>
            <a href={siteConfig.phoneLink} className="btn btn--white">
              <FiPhone aria-hidden="true" /> Call Us
            </a>
          </div>
        </div>
      </section>

      <BackToTop />
    </>
  );
}

export default Home;
