import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FiArrowRight, FiCheck } from "react-icons/fi";
import PageHero from "../components/PageHero";
import ProductCard from "../components/ProductCard";
import SmartImage from "../components/SmartImage";
import Reveal from "../components/Reveal";
import CTASection from "../components/CTASection";
import NotFound from "./NotFound";
import products from "../data/products";
import categories from "../data/categories";
import { findBrand } from "../data/brands";
import siteConfig, { getProductEnquiryUrl } from "../config/siteConfig";
import "./ProductDetail.css";

/* =========================================================
   PRODUCT DETAIL PAGE
   Route: /products/:id
   Opened from every "Read More" button (home carousel and
   every product card on the Products / Category / Brand
   pages). Shows the product's main photo, cover photo and any
   extra gallery photos, full description and an Enquire Now
   call to action.
   ========================================================= */

function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => String(p.id) === id);

  // Gallery state must be declared before any early return (Rules of Hooks)
  const [activeIndex, setActiveIndex] = useState(0);
  const [galleryId, setGalleryId] = useState(id);

  // Back to the first photo when a different product opens
  if (galleryId !== id) {
    setGalleryId(id);
    setActiveIndex(0);
  }

  if (!product) return <NotFound />;

  const category = categories.find((c) => product.category.includes(c.slug));
  const brand = findBrand(product.brand);

  // Main photo first, then the cover photo, then any extra gallery photos
  const galleryImages = [
    { src: product.image, label: "Product Photo" },
    ...(product.hoverImage ? [{ src: product.hoverImage, label: "Cover Photo" }] : []),
    ...(product.gallery || []).map((src, i) => ({ src, label: `Photo ${i + 3}` })),
  ];
  const currentSrc = (galleryImages[activeIndex] || galleryImages[0]).src;

  const relatedProducts = products
    .filter((p) => p.id !== product.id && p.category.some((c) => product.category.includes(c)))
    .slice(0, 4);

  return (
    <>
      <title>{`${product.name} | ${siteConfig.companyName}`}</title>

      {/* ===== HERO / BREADCRUMB ===== */}
      <PageHero
        title={product.name}
        subtitle={category?.shortDescription}
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Products", path: "/products" },
          ...(category ? [{ label: category.name, path: category.path }] : []),
          { label: product.name },
        ]}
      />

      {/* ===== PRODUCT SHOWCASE ===== */}
      <section className="section product-detail">
        <div className="container product-detail__grid">
          {/* ---- Gallery: main photo + cover photo ---- */}
          <Reveal className="product-detail__gallery">
            <div className="product-detail__frame">
              {category && <span className="product-detail__badge">{category.name}</span>}
              <SmartImage
                src={currentSrc}
                alt={product.name}
                className="product-detail__image"
              />
            </div>

            <div className="product-detail__thumbs">
              {galleryImages.map((img, i) => (
                <button
                  key={img.src}
                  type="button"
                  className={`product-detail__thumb ${activeIndex === i ? "is-active" : ""}`}
                  onClick={() => setActiveIndex(i)}
                >
                  <SmartImage src={img.src} alt={`${product.name} — ${img.label.toLowerCase()}`} className="product-detail__thumb-img" />
                </button>
              ))}
            </div>
          </Reveal>

          {/* ---- Info panel ---- */}
          <Reveal delay={120} className="product-detail__info">
            {brand && (
              <span className={`brand-chip brand-tone--${brand.slug} product-detail__brand`}>
                {brand.name}
              </span>
            )}

            <h2 className="product-detail__title">{product.name}</h2>
            <p className="product-detail__desc">{product.description}</p>

            {product.sizes?.length > 0 && (
              <div className="product-detail__spec">
                <h3>Sizes</h3>
                <ul>
                  {product.sizes.map((size) => (
                    <li key={size}>{size}</li>
                  ))}
                </ul>
              </div>
            )}

            {product.details?.length > 0 && (
              <div className="product-detail__spec">
                <h3>Details</h3>
                <ul>
                  {product.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="product-detail__categories">
              {product.category.map((slug) => {
                const cat = categories.find((c) => c.slug === slug);
                if (!cat) return null;
                return (
                  <Link key={slug} to={cat.path} className="product-detail__chip">
                    {cat.name}
                  </Link>
                );
              })}
            </div>

            <div className="product-detail__actions">
              <a
                href={getProductEnquiryUrl(product.name)}
                className="btn btn--orange"
                target="_blank"
                rel="noopener noreferrer"
              >
                Enquire Now <FiArrowRight aria-hidden="true" />
              </a>
              <a href={siteConfig.phoneLink} className="btn btn--outline">
                Call Us
              </a>
            </div>

            <ul className="product-detail__assurance">
              <li><FiCheck aria-hidden="true" /> Bulk / institutional pricing on request</li>
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ===== RELATED PRODUCTS ===== */}
      {relatedProducts.length > 0 && (
        <section className="section section--soft product-detail__related">
          <div className="container">
            <div className="product-detail__related-head">
              <span className="eyebrow">You May Also Like</span>
              <h2>More From This Category</h2>
            </div>

            <div className="product-grid">
              {relatedProducts.map((related) => (
                <ProductCard key={related.id} product={related} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection
        title={`Interested in ${product.name}?`}
        text="Send us your quantity and specification requirements on WhatsApp and our team will get back to you shortly."
        buttonLabel="Enquire on WhatsApp"
        buttonLink={getProductEnquiryUrl(product.name)}
      />
    </>
  );
}

export default ProductDetail;
