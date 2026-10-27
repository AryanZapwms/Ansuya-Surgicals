import { Link } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";
import "./PageHero.css";

/* =========================================================
   PAGE HERO — banner at the top of inner pages
   Props:
   - title:       big heading
   - subtitle:    optional short text
   - image:       background image
   - breadcrumbs: [{ label: "Home", path: "/" }, { label: "About Us" }]
                  (the last item has no path = current page)
   ========================================================= */

function PageHero({ title, subtitle, image, breadcrumbs = [] }) {
  return (
    <section className="page-hero">
      {image && <img className="page-hero__image" src={image} alt="" aria-hidden="true" />}
      <div className="page-hero__overlay" />
      <div className="page-hero__pattern" aria-hidden="true" />

      <div className="container page-hero__content">
        <nav aria-label="Breadcrumb">
          <ol className="breadcrumb">
            {breadcrumbs.map((crumb, index) => {
              const isLast = index === breadcrumbs.length - 1;
              return (
                <li key={crumb.label} className="breadcrumb__item">
                  {crumb.path && !isLast ? (
                    <Link to={crumb.path}>{crumb.label}</Link>
                  ) : (
                    <span aria-current={isLast ? "page" : undefined}>{crumb.label}</span>
                  )}
                  {!isLast && <FiChevronRight className="breadcrumb__sep" aria-hidden="true" />}
                </li>
              );
            })}
          </ol>
        </nav>

        <h1 className="page-hero__title">{title}</h1>
        {subtitle && <p className="page-hero__subtitle">{subtitle}</p>}
      </div>
    </section>
  );
}

export default PageHero;
