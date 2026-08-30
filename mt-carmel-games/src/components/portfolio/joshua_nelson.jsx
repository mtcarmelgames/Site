import { useEffect } from "react";
import ReactGA from "react-ga4";
import MediaCarousel from "../carousel";
import "../../css/portfolio.css";

export default function JoshuaNelsonPortfolio() {
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });
  }, []);

  return (
    <section className="portfolio-profile" aria-labelledby="portfolio-profile-heading">
      <article className="portfolio-profile__card">
        <img className="portfolio-profile__photo" src="/images/team/jeffery-bunn.png" alt="Portrait of Joshua Nelson" />

        <div className="portfolio-profile__details">
          <h1 id="portfolio-profile-heading" className="portfolio-profile__name">
            Joshua Nelson
          </h1>
          <p className="portfolio-profile__role">3D Artist</p>

          <div className="portfolio-profile__bio">
            <p>
              Jeffery is a multidisciplinary developer with more than 20 years of experience across game, simulation, web, and mobile development. As a senior Unity developer supporting U.S. Army training, he built technically demanding solutions involving procedural mesh generation, real-time ray
              tracing for large environments, CAD-like tools, and airframe simulation. His work combines deep knowledge of C#, Unity, C++, shaders, and interactive systems with an ability to turn complex requirements into reliable, intuitive software.
            </p>
            <p>
              His broader experience includes developing an ASP.NET business portal used by more than 300 employees, creating secure cross-platform Android, iOS, and Windows applications, and taking game projects from early concepts through release. As co-founder and sole programmer at Soft Sell
              Studios, Jeffery helped ship 14 family-friendly games for Xbox 360 and Windows 8. He also brings hands-on skill in game design, 2D and 3D art, interface design, and technical leadership to every project he develops.
            </p>
          </div>
        </div>
      </article>

      <section className="portfolio-profile__experience" aria-labelledby="experience-heading">
        <h2 id="experience-heading">Experience</h2>
        <MediaCarousel
          media={[
            {
              type: "image",
              src: "/images/portfolio/experience-placeholder.svg",
              alt: "Experience portfolio content coming soon",
            },
          ]}
        />
      </section>
    </section>
  );
}
