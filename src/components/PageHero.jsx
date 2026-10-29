import { Link } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";
import "./PageHero.css";

/* =========================================================
   PAGE HERO — royal-blue banner at the top of inner pages,
   with the faded ANSUYA lettering and a slanted bottom edge
   (same look as the band on the home page)
   Props:
   - title:       big heading
   - subtitle:    optional short text
   - breadcrumbs: [{ label: "Home", path: "/" }, { label: "About Us" }]
                  (the last item has no path = current page)
   ========================================================= */

function PageHero({ title, subtitle, breadcrumbs = [] }) {
  return (
    <section className="page-hero">
      <span className="band-watermark" aria-hidden="true">ANSUYA</span>

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
