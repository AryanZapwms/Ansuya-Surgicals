import { useCallback, useSyncExternalStore } from "react";

/* =========================================================
   useMediaQuery — true while a CSS media query matches,
   e.g. useMediaQuery("(min-width: 768px)"). Updates when
   the window is resized across the breakpoint.
   ========================================================= */

function useMediaQuery(query) {
  const subscribe = useCallback(
    (onChange) => {
      const media = window.matchMedia(query);
      media.addEventListener("change", onChange);
      return () => media.removeEventListener("change", onChange);
    },
    [query]
  );

  return useSyncExternalStore(subscribe, () => window.matchMedia(query).matches);
}

export default useMediaQuery;
