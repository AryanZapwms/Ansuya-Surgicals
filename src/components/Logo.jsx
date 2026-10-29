import { Link } from "react-router-dom";
import siteConfig from "../config/siteConfig";
import logo from "../assets/images/ansuya-logo.webp";
import "./Logo.css";

/* =========================================================
   LOGO — one transparent WebP (7 KB, made from
   "ansuya cre logo.png")
   - Header (variant="dark", default): logo on the white header
   - Footer (variant="light"): logo on a white rounded card
   ========================================================= */

function Logo({ variant = "dark" }) {
  return (
    <Link
      to="/"
      className={`logo logo--${variant}`}
      aria-label={`${siteConfig.companyName} — Home`}
    >
      <img
        src={logo}
        alt={siteConfig.companyName}
        className="logo__image"
        width={349}
        height={232}
        loading={variant === "light" ? "lazy" : undefined}
      />
    </Link>
  );
}

export default Logo;
