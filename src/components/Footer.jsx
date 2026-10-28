import { Fragment } from "react";
import { Link } from "react-router-dom";
import { FiPhone, FiMail, FiMapPin, FiChevronRight, FiFileText } from "react-icons/fi";
import Logo from "./Logo";
import siteConfig from "../config/siteConfig";
import "./Footer.css";

const quickLinks = [
  { label: "Home", path: "/" },
  { label: "Products", path: "/products" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
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
        </div>

        {/* Column 2 — Quick links */}
        <div className="footer__col">
          <h3 className="footer__title">Quick Links</h3>
          <ul className="footer__links">
            {quickLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path}>
                  <FiChevronRight aria-hidden="true" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 — Contact */}
        <div className="footer__col">
          <h3 className="footer__title">Contact</h3>
          <ul className="footer__contact">
            <li>
              <span className="footer__icon"><FiPhone aria-hidden="true" /></span>
              <div>
                <small>Phone</small>
                {siteConfig.phones.map((phone, index) => (
                  <Fragment key={phone.link}>
                    {index > 0 && <br />}
                    <a href={phone.link}>{phone.display}</a>
                  </Fragment>
                ))}
              </div>
            </li>
            <li>
              <span className="footer__icon"><FiMail aria-hidden="true" /></span>
              <div>
                <small>Email</small>
                <a href={siteConfig.emailLink}>{siteConfig.email}</a>
              </div>
            </li>
            {siteConfig.addresses.map((address) => (
              <li key={address.label}>
                <span className="footer__icon"><FiMapPin aria-hidden="true" /></span>
                <div>
                  <small>{address.label}</small>
                  <span>{address.lines.join(" ")}</span>
                </div>
              </li>
            ))}
            <li>
              <span className="footer__icon"><FiFileText aria-hidden="true" /></span>
              <div>
                <small>GST No.</small>
                <span>{siteConfig.gstNumber}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>
            © {siteConfig.copyrightYear} {siteConfig.companyName} All Rights Reserved.
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
