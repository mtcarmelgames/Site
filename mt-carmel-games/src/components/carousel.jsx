import { ChevronLeft, ChevronRight } from "lucide-react";
import "../css/carousel.css";

import { useEffect, useLayoutEffect, useRef, useState } from "react";

export default function MediaCarousel({ media = [], blocks = [], autoPlay = false, interval = 5000, height = 500, width }) {
  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [dimensions, setDimensions] = useState({});
  const [lastRatio, setLastRatio] = useState(16 / 9);
  const [resizing, setResizing] = useState(false);

  const hasBlocks = blocks.length > 0;
  const slides = hasBlocks ? blocks : media;
  const count = slides.length;
  const activeIndex = count ? index % count : 0;
  const item = slides[activeIndex];
  const hasFixedWidth = width !== undefined && width !== null;
  const cssLength = (value) => typeof value === "number" ? `${value}px` : value;
  const frameWidth = hasFixedWidth ? cssLength(width) : `calc(${cssLength(height)} * ${dimensions[item?.src] ?? lastRatio})`;
  const previousWidth = useRef(frameWidth);

  useLayoutEffect(() => {
    const changed = previousWidth.current !== frameWidth;
    previousWidth.current = frameWidth;
    if (hasFixedWidth || !changed) {
      setResizing(false);
      return;
    }
    // Hide before paint, including when a new resize interrupts the previous one.
    setResizing(true);
    const timer = window.setTimeout(() => setResizing(false), 550);
    return () => window.clearTimeout(timer);
  }, [frameWidth, hasFixedWidth]);

  useEffect(() => {
    if (!autoPlay || hasBlocks || count < 2 || hovered || focused || videoPlaying) return;
    const timer = window.setTimeout(() => setIndex((current) => (current + 1) % count), interval);
    return () => window.clearTimeout(timer);
  }, [autoPlay, hasBlocks, count, hovered, focused, videoPlaying, index, interval]);

  function Previous() {
    setVideoPlaying(false);
    setIndex((current) => (current - 1 + count) % count);
  }

  function Next() {
    setVideoPlaying(false);
    setIndex((current) => (current + 1) % count);
  }

  if (!item) return null;

  function RememberSize(event) {
    const element = event.currentTarget;
    const width = element.naturalWidth || element.videoWidth;
    const height = element.naturalHeight || element.videoHeight;
    if (width && height) {
      const ratio = width / height;
      setDimensions((current) => ({ ...current, [item.src]: ratio }));
      setLastRatio(ratio);
    }
  }


  return (
    <div className={`media-carousel${hasBlocks ? " media-carousel--blocks" : ""}`} role="region" aria-label={hasBlocks ? "Content gallery" : "Media gallery"} aria-roledescription="carousel"
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      onFocus={() => setFocused(true)} onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false); }}>
      <button onClick={Previous} disabled={count < 2} aria-label="Previous item"><ChevronLeft size={24} aria-hidden="true" /></button>

      <div className={`media-carousel-content${hasBlocks ? " media-carousel-content--blocks" : ""}${hasFixedWidth ? " media-carousel-content--fixed" : ""}${resizing ? " media-carousel-content--resizing" : ""}`}
        style={{
        "--carousel-height": cssLength(height),
        "--carousel-width": frameWidth,
      }}>
        {hasBlocks ? <div key={item.key ?? activeIndex} className="media-carousel-block">{item}</div> : item.type === "image" ? <img key={item.src} src={item.src} alt={item.alt ?? ""} onLoad={RememberSize} /> :
          <video key={item.src} src={item.src} controls playsInline onLoadedMetadata={RememberSize}
            onPlay={() => setVideoPlaying(true)} onPause={() => setVideoPlaying(false)} onEnded={() => setVideoPlaying(false)} />}
      </div>

      <button onClick={Next} disabled={count < 2} aria-label="Next item"><ChevronRight size={24} aria-hidden="true" /></button>
    </div>
  );
}
