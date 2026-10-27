import { useSearchParams } from "react-router-dom";
import PageHero from "../components/PageHero";
import ProductListing from "../components/ProductListing";
import CTASection from "../components/CTASection";
import products from "../data/products";
import categories from "../data/categories";
import images from "../data/images";
import siteConfig from "../config/siteConfig";
import "./Products.css";

function Products() {
  // ?category=<slug> preselects a filter tab (unknown slugs fall back to "All")
  const [searchParams, setSearchParams] = useSearchParams();
  const requested = searchParams.get("category");
  const activeCategory = categories.some((c) => c.slug === requested) ? requested : "all";

  const handleCategoryChange = (slug) => {
    setSearchParams(slug === "all" ? {} : { category: slug }, { replace: true });
  };

  return (
    <>
      <title>{`Products | ${siteConfig.companyName}`}</title>

      <PageHero
        title="All Products"
        subtitle="Browse our complete range of medical and surgical dressing products. Use the filters to find exactly what you need."
        image={images.productsBanner}
        breadcrumbs={[{ label: "Home", path: "/" }, { label: "Products" }]}
      />

      <section className="section products-page">
        <div className="container">
          <ProductListing
            products={products}
            showFilters
            activeCategory={activeCategory}
            onCategoryChange={handleCategoryChange}
          />
        </div>
      </section>

      <CTASection
        title="Can't Find the Product You Need?"
        text="Our team can help with product specifications and bulk requirements. Contact us and we will get back to you."
        buttonLabel="Contact Us"
      />
    </>
  );
}

export default Products;
