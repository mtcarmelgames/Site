import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Monitor, Smartphone } from "lucide-react";

export default function ProductCarousel({ products = [], kind = "app" }) {
  const [index, setIndex] = useState(0);
  const touchStart = useRef(null);
  const count = products.length;
  const activeIndex = count ? index % count : 0;
  const product = products[activeIndex];

  function Previous() {
    setIndex((current) => (current - 1 + count) % count);
  }

  function Next() {
    setIndex((current) => (current + 1) % count);
  }

  function HandleSwipe(event) {
    const start = touchStart.current;
    touchStart.current = null;
    if (count < 2 || !start) return;
    const deltaX = event.changedTouches[0].clientX - start.x;
    const deltaY = event.changedTouches[0].clientY - start.y;
    if (Math.abs(deltaX) < 60 || Math.abs(deltaX) <= Math.abs(deltaY)) return;
    if (deltaX > 0) Previous();
    else Next();
  }

  if (!product) return null;

  return (
    <section className="product-carousel" aria-label={kind === "game" ? "Featured games" : "Featured software"} aria-roledescription={count > 1 ? "carousel" : undefined}
      tabIndex={count > 1 ? 0 : undefined}
      onKeyDown={(event) => {
        if (count < 2 || event.target !== event.currentTarget) return;
        if (event.key === "ArrowLeft") { event.preventDefault(); Previous(); }
        if (event.key === "ArrowRight") { event.preventDefault(); Next(); }
      }}
      onTouchStart={(event) => { touchStart.current = { x: event.touches[0].clientX, y: event.touches[0].clientY }; }}
      onTouchEnd={HandleSwipe} onTouchCancel={() => { touchStart.current = null; }}>
      <article className="product-feature" key={product.id} aria-label={product.name}>
        <div className="product-copy">
          <p className="apps-eyebrow">Featured {kind}</p>
          <div className="product-identity">{product.iconCrop ? <span className="product-icon-crop"><img src={product.icon} alt="" /></span> : <img src={product.icon} alt="" width="80" height="80" />}<div><h2>{product.name}</h2><p>{product.category}</p></div></div>
          {product.headline && <h3>{product.headline}</h3>}
          <p className="product-description">{product.description}</p>
          {product.platforms?.length > 0 && <ul className="product-platforms" aria-label="Supported platforms">{product.platforms.map((platform) => <li key={platform}>{platform === "Windows" ? <Monitor size={18} aria-hidden="true" /> : <Smartphone size={18} aria-hidden="true" />}{platform}</li>)}</ul>}
          <p className="product-availability">{product.availability}</p>
          {product.previewOnly ? <a className="product-explore" href={product.preview.src} target="_blank" rel="noreferrer">View game preview<ArrowRight size={21} aria-hidden="true" /></a> : <Link className="product-explore" to={product.path}>Explore {product.name}<ArrowRight size={21} aria-hidden="true" /></Link>}
        </div>
        <div className={`product-art${product.preview ? " product-art--image" : ""}`} aria-label={`${product.name} previews`}>
          {product.preview ? <img className="product-showcase" src={product.preview.src} alt={product.preview.alt} width="1536" height="1024" /> : <>
            {product.desktop && <div className="product-laptop"><div className="product-laptop-screen"><img src={product.desktop.src} alt={product.desktop.alt} /></div><div className="product-laptop-base" aria-hidden="true" /></div>}
            {product.phone && <div className="product-phone"><img src={product.phone.src} alt={product.phone.alt} /></div>}
          </>}
        </div>
      </article>

      {count > 1 && <div className="product-navigation">
        <button type="button" onClick={Previous} aria-label={`Previous ${kind}`}><ArrowLeft size={20} aria-hidden="true" /></button>
        <div className="product-dots" role="group" aria-label={`Choose ${kind === "game" ? "a game" : "an app"}`}>{products.map((item, position) => <button type="button" key={item.id} onClick={() => setIndex(position)} aria-label={`Show ${item.name}`} aria-pressed={activeIndex === position}><span /></button>)}</div>
        <p aria-live="polite">{activeIndex + 1} / {count} · {product.name}</p>
        <button type="button" onClick={Next} aria-label={`Next ${kind}`}><ArrowRight size={20} aria-hidden="true" /></button>
      </div>}
    </section>
  );
}
