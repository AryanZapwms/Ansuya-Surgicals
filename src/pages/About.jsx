import { Fragment } from "react";
import { Link } from "react-router-dom";
import { FiArrowRight, FiCamera, FiMapPin } from "react-icons/fi";
import { FaBoxesStacked, FaBuilding, FaIndustry } from "react-icons/fa6";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import CTASection from "../components/CTASection";
import siteConfig from "../config/siteConfig";
import { allBrands } from "../data/brands";
import categories from "../data/categories";
import products from "../data/products";
import indiaMap from "../assets/images/about/india-map.webp";
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

/* Factory photos are cropped to fit their tiles: the tall tiles show part of
   a portrait photo and the small ones part of a 2:1 photo, so each is drawn
   wider than its tile */
const TALL_SIZES =
  "(min-width: 1240px) 312px, (min-width: 992px) calc((100vw - 144px) / 3.55), (min-width: 560px) calc((100vw - 84px) / 1.78), calc(50vw - 25px)";
const CROPPED_SIZES =
  "(min-width: 1240px) 264px, (min-width: 992px) calc((100vw - 144px) / 4), (min-width: 560px) calc((100vw - 84px) / 2), calc(75vw - 37px)";
const CROPPED_WIDE_ON_PHONE_SIZES =
  "(min-width: 1240px) 264px, (min-width: 992px) calc((100vw - 144px) / 4), (min-width: 560px) calc((100vw - 84px) / 2), calc(100vw - 40px)";

const factoryPhotos = [
  { area: "a", sizes: TALL_SIZES, position: "35% center", ...photo("factory-packing-line", "A packaging machine wrapping Cotton Gamjee Roll packs", 800, 1066) },
  { area: "b", sizes: CROPPED_SIZES, position: "70% center", ...photo("factory-roll", "A roll of white material feeding into a machine", 800, 400) },
  { area: "c", sizes: CROPPED_SIZES, ...photo("factory-gauze-strips", "Strips of white gauze running through a machine", 800, 400) },
  { area: "d", sizes: CROPPED_WIDE_ON_PHONE_SIZES, ...photo("factory-packing-machine", "Gloved hands placing dressings on a packing machine", 800, 400) },
  { area: "e", sizes: TALL_SIZES, position: "30% center", ...photo("factory-pouch-line", "A worker at a machine running printed Bactisafe packaging film", 800, 1066) },
];

/* Manufacturing facts (from the About text and the home page) */
const factoryFacts = [
  { icon: FaIndustry, title: "Own facility", text: "Opened in 2010" },
  { icon: FiMapPin, title: "Nalasopara, Vasai", text: "Maharashtra" },
  { icon: FaBoxesStacked, title: "Bulk supply", text: "For hospitals and medical institutions" },
];

/* Where the regional representatives and channel partners are (from the old
   About page). The map image (india-map.webp) has these shaded blue, so it
   needs redrawing if this list changes. */
const partnerRegions = [
  "Maharashtra",
  "Andhra Pradesh",
  "Telangana",
  "Karnataka",
  "Delhi",
  "Punjab",
  "Uttar Pradesh",
  "Madhya Pradesh",
  "Rajasthan",
  "Kerala",
  "Tamil Nadu",
  "Gujarat",
  "West Bengal",
  "Goa",
  "Chhattisgarh",
];

/* Corporate office and factory icons, in the order of siteConfig.addresses */
const placeIcons = [FaBuilding, FaIndustry];

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

      {/* ===== Manufacturing + factory photos ===== */}
      <section className="section section--soft about-factory">
        <div className="container about-factory__grid">
          <Reveal className="about-factory__content">
            <span className="eyebrow">Manufacturing</span>
            <h2 className="about-title">Made at our own facility</h2>
            <p className="about-factory__lead">
              Surgical dressings and bandages are made at our own facility in Nalasopara, Vasai
              (Maharashtra), which opened in 2010.
            </p>

            <ul className="about-facts">
              {factoryFacts.map(({ icon: Icon, title, text }) => (
                <li key={title} className="about-fact card">
                  <span className="about-fact__icon" aria-hidden="true">
                    <Icon />
                  </span>
                  <span>
                    <strong>{title}</strong>
                    {text}
                  </span>
                </li>
              ))}
            </ul>

            <Link to="/products" className="btn btn--orange">
              View Products <FiArrowRight aria-hidden="true" />
            </Link>
          </Reveal>

          <Reveal delay={150} className="about-factory__media">
            <span className="about-factory__accent" aria-hidden="true" />
            <div className="mosaic mosaic--factory">
              {factoryPhotos.map((tile) => (
                <MosaicTile key={tile.name} photo={tile} />
              ))}
            </div>
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

      {/* ===== Locations and reach + map ===== */}
      <section className="section about-reach">
        <div className="container about-reach__grid">
          <Reveal className="about-reach__content">
            <span className="eyebrow">Where We Are</span>
            <h2 className="about-title">Locations and Reach</h2>
            <p className="about-reach__lead">
              Our corporate office is in Mumbai and our manufacturing facility is in Nalasopara,
              Vasai (Maharashtra). A network of regional representatives and channel partners
              serves customers across India.
            </p>

            <div className="about-places">
              {siteConfig.addresses.map(({ label, lines }, index) => {
                const Icon = placeIcons[index] ?? FiMapPin;
                return (
                  <div key={label} className="about-place card">
                    <span className="about-place__icon" aria-hidden="true">
                      <Icon />
                    </span>
                    <div>
                      <h3 className="about-place__label">{label}</h3>
                      <address className="about-place__lines">
                        {lines.map((line, lineIndex) => (
                          <Fragment key={line}>
                            {lineIndex > 0 && <br />}
                            {line}
                          </Fragment>
                        ))}
                      </address>
                    </div>
                  </div>
                );
              })}
            </div>

            <h3 className="about-reach__subtitle">Representatives and channel partners in</h3>
            <ul className="about-regions">
              {partnerRegions.map((region) => (
                <li key={region}>{region}</li>
              ))}
            </ul>

            <Link to="/contact" className="btn btn--orange">
              Contact Us <FiArrowRight aria-hidden="true" />
            </Link>
          </Reveal>

          <Reveal delay={150} className="about-reach__media">
            <figure className="india-map">
              <div className="india-map__frame">
                <div className="india-map__image">
                  <img
                    src={indiaMap}
                    alt="Map of India with the states listed here shaded blue"
                    width={810}
                    height={926}
                    loading="lazy"
                  />
                  {/* Corporate office (Mumbai) and factory (Nalasopara), as a
                      percentage of the map image */}
                  <span className="india-map__pin" style={{ left: "17.3%", top: "59.6%" }} />
                </div>
              </div>
              <figcaption className="india-map__legend">
                <span>
                  <span className="india-map__swatch" aria-hidden="true" /> Representatives and
                  channel partners
                </span>
                <span>
                  <span className="india-map__swatch india-map__swatch--pin" aria-hidden="true" />{" "}
                  Corporate office and factory
                </span>
              </figcaption>
            </figure>
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
