import { useState } from "react";
import { FaBriefcaseMedical } from "react-icons/fa6";
import "./SmartImage.css";

/* =========================================================
   SMART IMAGE — a normal <img> that shows a clean branded
   placeholder if the image fails to load (e.g. no internet).

   Pass "hoverSrc" (a product's cover photo) to crossfade to
   that image whenever the pointer is over it — no layout
   shift, the cover image fills the same frame. The cover photo
   only downloads the first time the pointer reaches the image,
   so phones never download it.

   Pass "width" and "height" (the photo's real size) so the
   browser can reserve its space before it loads.
   ========================================================= */

function SmartImage({ src, hoverSrc, alt, className = "", width, height }) {
  const [failed, setFailed] = useState(false);
  const [hoverFailed, setHoverFailed] = useState(false);
  const [wantCover, setWantCover] = useState(false);
  const [coverReady, setCoverReady] = useState(false);

  if (failed || !src) {
    return (
      <div className={`smart-image-fallback ${className}`} role="img" aria-label={alt}>
        <FaBriefcaseMedical aria-hidden="true" />
      </div>
    );
  }

  if (hoverSrc && !hoverFailed) {
    return (
      <span
        className={`smart-image-swap ${coverReady ? "is-ready" : ""}`}
        onPointerEnter={() => setWantCover(true)}
      >
        <img
          src={src}
          alt={alt}
          className={`${className} smart-image-swap__base`}
          width={width}
          height={height}
          loading="lazy"
          onError={() => setFailed(true)}
        />
        {wantCover && (
          <img
            src={hoverSrc}
            alt=""
            aria-hidden="true"
            className={`${className} smart-image-swap__cover`}
            width={width}
            height={height}
            onLoad={() => setCoverReady(true)}
            onError={() => setHoverFailed(true)}
          />
        )}
      </span>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}

export default SmartImage;
