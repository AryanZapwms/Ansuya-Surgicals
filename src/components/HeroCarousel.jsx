import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiChevronLeft,
  FiChevronRight,
  FiPause,
  FiPhone,
  FiPlay,
} from "react-icons/fi";
import siteConfig from "../config/siteConfig";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion";
import productRange from "../assets/images/home/hero-product-range.webp";
import cottonGauze from "../assets/images/home/hero-cotton-gauze.webp";
import "./HeroCarousel.css";

/* =========================================================
   HERO CAROUSEL — home page banner
   - Photos change behind a fixed text card every 5 seconds
   - Autoplay pauses while the pointer is over it, while it is
     touched, while a control has keyboard focus, or after the
     pause button; it never starts with reduced motion
   - Swipe left / right, dots, arrows and the keyboard arrow
     keys move between slides
   To change a photo: put a WebP (max 1600px wide) in
   src/assets/images/home/ and import it above.
   ========================================================= */

const AUTOPLAY_MS = 5000;
const SWIPE_PX = 50;

/* A slide with no image is the plain brand-blue slide */
const slides = [
  {
    image: productRange,
    width: 1200,
    height: 500,
    alt: "Ansuya, Clinisafe, Innova, Soft Pad and Elastogrip products on a table",
  },
  { image: cottonGauze, width: 1200, height: 500, alt: "Folded white cotton gauze" },
  { image: null },
];

function HeroCarousel() {
  const reducedMotion = usePrefersReducedMotion();
  const [active, setActive] = useState(0);
  const [userPaused, setUserPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [touching, setTouching] = useState(false);
  const [keyboardFocus, setKeyboardFocus] = useState(false);
  // Photos after the first load once the page has loaded, so they never
  // compete with the first photo
  const [pageLoaded, setPageLoaded] = useState(() => document.readyState === "complete");
  const touchStart = useRef(null);

  const playing = !reducedMotion && !userPaused && !hovered && !touching && !keyboardFocus;

  const goTo = (index) => {
    setPageLoaded(true);
    setActive((index + slides.length) % slides.length);
  };

  useEffect(() => {
    if (pageLoaded) return undefined;
    const onLoad = () => setPageLoaded(true);
    window.addEventListener("load", onLoad);
    return () => window.removeEventListener("load", onLoad);
  }, [pageLoaded]);

  // Restarts on every slide change, so a manual change gets a full 5 seconds
  useEffect(() => {
    if (!playing) return undefined;
    const timer = setTimeout(() => {
      setActive((current) => (current + 1) % slides.length);
    }, AUTOPLAY_MS);
    return () => clearTimeout(timer);
  }, [playing, active]);

  const onTouchStart = (event) => {
    const touch = event.touches[0];
    touchStart.current = { x: touch.clientX, y: touch.clientY };
    setTouching(true);
  };

  const onTouchEnd = (event) => {
    setTouching(false);
    if (!touchStart.current) return;
    const touch = event.changedTouches[0];
    const dx = touch.clientX - touchStart.current.x;
    const dy = touch.clientY - touchStart.current.y;
    touchStart.current = null;
    if (Math.abs(dx) > SWIPE_PX && Math.abs(dx) > Math.abs(dy)) {
      goTo(active + (dx < 0 ? 1 : -1));
    }
  };

  const onKeyDown = (event) => {
    if (event.key === "ArrowLeft") goTo(active - 1);
    if (event.key === "ArrowRight") goTo(active + 1);
  };

  // Only keyboard focus pauses; a mouse click on an arrow should not
  const onFocus = (event) => {
    if (event.target.matches(":focus-visible")) setKeyboardFocus(true);
  };

  const onBlur = (event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) setKeyboardFocus(false);
  };

  return (
    <section
      className="hero"
      aria-roledescription="carousel"
      aria-label="Product photos"
      onPointerEnter={(event) => event.pointerType === "mouse" && setHovered(true)}
      onPointerLeave={(event) => event.pointerType === "mouse" && setHovered(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      onTouchCancel={() => setTouching(false)}
      onKeyDown={onKeyDown}
      onFocus={onFocus}
      onBlur={onBlur}
    >
      <div className="hero__slides" aria-live={playing ? "off" : "polite"}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`hero__slide ${slide.image ? "" : "hero__slide--brand"} ${
              index === active ? "is-active" : ""
            }`}
            role="group"
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${slides.length}`}
            aria-hidden={index !== active}
          >
            {slide.image && (index === 0 || pageLoaded) && (
              <img
                src={slide.image}
                alt={slide.alt}
                className="hero__image"
                width={slide.width}
                height={slide.height}
                fetchPriority={index === 0 ? "high" : "low"}
                draggable={false}
              />
            )}
          </div>
        ))}
      </div>

      <div className="container hero__content">
        <div className="hero__card">
          <p className="hero__eyebrow">
            <span className="hero__eyebrow-dot" aria-hidden="true" />
            {siteConfig.companyName}
          </p>
          <h1 className="hero__title">Surgical Dressings &amp; Bandages</h1>
          <p className="hero__subline">
            Manufactured in Nalasopara, Maharashtra, and supplied across India
          </p>

          <div className="hero__actions">
            <Link to="/products" className="btn btn--orange">
              View Products <FiArrowRight aria-hidden="true" />
            </Link>
            <a href={siteConfig.phoneLink} className="btn btn--ghost-light">
              <FiPhone aria-hidden="true" /> Call Us
            </a>
          </div>

          <div className="hero__controls">
            <div className="hero__dots">
              {slides.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  className={`hero__dot ${index === active ? "is-active" : ""}`}
                  aria-label={`Show slide ${index + 1}`}
                  aria-current={index === active}
                  onClick={() => goTo(index)}
                />
              ))}
            </div>

            <div className="hero__arrows">
              {!reducedMotion && (
                <button
                  type="button"
                  className="hero__arrow"
                  aria-label={userPaused ? "Play slideshow" : "Pause slideshow"}
                  onClick={() => setUserPaused((paused) => !paused)}
                >
                  {userPaused ? <FiPlay aria-hidden="true" /> : <FiPause aria-hidden="true" />}
                </button>
              )}
              <button
                type="button"
                className="hero__arrow"
                aria-label="Previous slide"
                onClick={() => goTo(active - 1)}
              >
                <FiChevronLeft aria-hidden="true" />
              </button>
              <button
                type="button"
                className="hero__arrow"
                aria-label="Next slide"
                onClick={() => goTo(active + 1)}
              >
                <FiChevronRight aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroCarousel;
