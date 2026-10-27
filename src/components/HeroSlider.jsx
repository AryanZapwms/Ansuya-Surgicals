import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FiChevronLeft, FiChevronRight, FiArrowRight } from "react-icons/fi";
import heroSlides from "../data/heroSlides";
import "./HeroSlider.css";

const AUTOPLAY_DELAY = 6000; // milliseconds between slides

function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef(null);
  const total = heroSlides.length;

  const goTo = useCallback((index) => setCurrent((index + total) % total), [total]);
  const next = useCallback(() => setCurrent((i) => (i + 1) % total), [total]);
  const prev = useCallback(() => setCurrent((i) => (i - 1 + total) % total), [total]);

  // Autoplay (restarts whenever the slide changes)
  useEffect(() => {
    if (paused) return;
    const timer = setTimeout(next, AUTOPLAY_DELAY);
    return () => clearTimeout(timer);
  }, [current, paused, next]);

  // Swipe support for phones
  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event) => {
    if (touchStartX.current === null) return;
    const distance = event.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(distance) > 50) {
      if (distance < 0) next();
      else prev();
    }
    touchStartX.current = null;
  };

  return (
    <section
      className={`hero-slider ${paused ? "is-paused" : ""}`}
      aria-roledescription="carousel"
      aria-label="Featured highlights"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {heroSlides.map((slide, index) => {
        const isActive = index === current;
        return (
          <div
            key={slide.id}
            className={`hero-slide ${isActive ? "is-active" : ""}`}
            role="group"
            aria-roledescription="slide"
            aria-label={`Slide ${index + 1} of ${total}`}
            aria-hidden={!isActive}
          >
            <img
              className="hero-slide__image"
              src={slide.image}
              alt={slide.alt}
              loading={index === 0 ? "eager" : "lazy"}
            />
            <div className="hero-slide__overlay" />

            <div className="container hero-slide__content">
              <span className="hero-slide__eyebrow">{slide.eyebrow}</span>
              <h1 className="hero-slide__title">{slide.title}</h1>
              <p className="hero-slide__text">{slide.description}</p>
              <div className="hero-slide__actions">
                <Link
                  to={slide.primaryButton.link}
                  className="btn btn--primary"
                  tabIndex={isActive ? 0 : -1}
                >
                  {slide.primaryButton.label} <FiArrowRight aria-hidden="true" />
                </Link>
                {slide.secondaryButton && (
                  <Link
                    to={slide.secondaryButton.link}
                    className="btn btn--ghost-light"
                    tabIndex={isActive ? 0 : -1}
                  >
                    {slide.secondaryButton.label}
                  </Link>
                )}
              </div>
            </div>
          </div>
        );
      })}

      {/* Previous / Next arrows */}
      <div className="hero-slider__arrows">
        <button type="button" className="hero-slider__arrow" onClick={prev} aria-label="Previous slide">
          <FiChevronLeft />
        </button>
        <button type="button" className="hero-slider__arrow" onClick={next} aria-label="Next slide">
          <FiChevronRight />
        </button>
      </div>

      {/* Dots + slide counter */}
      <div className="hero-slider__bottom">
        <div className="container hero-slider__bottom-inner">
          <div className="hero-slider__dots">
            {heroSlides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                className={`hero-slider__dot ${index === current ? "is-active" : ""}`}
                onClick={() => goTo(index)}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={index === current}
              >
                <span
                  key={index === current ? `active-${current}` : "idle"}
                  className="hero-slider__dot-fill"
                  style={{ animationDuration: `${AUTOPLAY_DELAY}ms` }}
                />
              </button>
            ))}
          </div>
          <span className="hero-slider__count">
            <strong>{String(current + 1).padStart(2, "0")}</strong> / {String(total).padStart(2, "0")}
          </span>
        </div>
      </div>
    </section>
  );
}

export default HeroSlider;
