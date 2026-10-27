import Reveal from "./Reveal";

/* =========================================================
   SECTION HEADING — small label + big title + paragraph
   (styles are in src/index.css → "Section heading")
   Props:
   - eyebrow: small label above the title
   - title:   main heading
   - text:    optional paragraph
   - center:  true to center-align
   ========================================================= */

function SectionHeading({ eyebrow, title, text, center = false }) {
  return (
    <Reveal className={`section-heading ${center ? "section-heading--center" : ""}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </Reveal>
  );
}

export default SectionHeading;
