import { useMemo, useState } from "react";
import { FiPackage } from "react-icons/fi";
import ProductCard from "./ProductCard";
import categories from "../data/categories";
import "./ProductListing.css";

/* =========================================================
   PRODUCT LISTING — reusable product grid with optional
   category filter tabs.
   Props:
   - products:     array of products to show
   - showFilters:  true to show the category tabs
   ========================================================= */

function ProductListing({ products, showFilters = false }) {
  const [activeCategory, setActiveCategory] = useState("all");

  const tabs = useMemo(
    () => [
      { slug: "all", name: "All", count: products.length },
      ...categories.map((category) => ({
        slug: category.slug,
        name: category.name,
        count: products.filter((p) => p.category.includes(category.slug)).length,
      })),
    ],
    [products]
  );

  const visibleProducts =
    activeCategory === "all"
      ? products
      : products.filter((product) => product.category.includes(activeCategory));

  return (
    <div className="product-listing">
      {showFilters && (
        <div className="filter-tabs" role="tablist" aria-label="Filter products by category">
          {tabs.map((tab) => (
            <button
              key={tab.slug}
              type="button"
              role="tab"
              aria-selected={activeCategory === tab.slug}
              className={`filter-tab ${activeCategory === tab.slug ? "is-active" : ""}`}
              onClick={() => setActiveCategory(tab.slug)}
            >
              {tab.name}
              <span className="filter-tab__count">{tab.count}</span>
            </button>
          ))}
        </div>
      )}

      <p className="product-listing__summary">
        Showing <strong>{visibleProducts.length}</strong>{" "}
        {visibleProducts.length === 1 ? "product" : "products"}
      </p>

      {visibleProducts.length > 0 ? (
        <div className="product-grid" key={activeCategory}>
          {visibleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="product-listing__empty">
          <FiPackage aria-hidden="true" />
          <h3>Products coming soon</h3>
          <p>We are updating this range. Please contact us for the latest product information.</p>
        </div>
      )}
    </div>
  );
}

export default ProductListing;
