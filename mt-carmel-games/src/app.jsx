import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Hero from "./components/hero";
import Games from "./components/games";
import "./css/base.css";

function Index() {
  return (
    <main className="main">
      <h1>Welcome to Mt. Carmel Games</h1>
      <p>Indie games and apps coming soon.</p>
    </main>
  );
}

function App() {
  return (
    <>
      <Hero />

      <section className="main-wrapper">
        <main className="main">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/games" element={<Games />} />
            {/* <Route path="/apps" element={<AppsPage />} /> */}
            {/* <Route path="/contact" element={<ContactPage />} /> */}
          </Routes>
        </main>
      </section>
    </>
  );
}

export default App;
