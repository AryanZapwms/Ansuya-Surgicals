import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import SmartImage from "./SmartImage";
import categories from "../data/categories";
import { getProductEnquiryUrl } from "../config/siteConfig";
import "./ProductCard.css";

/* =========================================================
   PRODUCT CARD — used on All Products, Category and Brand pages
   ========================================================= */

function ProductCard({ product }) {
  const category = categories.find((c) => product.category.includes(c.slug));

  return (
    <article className="product-card">
      <div className="product-card__media">
        {/* Every product photo is square (600 × 600 or 1000 × 1000) */}
        <SmartImage
          src={product.image}
          hoverSrc={product.hoverImage}
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
            Read More
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
