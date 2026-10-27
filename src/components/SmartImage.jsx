import { useState } from "react";
import { FaBriefcaseMedical } from "react-icons/fa6";
import "./SmartImage.css";

/* =========================================================
   SMART IMAGE — a normal <img> that shows a clean branded
   placeholder if the image fails to load (e.g. no internet).

   Pass "hoverSrc" (a product's cover photo) to crossfade to
   that image whenever the pointer is over it — no layout
   shift, the cover image fills the same frame.
   ========================================================= */

function SmartImage({ src, hoverSrc, alt, className = "" }) {
  const [failed, setFailed] = useState(false);
  const [hoverFailed, setHoverFailed] = useState(false);

  if (failed || !src) {
    return (
      <div className={`smart-image-fallback ${className}`} role="img" aria-label={alt}>
        <FaBriefcaseMedical aria-hidden="true" />
      </div>
    );
  }

  if (hoverSrc && !hoverFailed) {
    return (
      <span className="smart-image-swap">
        <img
          src={src}
          alt={alt}
          className={`${className} smart-image-swap__base`}
          loading="lazy"
          onError={() => setFailed(true)}
        />
        <img
          src={hoverSrc}
          alt=""
          aria-hidden="true"
          className={`${className} smart-image-swap__cover`}
          loading="lazy"
          onError={() => setHoverFailed(true)}
        />
      </span>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}

export default SmartImage;
