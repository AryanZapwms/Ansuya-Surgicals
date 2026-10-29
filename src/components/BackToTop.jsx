import { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion";
import "./BackToTop.css";

/* =========================================================
   BACK TO TOP — round button at the bottom right, shown once
   the page has scrolled down a little
   ========================================================= */

const SHOW_AFTER_PX = 600;

function BackToTop() {
  const [visible, setVisible] = useState(false);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SHOW_AFTER_PX);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: reducedMotion ? "instant" : "smooth" });
    // Keyboard users carry on from the top of the page
    document.querySelector(".header .logo")?.focus({ preventScroll: true });
  };

  return (
    <button
      type="button"
      className={`back-to-top ${visible ? "is-visible" : ""}`}
      aria-label="Back to top"
      onClick={scrollToTop}
    >
      <FiArrowUp aria-hidden="true" />
    </button>
  );
}

export default BackToTop;
