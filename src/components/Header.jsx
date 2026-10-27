import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  FiPhone,
  FiMail,
  FiChevronDown,
  FiChevronRight,
  FiMenu,
  FiX,
  FiArrowRight,
} from "react-icons/fi";
import Logo from "./Logo";
import siteConfig from "../config/siteConfig";
import brands from "../data/brands";
import "./Header.css";

/* =========================================================
   HEADER
   - Laptop / desktop (1024px and wider):
       Blue top bar: phone + email + hours + enquiry link
       Main bar:     logo on the left, full menu on the right (sticky)
                     "Dressings" and "Our Brands" open on hover,
                     Innova opens a side flyout
   - Mobile / tablet (below 1024px):
       Logo + hamburger button → slide-in menu from the right
   ========================================================= */

/* =========================================================
   MENU ORDER — change the order of the menu here.
   - Normal link:   { label: "...", path: "/..." }
   - Dropdown:      { label: "...", dropdown: "dressings" }  or  "brands"
   ========================================================= */
const navItems = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "All Products", path: "/products" },
  { label: "Bandages", path: "/bandages" },
  { label: "Dressings", path: "/dressings", dropdown: "dressings"  },
  { label: "Protective Equipment", path: "/protective-equipment" },
  { label: "Our Brands", dropdown: "brands" },
  { label: "Contact", path: "/contact" },
];

/* Links inside the "Dressings" dropdown */
const dressingLinks = [
 
  { label: "Absorbent Dressings", path: "/absorbent-dressings" },
  { label: "Medicated Dressing", path: "/medicated-dressing" },
];

function Header() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null); // which dropdown is open: "dressings", "brands" or null
  const [innovaOpen, setInnovaOpen] = useState(false); // nested submenu
  const [flyoutLeft, setFlyoutLeft] = useState(false); // open Innova submenu to the left if no room on the right
  const dropdownRef = useRef(null);

  // Add a shadow to the header after scrolling a little
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close all menus whenever the page changes
  useEffect(() => {
    setMobileOpen(false);
    setOpenMenu(null);
    setInnovaOpen(false);
  }, [location.pathname]);

  // Stop the page scrolling behind the open mobile menu
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Close menus with the Escape key, and close the mobile menu if the screen becomes wide
  useEffect(() => {
    const onKey = (event) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
        setOpenMenu(null);
        setInnovaOpen(false);
      }
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

  // Decide which side the Innova flyout should open on (right by default)
  const checkFlyoutSide = () => {
    if (!dropdownRef.current) return;
    const rect = dropdownRef.current.getBoundingClientRect();
    const flyoutWidth = 220;
    setFlyoutLeft(rect.right + flyoutWidth > window.innerWidth - 12);
  };

  const brandsActive = location.pathname.startsWith("/brands");
  const dressingsActive =
    location.pathname === "/dressings" ||
    dressingLinks.some((link) => link.path === location.pathname);

  // Open / close a dropdown when its button is clicked (used on mobile and keyboard)
  const toggleMenu = (name) => {
    if (name === "brands") checkFlyoutSide();
    setOpenMenu((current) => (current === name ? null : name));
  };

  const closeMenusOnLeave = () => {
    if (window.innerWidth >= 1024) {
      setOpenMenu(null);
      setInnovaOpen(false);
    }
  };

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
              {navItems.map((item) => {
                /* ---------- Dressings dropdown ---------- */
                if (item.dropdown === "dressings") {
                  return (
                    <li
                      key={item.label}
                      className={`nav__item nav__item--dropdown ${openMenu === "dressings" ? "is-open" : ""}`}
                      onMouseLeave={closeMenusOnLeave}
                    >
                      <div className={`nav__link nav__toggle ${dressingsActive ? "nav__link--active" : ""}`}>
                        <NavLink to={item.path} end>
                          {item.label}
                        </NavLink>
                        <button
                          type="button"
                          className="nav__chevron-btn"
                          aria-expanded={openMenu === "dressings"}
                          aria-haspopup="true"
                          aria-label={`Show ${item.label} submenu`}
                          onClick={() => toggleMenu("dressings")}
                        >
                          <FiChevronDown className="nav__chevron" aria-hidden="true" />
                        </button>
                      </div>

                      <ul className="dropdown">
                        {dressingLinks.map((link) => (
                          <li key={link.path} className="dropdown__item">
                            <NavLink to={link.path} className="dropdown__link">
                              {link.label}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    </li>
                  );
                }

                /* ---------- Our Brands dropdown ---------- */
                if (item.dropdown === "brands") {
                  return (
                    <li
                      key={item.label}
                      className={`nav__item nav__item--dropdown ${openMenu === "brands" ? "is-open" : ""}`}
                      onMouseEnter={checkFlyoutSide}
                      onMouseLeave={closeMenusOnLeave}
                    >
                      <button
                        type="button"
                        className={`nav__link nav__toggle ${brandsActive ? "nav__link--active" : ""}`}
                        aria-expanded={openMenu === "brands"}
                        aria-haspopup="true"
                        onClick={() => toggleMenu("brands")}
                      >
                        {item.label}
                        <FiChevronDown className="nav__chevron" aria-hidden="true" />
                      </button>

                      <ul ref={dropdownRef} className={`dropdown ${flyoutLeft ? "dropdown--flyout-left" : ""}`}>
                        {brands.map((brand) =>
                          brand.children ? (
                            <li
                              key={brand.slug}
                              className={`dropdown__item dropdown__item--has-sub ${innovaOpen ? "is-open" : ""}`}
                            >
                              <div className="dropdown__row">
                                <NavLink to={brand.path} end className="dropdown__link">
                                  {brand.name}
                                </NavLink>
                                <button
                                  type="button"
                                  className="dropdown__sub-toggle"
                                  aria-expanded={innovaOpen}
                                  aria-label={`Show ${brand.name} sub-brands`}
                                  onClick={() => setInnovaOpen((open) => !open)}
                                >
                                  <FiChevronRight aria-hidden="true" />
                                </button>
                              </div>

                              <ul className="submenu">
                                {brand.children.map((child) => (
                                  <li key={child.slug}>
                                    <NavLink to={child.path} className="dropdown__link dropdown__link--sub">
                                      {child.name}
                                    </NavLink>
                                  </li>
                                ))}
                              </ul>
                            </li>
                          ) : (
                            <li key={brand.slug} className="dropdown__item">
                              <NavLink to={brand.path} className="dropdown__link">
                                {brand.name}
                              </NavLink>
                            </li>
                          )
                        )}
                      </ul>
                    </li>
                  );
                }

                /* ---------- Normal link ---------- */
                return (
                  <li key={item.path} className="nav__item">
                    <NavLink to={item.path} end={item.path === "/"} className={navLinkClass}>
                      {item.label}
                    </NavLink>
                  </li>
                );
              })}
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