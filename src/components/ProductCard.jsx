import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import SmartImage from "./SmartImage";
import categories from "../data/categories";
import { getProductEnquiryUrl } from "../config/siteConfig";
import "./ProductCard.css";

/* =========================================================
   PRODUCT CARD — used on the Home, Products and product pages
   ========================================================= */

/* How wide the card photo is drawn in the product grid
   (4 columns → 3 → 2 → 1, see ProductCard.css), so the browser
   can choose the 300px copy or the full-size photo */
const CARD_IMAGE_SIZES =
  "(min-width: 1200px) 252px, (min-width: 900px) calc(33vw - 61px), (min-width: 560px) calc(50vw - 62px), calc(100vw - 64px)";

/* "300px copy, full photo" — originals are 600px wide or more */
const srcSetFor = (thumb, full) => (thumb ? `${thumb} 300w, ${full} 600w` : undefined);

function ProductCard({ product }) {
  const category = categories.find((c) => product.category.includes(c.slug));

  return (
    <article className="product-card">
      <div className="product-card__media">
        {/* Every product photo is square (600 × 600 or 1000 × 1000) */}
        <SmartImage
          src={product.image}
          srcSet={srcSetFor(product.thumb, product.image)}
          hoverSrc={product.hoverImage}
          hoverSrcSet={srcSetFor(product.hoverThumb, product.hoverImage)}
          sizes={CARD_IMAGE_SIZES}
          alt={product.name}
          className="product-card__image"
          width={600}
          height={600}
        />
        {category && <span className="product-card__badge">{category.name}</span>}
      </div>

      <div className="product-card__body">
        <h3 className="product-card__title">{product.name}</h3>
        <p className="product-card__desc">{product.description}</p>

        <div className="product-card__actions">
          <Link to={`/products/${product.id}`} className="product-card__btn product-card__btn--ghost">
            Read More<span className="visually-hidden"> about {product.name}</span>
          </Link>
          <a
            href={getProductEnquiryUrl(product.name)}
            className="product-card__btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Enquire Now <FiArrowRight aria-hidden="true" />
          </a>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
