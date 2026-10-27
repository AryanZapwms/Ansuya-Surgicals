import { useCallback, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FiArrowRight, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import SmartImage from "./SmartImage";
import Reveal from "./Reveal";
import "./ProductCarousel.css";

const AUTO_SCROLL_DELAY = 3200;
const RESUME_DELAY = 2200;
const DRAG_CLICK_THRESHOLD = 6;

/* =========================================================
   PRODUCT CAROUSEL
   A single scrollable row of product cards (4 visible at a
   time on laptop). Advances to the right on its own, can be
   nudged with the arrow buttons, or dragged / swiped by hand.
   ========================================================= */

function ProductCarousel({ products }) {
  const trackRef = useRef(null);
  const leftBtnRef = useRef(null);
  const rightBtnRef = useRef(null);
  const pausedRef = useRef(false);
  const dragRef = useRef({ active: false, startX: 0, startScroll: 0, moved: 0 });
  const resumeTimerRef = useRef(null);

  const updateArrows = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    if (leftBtnRef.current) leftBtnRef.current.disabled = el.scrollLeft <= 8;
    if (rightBtnRef.current) rightBtnRef.current.disabled = max <= 8 || el.scrollLeft >= max - 8;
  }, []);

  const getStep = useCallback(() => {
    const el = trackRef.current;
    if (!el) return 0;
    const card = el.querySelector(".product-carousel__item");
    const gap = parseFloat(window.getComputedStyle(el).columnGap) || 24;
    return card ? card.getBoundingClientRect().width + gap : el.clientWidth * 0.8;
  }, []);

  const scrollByStep = useCallback(
    (direction) => {
      const el = trackRef.current;
      if (!el) return;
      el.scrollBy({ left: getStep() * direction, behavior: "smooth" });
    },
    [getStep]
  );

  const pause = () => {
    pausedRef.current = true;
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
  };

  const resumeSoon = () => {
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(() => {
      pausedRef.current = false;
    }, RESUME_DELAY);
  };

  // Auto-scroll to the right, looping back once the end is reached
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const tick = () => {
      if (pausedRef.current || dragRef.current.active) return;
      const max = el.scrollWidth - el.clientWidth;
      if (max <= 8) return;
      if (el.scrollLeft >= max - 8) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: getStep(), behavior: "smooth" });
      }
    };

    const interval = setInterval(tick, AUTO_SCROLL_DELAY);
    return () => clearInterval(interval);
  }, [getStep]);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    updateArrows();
    el.addEventListener("scroll", updateArrows, { passive: true });
    window.addEventListener("resize", updateArrows);
    return () => {
      el.removeEventListener("scroll", updateArrows);
      window.removeEventListener("resize", updateArrows);
    };
  }, [updateArrows]);

  useEffect(() => () => clearTimeout(resumeTimerRef.current), []);

  /* ---- Click-and-drag scrolling with the mouse ---- */
  const onPointerDown = (event) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    if (event.pointerType === "touch") return; // native touch scrolling handles this
    // Starting the pointer capture on a link/button would hijack its click
    // event (the browser retargets click to the capturing element), so the
    // "Read More" link would never navigate. Let it behave like a normal link.
    if (event.target.closest("a, button")) return;

    const el = trackRef.current;
    if (!el) return;
    dragRef.current = { active: true, startX: event.clientX, startScroll: el.scrollLeft, moved: 0 };
    el.setPointerCapture?.(event.pointerId);
    el.classList.add("is-dragging");
    pause();
  };

  const onPointerMove = (event) => {
    const drag = dragRef.current;
    if (!drag.active) return;
    const el = trackRef.current;
    if (!el) return;
    const delta = event.clientX - drag.startX;
    drag.moved = Math.max(drag.moved, Math.abs(delta));
    el.scrollLeft = drag.startScroll - delta;
  };

  const endDrag = (event) => {
    const drag = dragRef.current;
    if (!drag.active) return;
    const el = trackRef.current;
    el?.releasePointerCapture?.(event.pointerId);
    el?.classList.remove("is-dragging");
    dragRef.current.active = false;
    resumeSoon();
  };

  // Prevent a "Read More" link navigating away right after a drag
  const onTrackClickCapture = (event) => {
    if (dragRef.current.moved > DRAG_CLICK_THRESHOLD) {
      event.preventDefault();
      event.stopPropagation();
    }
    dragRef.current.moved = 0;
  };

  return (
    <div className="product-carousel" onMouseEnter={pause} onMouseLeave={resumeSoon}>
      <button
        ref={leftBtnRef}
        type="button"
        className="product-carousel__nav product-carousel__nav--left"
        onClick={() => scrollByStep(-1)}
        aria-label="Scroll products left"
      >
        <FiChevronLeft aria-hidden="true" />
      </button>

      <div
        className="product-carousel__track"
        ref={trackRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onClickCapture={onTrackClickCapture}
      >
        {products.map((product, index) => (
          <Reveal key={product.id} delay={Math.min(index, 4) * 70} className="product-carousel__item">
            <article className="product-carousel__card">
              <div className="product-carousel__media">
                <SmartImage
                  src={product.image}
                  hoverSrc={product.hoverImage}
                  alt={product.name}
                  className="product-carousel__image"
                />
              </div>
              <div className="product-carousel__row">
                <h3 className="product-carousel__title">{product.name}</h3>
                <Link
                  to={`/products/${product.id}`}
                  className="product-carousel__btn"
                  draggable={false}
                >
                  Read More <FiArrowRight aria-hidden="true" />
                </Link>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <button
        ref={rightBtnRef}
        type="button"
        className="product-carousel__nav product-carousel__nav--right"
        onClick={() => scrollByStep(1)}
        aria-label="Scroll products right"
      >
        <FiChevronRight aria-hidden="true" />
      </button>
    </div>
  );
}

export default ProductCarousel;
