import { useSearchParams } from "react-router-dom";
import PageHero from "../components/PageHero";
import ProductListing from "../components/ProductListing";
import CTASection from "../components/CTASection";
import products from "../data/products";
import categories from "../data/categories";
import { allBrands, brandFamily } from "../data/brands";
import siteConfig from "../config/siteConfig";
import "./Products.css";

/* Brand filter buttons: "All Brands" first, then every brand and sub-brand */
const brandOptions = [{ slug: "all", name: "All Brands" }, ...allBrands];

function Products() {
  // ?category=<slug> and ?brand=<slug> preselect the filters
  // (unknown slugs fall back to "All")
  const [searchParams, setSearchParams] = useSearchParams();
  const requestedCategory = searchParams.get("category");
  const activeCategory = categories.some((c) => c.slug === requestedCategory)
    ? requestedCategory
    : "all";
  const requestedBrand = searchParams.get("brand");
  const activeBrand = allBrands.some((b) => b.slug === requestedBrand) ? requestedBrand : "all";

  const brandProducts =
    activeBrand === "all"
      ? products
      : products.filter((product) => brandFamily(activeBrand).includes(product.brand));

  const handleCategoryChange = (slug) => {
    const next = new URLSearchParams(searchParams);
    if (slug === "all") next.delete("category");
    else next.set("category", slug);
    setSearchParams(next, { replace: true });
  };

  // A new brand starts from "All" categories, so it never opens on an empty one
  const handleBrandChange = (slug) => {
    const next = new URLSearchParams(searchParams);
    next.delete("category");
    if (slug === "all") next.delete("brand");
    else next.set("brand", slug);
    setSearchParams(next, { replace: true });
  };

  return (
    <>
      <title>{`Products | ${siteConfig.companyName}`}</title>

      <PageHero
        title="All Products"
        subtitle="Browse our complete range of medical and surgical dressing products. Use the filters to find exactly what you need."
        breadcrumbs={[{ label: "Home", path: "/" }, { label: "Products" }]}
      />

      <section className="section products-page">
        <div className="container">
          <div className="brand-filter" role="group" aria-label="Filter products by brand">
            {brandOptions.map((brand) => (
              <button
                key={brand.slug}
                type="button"
                aria-pressed={activeBrand === brand.slug}
                className={`brand-filter__chip brand-tone--${brand.slug} ${
                  activeBrand === brand.slug ? "is-active" : ""
                }`}
                onClick={() => handleBrandChange(brand.slug)}
              >
                {brand.name}
              </button>
            ))}
          </div>

          <ProductListing
            products={brandProducts}
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
