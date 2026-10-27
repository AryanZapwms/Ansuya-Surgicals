import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/* Scrolls the page back to the top every time the route changes */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}

export default ScrollToTop;
