import { Fragment } from "react";
import { Link } from "react-router-dom";
import { FiPhone, FiMail, FiFileText } from "react-icons/fi";
import Logo from "./Logo";
import siteConfig from "../config/siteConfig";
import "./Footer.css";

/* =========================================================
   FOOTER — four columns: logo + links · Corporate Office ·
   Factory · Contact (phones, email, GST)
   4 columns → 2 → 1. All details come from siteConfig.js.
   ========================================================= */

const quickLinks = [
  { label: "Home", path: "/" },
  { label: "Products", path: "/products" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          {/* Column 1 — Logo + quick links */}
          <div className="footer__col">
            <Logo variant="light" />
            <nav aria-label="Footer">
              <ul className="footer__links">
                {quickLinks.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Columns 2 and 3 — Corporate Office, Factory */}
          {siteConfig.addresses.map((address) => (
            <div key={address.label} className="footer__col">
              <h3 className="footer__title">{address.label}</h3>
              <address className="footer__address">
                {address.lines.map((line, index) => (
                  <Fragment key={line}>
                    {index > 0 && <br />}
                    {line}
                  </Fragment>
                ))}
              </address>
            </div>
          ))}

          {/* Column 4 — Phones, email, GST */}
          <div className="footer__col">
            <h3 className="footer__title">Contact</h3>
            <ul className="footer__contact">
              {siteConfig.phones.map((phone) => (
                <li key={phone.link}>
                  <FiPhone aria-hidden="true" />
                  <a href={phone.link}>{phone.display}</a>
                </li>
              ))}
              <li>
                <FiMail aria-hidden="true" />
                <a href={siteConfig.emailLink}>{siteConfig.email}</a>
              </li>
              <li>
                <FiFileText aria-hidden="true" />
                <span>
                  <strong>GST No.</strong> {siteConfig.gstNumber}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <p className="footer__bottom">
          © {siteConfig.copyrightYear} {siteConfig.companyName}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
