import "../css/carousel.css";

import { useState } from "react";

export default function MediaCarousel({ media }) {
  const [index, setIndex] = useState(0);

  function Previous() {
    setIndex((index - 1 + media.length) % media.length);
  }

  function Next() {
    setIndex((index + 1) % media.length);
  }

  const item = media[index];

  return (
    <div className="media-carousel">
      <button onClick={Previous} aria-label="Previous item">‹</button>

      <div className="media-carousel-content">{item.type === "image" ? <img src={item.src} alt={item.alt ?? ""} /> : <video src={item.src} controls playsInline />}</div>

      <button onClick={Next} aria-label="Next item">›</button>
    </div>
  );
}
