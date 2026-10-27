import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FiPhone, FiMail, FiMenu, FiX, FiArrowRight } from "react-icons/fi";
import Logo from "./Logo";
import siteConfig from "../config/siteConfig";
import "./Header.css";

/* =========================================================
   HEADER
   - Laptop / desktop (1024px and wider):
       Blue top bar: phone + email + enquiry link
       Main bar:     logo on the left, menu on the right (sticky)
   - Mobile / tablet (below 1024px):
       Logo + hamburger button → slide-in menu from the right
   ========================================================= */

/* MENU ORDER — change the order of the menu here */
const navItems = [
  { label: "Home", path: "/" },
  { label: "Products", path: "/products" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

function Header() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Add a shadow to the header after scrolling a little
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu whenever the page changes
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Stop the page scrolling behind the open mobile menu
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Close the mobile menu with the Escape key, or if the screen becomes wide
  useEffect(() => {
    const onKey = (event) => {
      if (event.key === "Escape") setMobileOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const navLinkClass = ({ isActive }) =>
    `nav__link ${isActive ? "nav__link--active" : ""}`;

  return (
    <>
      {/* ---------- Blue top bar with contact details (laptop/desktop only) ---------- */}
      <div className="topbar">
        <div className="container topbar__inner">
          <div className="topbar__info">
            <a href={siteConfig.phoneLink} className="topbar__item">
              <FiPhone aria-hidden="true" /> {siteConfig.phone}
            </a>
            <a href={siteConfig.emailLink} className="topbar__item">
              <FiMail aria-hidden="true" /> {siteConfig.email}
            </a>
          </div>
          <Link to="/contact" className="topbar__cta">
            Send an Enquiry <FiArrowRight aria-hidden="true" />
          </Link>
        </div>
      </div>

      {/* ---------- Main header: logo + menu in one row ---------- */}
      <header className={`header ${isScrolled ? "header--scrolled" : ""}`}>
        <div className="container header__inner">
          <Logo />

          {/* Dark overlay behind the mobile menu */}
          <div
            className={`nav-overlay ${mobileOpen ? "nav-overlay--visible" : ""}`}
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />

          <nav
            id="main-navigation"
            className={`nav ${mobileOpen ? "nav--open" : ""}`}
            aria-label="Main navigation"
          >
            {/* Mobile menu top bar */}
            <div className="nav__mobile-head">
              <Logo />
              <button
                type="button"
                className="nav__close"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
              >
                <FiX />
              </button>
            </div>

            <ul className="nav__list">
              {navItems.map((item) => (
                <li key={item.path} className="nav__item">
                  <NavLink to={item.path} end={item.path === "/"} className={navLinkClass}>
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Contact block at the bottom of the mobile menu */}
            <div className="nav__mobile-contact">
              <a href={siteConfig.phoneLink}>
                <FiPhone aria-hidden="true" /> {siteConfig.phone}
              </a>
              <a href={siteConfig.emailLink}>
                <FiMail aria-hidden="true" /> {siteConfig.email}
              </a>
              <Link to="/contact" className="btn btn--primary">
                Send an Enquiry
              </Link>
            </div>
          </nav>

          {/* Hamburger button (mobile & tablet only) */}
          <button
            type="button"
            className="hamburger"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            aria-controls="main-navigation"
          >
            <FiMenu />
          </button>
        </div>
      </header>
    </>
  );
}

export default Header;