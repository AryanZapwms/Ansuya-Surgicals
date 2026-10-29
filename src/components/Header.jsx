import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FiPhone, FiMail, FiMenu, FiX } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa6";
import Logo from "./Logo";
import siteConfig, { getWhatsAppUrl } from "../config/siteConfig";
import "./Header.css";

/* =========================================================
   HEADER — one sticky white bar
   - Laptop / desktop (1024px and wider):
       logo · menu · phone number · Chat on WhatsApp
   - Mobile / tablet (below 1024px):
       logo · WhatsApp · hamburger → slide-in menu from the right
       (the phone number shows from 640px)
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
  const [menuPath, setMenuPath] = useState(location.pathname);

  // Close the mobile menu whenever the page changes
  if (menuPath !== location.pathname) {
    setMenuPath(location.pathname);
    setMobileOpen(false);
  }

  // Add a shadow to the header after scrolling a little
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
          </div>
        </nav>

        {/* Phone + WhatsApp (+ hamburger on mobile and tablet) */}
        <div className="header__actions">
          <a href={siteConfig.phoneLink} className="header__phone">
            <FiPhone aria-hidden="true" /> {siteConfig.phone}
          </a>
          <a
            href={getWhatsAppUrl()}
            className="header__whatsapp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp aria-hidden="true" />
            <span className="header__whatsapp-label">Chat on WhatsApp</span>
          </a>
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
      </div>
    </header>
  );
}

export default Header;
