import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { House } from "lucide-react";
import { Gamepad2 } from "lucide-react";
import { AppWindow } from "lucide-react";
import { Users } from "lucide-react";
import { Mail } from "lucide-react";
import "../css/hero.css";

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const mainMountain = document.querySelector(".hero .main");
    const frontMountains = document.querySelector(".hero .front");
    const frontTrees = document.querySelector(".hero .trees");
    const hills = document.querySelector(".hills");
    const title = document.querySelector(".hero .title");
    const nav = document.querySelector(".main-nav");

    function updateParallax() {
      const scrollY = window.scrollY || window.pageYOffset;
      // mainMountain.style.transform = `translateY(${scrollY * 0.06}px)`;
      // frontMountains.style.transform = `translateY(100% + ${scrollY * 0.1}px)`;
      // hills.style.transform = `translateY(30% + ${scrollY * 0.2}px)`;
      //nav.style.transform = `translate(-50%, ${scrollY * 0.0}px)`;
    }

    window.addEventListener("scroll", updateParallax);
    updateParallax();

    return () => window.removeEventListener("scroll", updateParallax);
  }, []);

  return (
    <section className="hero">
      <div className="radial-gradient" />
      {/* <img src="/images/background_mountains.svg" className="mountains back" /> */}
      <img src="/images/main_mountains.svg" className="mountains main" />
      <div className="soft-gradient" />
      <img src="/images/foreground_mountains.svg" className="mountains front" />
      <img src="/images/hills.svg" className="hills" />
      {/* <div className="soft-gradient" /> */}
      <img src="/images/trees.svg" className="trees" />

      <nav className="main-nav">
        <img src="/images/logo.svg" />
        <ul className="mobile-menu">
          <li>
            <Link to="/">
              <House />
            </Link>
          </li>
          <li>
            <Link to="/games">
              <Gamepad2 />
            </Link>
          </li>
          <li>
            <Link to="/apps">
              <AppWindow />
            </Link>
          </li>
          <li>
            <Link to="/team">
              <Users />
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <Mail />
            </Link>
          </li>
        </ul>
        <ul className="full-menu">
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
            <Link to="/team">Team</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </section>
  );
}
