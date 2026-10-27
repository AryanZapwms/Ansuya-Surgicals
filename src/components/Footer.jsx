import { Link } from "react-router-dom";
import { FiPhone, FiMail, FiMapPin, FiClock, FiChevronRight } from "react-icons/fi";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaXTwitter } from "react-icons/fa6";
import Logo from "./Logo";
import siteConfig from "../config/siteConfig";
import "./Footer.css";

const productLinks = [
  { label: "Bandages", path: "/bandages" },
  { label: "Dressings", path: "/dressings" },
  { label: "Absorbent Dressings", path: "/absorbent-dressings" },
  { label: "Medicated Dressing", path: "/medicated-dressing" },
  { label: "Protective Equipment", path: "/protective-equipment" },
  { label: "All Products", path: "/products" },
];

/* Placeholder client categories — replace with real clients later */
const clients = [
  "Hospitals",
  "Clinics",
  "Nursing Homes",
  "Healthcare Institutions",
  "Medical Distributors",
  "Pharmacies",
];

const socialLinks = [
  { label: "Facebook", url: siteConfig.social.facebook, icon: <FaFacebookF /> },
  { label: "LinkedIn", url: siteConfig.social.linkedin, icon: <FaLinkedinIn /> },
  { label: "Instagram", url: siteConfig.social.instagram, icon: <FaInstagram /> },
  { label: "X (Twitter)", url: siteConfig.social.twitter, icon: <FaXTwitter /> },
];

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__glow" aria-hidden="true" />

      <div className="container footer__grid">
        {/* Column 1 — Logo + description */}
        <div className="footer__col footer__col--brand">
          <Logo variant="light" />
          <p className="footer__desc">{siteConfig.footerDescription}</p>
          <ul className="footer__social">
            {socialLinks.map((social) => (
              <li key={social.label}>
                <a
                  href={social.url}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 2 — Products */}
        <div className="footer__col">
          <h3 className="footer__title">Products</h3>
          <ul className="footer__links">
            {productLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path}>
                  <FiChevronRight aria-hidden="true" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 — Our Clients */}
        <div className="footer__col">
          <h3 className="footer__title">Our Clients</h3>
          <ul className="footer__links footer__links--static">
            {clients.map((client) => (
              <li key={client}>
                <span>
                  <FiChevronRight aria-hidden="true" />
                  {client}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4 — Contact */}
        <div className="footer__col">
          <h3 className="footer__title">Contact</h3>
          <ul className="footer__contact">
            <li>
              <span className="footer__icon"><FiPhone aria-hidden="true" /></span>
              <div>
                <small>Phone</small>
                <a href={siteConfig.phoneLink}>{siteConfig.phone}</a>
              </div>
            </li>
            <li>
              <span className="footer__icon"><FiMail aria-hidden="true" /></span>
              <div>
                <small>Email</small>
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              </div>
            </li>
            <li>
              <span className="footer__icon"><FiMapPin aria-hidden="true" /></span>
              <div>
                <small>Address</small>
                <span>{siteConfig.address}</span>
              </div>
            </li>
            <li>
              <span className="footer__icon"><FiClock aria-hidden="true" /></span>
              <div>
                <small>Business Hours</small>
                <span>{siteConfig.businessHours}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>
            © {siteConfig.copyrightYear} {siteConfig.companyName}. All Rights Reserved.
          </p>
          <div className="footer__bottom-links">
            <Link to="/about">About Us</Link>
            <Link to="/products">Products</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
