import { Fragment } from "react";
import { Link } from "react-router-dom";
import { FiPhone, FiMail, FiMapPin, FiClock, FiChevronRight, FiFileText } from "react-icons/fi";
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
            <li>
              <span className="footer__icon"><FiMapPin aria-hidden="true" /></span>
              <div>
                <small>Address</small>
                <span>
                  {siteConfig.addressLines.map((line, index) => (
                    <Fragment key={line}>
                      {index > 0 && <br />}
                      {line}
                    </Fragment>
                  ))}
                </span>
              </div>
            </li>
            <li>
              <span className="footer__icon"><FiFileText aria-hidden="true" /></span>
              <div>
                <small>GST No.</small>
                <span>{siteConfig.gstNumber}</span>
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
