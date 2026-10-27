import { Link, useLocation } from "react-router-dom";
import { FiArrowRight, FiCheck } from "react-icons/fi";
import PageHero from "../components/PageHero";
import ProductListing from "../components/ProductListing";
import Reveal from "../components/Reveal";
import CTASection from "../components/CTASection";
import NotFound from "./NotFound";
import categories from "../data/categories";
import products from "../data/products";
import "./CategoryPage.css";

/* =========================================================
   CATEGORY PAGE — one reusable page for:
   /bandages, /dressings, /absorbent-dressings,
   /medicated-dressing, /protective-equipment
   It reads the current URL and shows the matching category.
   ========================================================= */

function CategoryPage() {
  const { pathname } = useLocation();
  const category = categories.find((c) => c.path === pathname);

  if (!category) return <NotFound />;

  const categoryProducts = products.filter((p) => p.category.includes(category.slug));
  const otherCategories = categories.filter((c) => c.slug !== category.slug);

  return (
    <>
      <PageHero
        title={category.name}
        subtitle={category.shortDescription}
        image={category.image}
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Products", path: "/products" },
          { label: category.name },
        ]}
      />

      <section className="section category-intro">
        <div className="container category-intro__grid">
          <Reveal className="category-intro__text">
            <span className="eyebrow">Product Category</span>
            <h2>{category.name} Range</h2>
            <p>{category.description}</p>
            <ul className="category-intro__features">
              <li><FiCheck aria-hidden="true" /> Quality-checked materials</li>
              <li><FiCheck aria-hidden="true" /> Multiple sizes available</li>
              <li><FiCheck aria-hidden="true" /> Bulk supply on request</li>
            </ul>
          </Reveal>

          <Reveal delay={120} as="aside" className="category-intro__aside">
            <h3>Other Categories</h3>
            <ul>
              {otherCategories.map((other) => (
                <li key={other.slug}>
                  <Link to={other.path}>
                    {other.name} <FiArrowRight aria-hidden="true" />
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/products" className="category-intro__all">
                  View All Products <FiArrowRight aria-hidden="true" />
                </Link>
              </li>
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section section--soft category-products">
        <div className="container">
          <ProductListing products={categoryProducts} />
        </div>
      </section>

      <CTASection
        title={`Need ${category.name} in Bulk?`}
        text="Contact us for pricing, specifications and supply options for hospitals, clinics and distributors."
        buttonLabel="Request a Quote"
      />
    </>
  );
}

export default CategoryPage;
