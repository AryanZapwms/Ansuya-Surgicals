import { useEffect, useId, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowRight, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { findBrand } from "../data/brands";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion";
import "./FeaturedProducts.css";

/* =========================================================
   FEATURED PRODUCTS — a sideways-scrolling row of product cards
   - Swipe on touch screens, drag with the mouse, or use the arrows
   - Every card opens that product's page
   Props:
   - title:    section title
   - products: products to show, in order
   ========================================================= */

/* How far the mouse must move before a press becomes a drag */
const DRAG_START_PX = 6;

function FeaturedProducts({ title, products }) {
  const trackId = useId();
  const trackRef = useRef(null);
  const drag = useRef(null);
  const suppressClick = useRef(false);
  const [dragging, setDragging] = useState(false);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const reducedMotion = usePrefersReducedMotion();

  // Grey out an arrow when the row is scrolled all the way to that side
  useEffect(() => {
    const track = trackRef.current;
    const update = () => {
      setAtStart(track.scrollLeft <= 4);
      setAtEnd(track.scrollLeft >= track.scrollWidth - track.clientWidth - 4);
    };
    update();
    track.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      track.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const scrollByCard = (direction) => {
    const track = trackRef.current;
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    track.scrollBy({
      left: direction * (track.firstElementChild.offsetWidth + gap),
      behavior: reducedMotion ? "auto" : "smooth",
    });
  };

  // Mouse drag — touch screens already swipe the row natively
  const onPointerDown = (event) => {
    if (event.pointerType !== "mouse" || event.button !== 0) return;
    suppressClick.current = false;
    drag.current = {
      x: event.clientX,
      scrollLeft: trackRef.current.scrollLeft,
      pointerId: event.pointerId,
      moved: false,
    };
  };

  const onPointerMove = (event) => {
    const state = drag.current;
    if (!state) return;
    const dx = event.clientX - state.x;
    if (!state.moved) {
      if (Math.abs(dx) < DRAG_START_PX) return;
      state.moved = true;
      trackRef.current.setPointerCapture(state.pointerId);
      setDragging(true);
    }
    trackRef.current.scrollLeft = state.scrollLeft - dx;
  };

  const endDrag = () => {
    if (!drag.current) return;
    if (drag.current.moved) {
      // The click that follows this mouse-up must not open a card
      suppressClick.current = true;
      setTimeout(() => {
        suppressClick.current = false;
      }, 0);
    }
    drag.current = null;
    setDragging(false);
  };

  const onClickCapture = (event) => {
    if (!suppressClick.current) return;
    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <div className="featured">
      <div className="featured__head">
        <div>
          <span className="accent-mark" aria-hidden="true" />
          <h2 className="featured__title">{title}</h2>
        </div>
        <div className="featured__arrows">
          <button
            type="button"
            className="featured__arrow"
            aria-label="Scroll products left"
            aria-controls={trackId}
            disabled={atStart}
            onClick={() => scrollByCard(-1)}
          >
            <FiChevronLeft aria-hidden="true" />
          </button>
          <button
            type="button"
            className="featured__arrow"
            aria-label="Scroll products right"
            aria-controls={trackId}
            disabled={atEnd}
            onClick={() => scrollByCard(1)}
          >
            <FiChevronRight aria-hidden="true" />
          </button>
        </div>
      </div>

      <ul
        id={trackId}
        ref={trackRef}
        className={`featured__track ${dragging ? "is-dragging" : ""}`}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onClickCapture={onClickCapture}
        onDragStart={(event) => event.preventDefault()}
      >
        {products.map((product) => {
          const brand = findBrand(product.brand);
          return (
            <li key={product.id} className="featured-card">
              <Link to={`/products/${product.id}`} className="featured-card__link">
                {brand && (
                  <span className={`brand-chip brand-tone--${brand.slug}`}>{brand.name}</span>
                )}
                <span className="featured-card__media">
                  <img
                    src={product.image}
                    alt=""
                    className="featured-card__image"
                    width={600}
                    height={600}
                    loading="lazy"
                    draggable={false}
                  />
                </span>
                <h3 className="featured-card__title">{product.name}</h3>
                <span className="featured-card__more">
                  Read More <FiArrowRight aria-hidden="true" />
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default FeaturedProducts;
