import { Link } from "react-router-dom";
import siteConfig from "../config/siteConfig";
import logoPng from "../assets/images/ansuya cre logo.png";
import logoJpg from "../assets/images/ansuya cre logo.jpg";
import "./Logo.css";

/* =========================================================
   LOGO
   - Header (variant="dark", default): PNG logo (transparent background)
   - Footer (variant="light"): JPG logo
   ========================================================= */

function Logo({ variant = "dark" }) {
  const logoSrc = variant === "light" ? logoJpg : logoPng;

  return (
    <Link
      to="/"
      className={`logo logo--${variant}`}
      aria-label={`${siteConfig.companyName} — Home`}
    >
      <img
        src={logoSrc}
        alt={siteConfig.companyName}
        className="logo__image"
        width={350}
        height={233}
      />
    </Link>
  );
}

export default Logo;
