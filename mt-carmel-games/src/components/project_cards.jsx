import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import MediaCarousel from "./carousel";
import "../css/project_cards.css";

export function ProjectCard({ title, category, description, image, imageAlt, link, linkLabel }) {
  const item = { name: title, category, description, image, path: link, label: linkLabel };
  return (
    <article className="project-card">
      <img src={item.image} alt={imageAlt || ""} />
      <div className="project-card-copy">
        <p className="project-card-category">{item.category}</p>
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <Link to={item.path}>{item.label}<ArrowRight size={20} aria-hidden="true" /></Link>
      </div>
    </article>
  );
}

export default function ProjectCards({ slides = [], heading, description }) {
  return (
    <section className="project-section" aria-labelledby="projects-heading">
      <header><h2 id="projects-heading">{heading || "What we're building."}</h2>{description && <p>{description}</p>}</header>
      <MediaCarousel blocks={slides} />
    </section>
  );
}
