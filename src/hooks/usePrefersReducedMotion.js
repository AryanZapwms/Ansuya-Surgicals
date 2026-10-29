import { useSyncExternalStore } from "react";

/* =========================================================
   usePrefersReducedMotion — true when the visitor has asked
   their device for less motion. Carousels use it to stop
   autoplay and to scroll without animation.
   ========================================================= */

const QUERY = "(prefers-reduced-motion: reduce)";

function subscribe(onChange) {
  const media = window.matchMedia(QUERY);
  media.addEventListener("change", onChange);
  return () => media.removeEventListener("change", onChange);
}

function usePrefersReducedMotion() {
  return useSyncExternalStore(subscribe, () => window.matchMedia(QUERY).matches);
}

export default usePrefersReducedMotion;
