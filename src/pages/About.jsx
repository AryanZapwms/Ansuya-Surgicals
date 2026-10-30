import { Fragment } from "react";
import { Link } from "react-router-dom";
import { FiArrowRight, FiCamera, FiMapPin } from "react-icons/fi";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import CTASection from "../components/CTASection";
import siteConfig from "../config/siteConfig";
import { allBrands } from "../data/brands";
import categories from "../data/categories";
import products from "../data/products";
import "./About.css";

/* The client's own photos, each in a 400px and an 800px copy
   (src/assets/images/about/<name>-400.webp and -800.webp) */
const photoFiles = import.meta.glob("../assets/images/about/*.webp", {
  eager: true,
  import: "default",
});

function photo(name, alt, width, height) {
  const small = photoFiles[`../assets/images/about/${name}-400.webp`];
  const large = photoFiles[`../assets/images/about/${name}-800.webp`];
  return { name, alt, width, height, src: large, srcSet: `${small} 400w, ${large} 800w` };
}

/* How wide each mosaic tile is drawn (3 columns from 560px, 2 below;
   the big tile is 2 columns wide, and on phones the last one is too) */
const TILE_SIZES =
  "(min-width: 1240px) 176px, (min-width: 992px) calc((100vw - 144px) / 6), (min-width: 560px) calc((100vw - 84px) / 3), calc(50vw - 25px)";
const BIG_TILE_SIZES =
  "(min-width: 1240px) 362px, (min-width: 992px) calc((100vw - 144px) / 3), (min-width: 560px) calc((100vw - 64px) * 2 / 3), calc(100vw - 40px)";
const WIDE_ON_PHONE_SIZES =
  "(min-width: 1240px) 176px, (min-width: 992px) calc((100vw - 144px) / 6), (min-width: 560px) calc((100vw - 84px) / 3), calc(100vw - 40px)";

/* Our story — from the client's old About page */
const milestones = [
  {
    number: "01",
    title: "Inception",
    year: "1996",
    text: `${siteConfig.companyName} has made surgical dressings since 1996.`,
  },
  {
    number: "02",
    title: "Own Manufacturing",
    year: "2010",
    text: "The company began as a general trading business and grew across India under its own brands, opening its own manufacturing facility in 2010.",
  },
  {
    number: "03",
    title: "Founder",
    text: (
      <>
        Founded by <strong>Mr. Mahabir Prasad Sharma</strong>.
      </>
    ),
  },
];

/* Exhibition photos; "area" (a–f) places each one in the mosaic (see About.css) */
const exhibitionPhotos = [
  { area: "a", sizes: BIG_TILE_SIZES, ...photo("expo-stall-visitors", "Visitors at the Ansuya Surgicals stall at a trade exhibition", 800, 587) },
  { area: "b", sizes: TILE_SIZES, ...photo("expo-team-seated", "The Ansuya Surgicals team at their exhibition stall", 800, 476) },
  { area: "c", sizes: TILE_SIZES, ...photo("expo-stall-4a16", "The Ansuya Surgicals team at stall 4A16", 800, 600) },
  { area: "d", sizes: TILE_SIZES, ...photo("expo-meeting", "Visitors looking at Ansuya products on a table", 800, 450) },
  { area: "e", sizes: TILE_SIZES, ...photo("expo-stall-team", "The Ansuya Surgicals team in front of their stall", 800, 600) },
  { area: "f", sizes: WIDE_ON_PHONE_SIZES, ...photo("expo-stall-seated", "Ansuya Surgicals team members seated at their stall", 800, 451) },
];

/* Each category with the products that belong to it (from src/data) */
const range = categories.map((category) => ({
  ...category,
  products: products.filter((product) => product.category.includes(category.slug)),
}));

/* A photo tile in one of the mosaics */
function MosaicTile({ photo: tile }) {
  return (
    <div className={`mosaic__tile mosaic__tile--${tile.area}`}>
      <img
        src={tile.src}
        srcSet={tile.srcSet}
        sizes={tile.sizes}
        alt={tile.alt}
        width={tile.width}
        height={tile.height}
        loading="lazy"
        style={tile.position ? { objectPosition: tile.position } : undefined}
      />
    </div>
  );
}

function About() {
  return (
    <>
      <title>{`About Us | ${siteConfig.companyName}`}</title>

      <PageHero
        title="About Us"
        subtitle="Making surgical dressings since 1996."
        breadcrumbs={[{ label: "Home", path: "/" }, { label: "About Us" }]}
      />

      {/* ===== Our story + exhibition photos ===== */}
      <section className="section about-story">
        <div className="container about-story__grid">
          <Reveal className="about-story__content">
            <span className="eyebrow">Who We Are</span>
            <h2 className="about-title">Our Story</h2>

            <ol className="about-steps">
              {milestones.map((step) => (
                <li key={step.number} className="about-step">
                  <span className="about-step__number" aria-hidden="true">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="about-step__title">
                      {step.title}
                      {step.year && <span className="about-step__year">{step.year}</span>}
                    </h3>
                    <p>{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>

            <p className="about-story__supply">
              We supply private and corporate hospitals, government hospitals, medical
              institutions and armed forces hospitals.
            </p>

            <h3 className="about-story__subtitle">Our Brands</h3>
            <ul className="about-story__brands">
              {allBrands.map((brand) => (
                <li key={brand.slug}>
                  <Link
                    to={`/products?brand=${brand.slug}`}
                    className={`about-brand brand-tone--${brand.slug}`}
                  >
                    {brand.name}
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={150} className="about-story__media">
            <span className="about-story__accent" aria-hidden="true" />
            <div className="mosaic mosaic--expo">
              {exhibitionPhotos.map((tile) => (
                <MosaicTile key={tile.name} photo={tile} />
              ))}
            </div>
            <p className="mosaic__caption">
              <FiCamera aria-hidden="true" /> Our team at trade exhibitions
            </p>
          </Reveal>
        </div>
      </section>

      {/* ===== What we make ===== */}
      <section className="section section--soft about-range">
        <div className="container">
          <SectionHeading center eyebrow="What We Make" title="Our Product Range" />

          <div className="about-range__grid">
            {range.map((category, index) => (
              <Reveal key={category.slug} delay={index * 80} className="range-card card">
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
          <Reveal className="about-address__card card">
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
              <Link to="/contact" className="btn btn--orange">
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
