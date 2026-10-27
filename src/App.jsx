import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Contact from "./pages/Contact";
import CategoryPage from "./pages/CategoryPage";
import BrandPage from "./pages/BrandPage";
import NotFound from "./pages/NotFound";
import "./App.css";

/* =========================================================
   APP — Header and Footer appear on every page.
   Only the part inside <main> changes when you navigate.
   ========================================================= */

function App() {
  return (
    <div className="app">
      <ScrollToTop />
      <Header />

      <main className="app-main">
        <Routes>
          {/* Main pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/contact" element={<Contact />} />

          {/* Category pages (all use the same CategoryPage component) */}
          <Route path="/bandages" element={<CategoryPage />} />
          <Route path="/dressings" element={<CategoryPage />} />
          <Route path="/absorbent-dressings" element={<CategoryPage />} />
          <Route path="/medicated-dressing" element={<CategoryPage />} />
          <Route path="/protective-equipment" element={<CategoryPage />} />

          {/* Brand pages (all use the same BrandPage component) */}
          <Route path="/brands/ansuya" element={<BrandPage />} />
          <Route path="/brands/bactisafe" element={<BrandPage />} />
          <Route path="/brands/clinisafe" element={<BrandPage />} />
          <Route path="/brands/elastogrip" element={<BrandPage />} />
          <Route path="/brands/innova" element={<BrandPage />} />
          <Route path="/brands/innova/fix" element={<BrandPage />} />
          <Route path="/brands/innova/crepe" element={<BrandPage />} />
          <Route path="/brands/savior" element={<BrandPage />} />
          <Route path="/brands/soft-pad" element={<BrandPage />} />

          {/* Any other URL shows the 404 page */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
