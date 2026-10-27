import PageHero from "../components/PageHero";
import ProductListing from "../components/ProductListing";
import CTASection from "../components/CTASection";
import products from "../data/products";
import images from "../data/images";
import "./Products.css";

function Products() {
  return (
    <>
      <PageHero
        title="All Products"
        subtitle="Browse our complete range of medical and surgical dressing products. Use the filters to find exactly what you need."
        image={images.productsBanner}
        breadcrumbs={[{ label: "Home", path: "/" }, { label: "Products" }]}
      />

      <section className="section products-page">
        <div className="container">
          <ProductListing products={products} showFilters />
        </div>
      </section>

      <CTASection
        title="Can't Find the Product You Need?"
        text="Our team can help with product specifications, custom sizes and bulk requirements. Send us an enquiry and we will get back to you."
        buttonLabel="Send an Enquiry"
      />
    </>
  );
}

export default Products;
