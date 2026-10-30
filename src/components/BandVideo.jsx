import { useEffect, useRef, useState } from "react";
import { FiPause, FiPlay } from "react-icons/fi";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion";
import useMediaQuery from "../hooks/useMediaQuery";
import "./BandVideo.css";

/* =========================================================
   BAND VIDEO — muted, looping background video behind a band,
   over a still frame and under a tint (--band-video-tint).
   - Shows only the still on screens under 768px, when the visitor
     prefers reduced motion, or when the browser asks to save data
   - Otherwise the video loads once the page has loaded and the band
     is near the screen, plays while the band is in view and pauses
     when it scrolls away; a small button pauses and restarts it
   Props:
   - video:        MP4 file (H.264, no sound)
   - posterSmall:  640px still frame (WebP)
   - posterLarge:  1280px still frame (WebP)
   ========================================================= */

/* How close the band must be before the video starts downloading */
const NEAR_MARGIN = "300px 0px";

/* Data Saver / Lite mode (Chrome and Android browsers) */
const saveData = typeof navigator !== "undefined" && navigator.connection?.saveData === true;

function BandVideo({ video, posterSmall, posterLarge }) {
  const wide = useMediaQuery("(min-width: 768px)");
  const reducedMotion = usePrefersReducedMotion();
  const canPlay = wide && !reducedMotion && !saveData;

  const wrapRef = useRef(null);
  const videoRef = useRef(null);
  // The video never competes with the hero photo for bandwidth
  const [pageLoaded, setPageLoaded] = useState(() => document.readyState === "complete");
  const [near, setNear] = useState(false);
  const [inView, setInView] = useState(false);
  const [userPaused, setUserPaused] = useState(false);
  const [started, setStarted] = useState(false);

  const loadVideo = canPlay && pageLoaded && near;

  useEffect(() => {
    if (pageLoaded) return undefined;
    const onLoad = () => setPageLoaded(true);
    window.addEventListener("load", onLoad);
    return () => window.removeEventListener("load", onLoad);
  }, [pageLoaded]);

  // Near the screen: start downloading (once)
  useEffect(() => {
    const element = wrapRef.current;
    if (!canPlay || near || !element) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setNear(true);
          observer.disconnect();
        }
      },
      { rootMargin: NEAR_MARGIN }
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [canPlay, near]);

  // On the screen: play; scrolled away: pause
  useEffect(() => {
    const element = wrapRef.current;
    if (!canPlay || !element) return undefined;
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting));
    observer.observe(element);
    return () => observer.disconnect();
  }, [canPlay]);

  useEffect(() => {
    const player = videoRef.current;
    if (!player) return;
    if (inView && !userPaused) {
      player.muted = true; // browsers only autoplay muted video
      player.play().catch(() => {});
    } else {
      player.pause();
    }
  }, [loadVideo, inView, userPaused]);

  return (
    <div className="band-video" ref={wrapRef}>
      <img
        className="band-video__still"
        src={posterLarge}
        srcSet={`${posterSmall} 640w, ${posterLarge} 1280w`}
        // Under the tint the 640px copy is plenty on phones
        sizes="(max-width: 767px) 360px, 100vw"
        alt=""
        width={1280}
        height={540}
        loading="lazy"
        decoding="async"
      />

      {loadVideo && (
        <video
          ref={videoRef}
          className={`band-video__video ${started ? "is-playing" : ""}`}
          src={video}
          muted
          loop
          playsInline
          preload="auto"
          disablePictureInPicture
          aria-hidden="true"
          onPlaying={() => setStarted(true)}
        />
      )}

      <span className="band-video__tint" aria-hidden="true" />

      {canPlay && (
        <button
          type="button"
          className="band-video__toggle"
          aria-label={userPaused ? "Play background video" : "Pause background video"}
          onClick={() => setUserPaused((paused) => !paused)}
        >
          {userPaused ? <FiPlay aria-hidden="true" /> : <FiPause aria-hidden="true" />}
        </button>
      )}
    </div>
  );
}

export default BandVideo;
