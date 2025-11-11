import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  useEffect(() => {
    const backMountains = document.querySelector(".hero .back");
    const frontMountains = document.querySelector(".hero .front");
    const title = document.querySelector(".hero .title");
    const nav = document.querySelector(".main-nav");

    function updateParallax() {
      const scrollY = window.scrollY || window.pageYOffset;
      backMountains.style.transform = `translateY(${scrollY * 0.75}px)`;
      title.style.transform = `translate(-50%, ${scrollY * 0.0}px)`;
      nav.style.transform = `translate(-50%, ${scrollY * 0.0}px)`;
    }

    window.addEventListener("scroll", updateParallax);
    updateParallax();

    return () => window.removeEventListener("scroll", updateParallax);
  }, []);

  return (
    <section className="hero">
      <img src="/images/background_mountains.svg" className="mountains back" />
      <div className="gradient" />
      <img src="/images/foreground_mountains.svg" className="mountains front" />
      <img src="/images/logo.svg" className="title" />

      <nav className="main-nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/games">Games</Link>
          </li>
          <li>
            <Link to="/apps">Apps</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </section>
  );
}
