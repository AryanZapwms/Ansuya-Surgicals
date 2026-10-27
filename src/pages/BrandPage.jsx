import { Link, useLocation } from "react-router-dom";
import { FiArrowRight, FiCheck, FiArrowLeft } from "react-icons/fi";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import ProductListing from "../components/ProductListing";
import Reveal from "../components/Reveal";
import CTASection from "../components/CTASection";
import NotFound from "./NotFound";
import brands, { findBrandByPath } from "../data/brands";
import products from "../data/products";
import images from "../data/images";
import "./BrandPage.css";

/* =========================================================
   BRAND PAGE — one reusable page for every brand:
   /brands/ansuya, /brands/innova, /brands/innova/fix, etc.
   It reads the current URL and shows the matching brand.
   ========================================================= */

function BrandPage() {
  const { pathname } = useLocation();
  const { brand, parent } = findBrandByPath(pathname);

  if (!brand) return <NotFound />;

  const brandProducts = products.filter((p) => brand.productBrands.includes(p.brand));
  const otherBrands = brands.filter((b) => b.slug !== brand.slug && b.slug !== parent?.slug);

  const breadcrumbs = [
    { label: "Home", path: "/" },
    { label: "Our Brands" },
    ...(parent ? [{ label: parent.name, path: parent.path }] : []),
    { label: brand.name },
  ];

  return (
    <>
      <PageHero
        title={brand.name}
        subtitle={brand.tagline}
        image={images.brandBanner}
        breadcrumbs={breadcrumbs}
      />

      {/* ===== Brand introduction ===== */}
      <section className="section brand-intro">
        <div className="container brand-intro__grid" style={{ "--brand-color": brand.color }}>
          <Reveal className="brand-intro__logo-wrap">
            {/* Placeholder brand logo — replace with an <img> of the real logo later */}
            <div className="brand-logo">
              <span className="brand-logo__mark" aria-hidden="true">{brand.name.charAt(0)}</span>
              <span className="brand-logo__name">{brand.name}</span>
              <span className="brand-logo__tagline">{brand.tagline}</span>
            </div>
          </Reveal>

          <Reveal delay={150} className="brand-intro__content">
            {parent && (
              <Link to={parent.path} className="brand-intro__parent">
                <FiArrowLeft aria-hidden="true" /> Part of the {parent.name} family
              </Link>
            )}
            <span className="eyebrow">About the Brand</span>
            <h2>{brand.name}</h2>
            <p>{brand.description}</p>

            <ul className="brand-intro__highlights">
              {brand.highlights.map((highlight) => (
                <li key={highlight}>
                  <FiCheck aria-hidden="true" /> {highlight}
                </li>
              ))}
            </ul>

            {/* Sub-brands (shown on the Innova page) */}
            {brand.children && (
              <div className="sub-brands">
                {brand.children.map((child) => (
                  <Link key={child.slug} to={child.path} className="sub-brand">
                    <span>
                      <strong>{child.name}</strong>
                      <small>{child.tagline}</small>
                    </span>
                    <FiArrowRight aria-hidden="true" />
                  </Link>
                ))}
              </div>
            )}
          </Reveal>
        </div>
      </section>

      {/* ===== Product showcase ===== */}
      <section className="section section--soft brand-products">
        <div className="container">
          <SectionHeading
            center
            eyebrow={`${brand.name} Products`}
            title="Product Showcase"
            text={`Explore products available under the ${brand.name} brand.`}
          />
          <ProductListing products={brandProducts} />
        </div>
      </section>

      {/* ===== Other brands ===== */}
      <section className="section brand-others">
        <div className="container">
          <SectionHeading eyebrow="Explore More" title="Our Other Brands" />
          <div className="brand-others__list">
            {otherBrands.map((other) => (
              <Link
                key={other.slug}
                to={other.path}
                className="brand-chip"
                style={{ "--brand-color": other.color }}
              >
                <span className="brand-chip__mark" aria-hidden="true">{other.name.charAt(0)}</span>
                {other.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={`Interested in ${brand.name} Products?`}
        text="Get in touch for product details, pricing and supply options. Our team will be glad to help."
        buttonLabel="Enquire Now"
      />
    </>
  );
}

export default BrandPage;
