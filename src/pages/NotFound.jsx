import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import "./NotFound.css";

/* Shown when someone opens a URL that doesn't exist */
function NotFound() {
  return (
    <section className="not-found">
      <div className="container not-found__inner">
        <span className="not-found__code">404</span>
        <h1>Page Not Found</h1>
        <p>Sorry, the page you are looking for doesn't exist or has been moved.</p>
        <div className="not-found__actions">
          <Link to="/" className="btn btn--primary">
            <FiArrowLeft aria-hidden="true" /> Back to Home
          </Link>
          <Link to="/products" className="btn btn--outline">
            View Products
          </Link>
        </div>
      </div>
    </section>
  );
}

export default NotFound;
