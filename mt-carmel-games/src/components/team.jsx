import { useEffect } from "react";
import ReactGA from "react-ga4";
import "../css/team.css";

const teamMembers = [
  {
    name: "Jeffery Bunn",
    role: "Founder & Game Developer",
    image: "/images/team/jeffery-bunn.png",
    bio: "Jeffery is a game and software developer with more than 20 years of experience turning ambitious ideas into polished, playable experiences. He has shipped 14 independent games, led Unity development for advanced training simulations, and built projects spanning console, mobile, web, and PC. At Mt. Carmel Games, Jeffery brings programming, game design, and visual art together to create distinctive games that are approachable, engaging, and made with care.",
  },
  // {
  //   name: "Joshua Nelson",
  //   role: "3D Artist",
  //   image: "/images/team/joshua-nelson.png",
  //   bio: "Joshua is a 3D artist with six years of experience creating real-time assets for interactive applications. He specializes in optimized hard-surface modeling, texturing, mechanical animation, and translating complex technical references into accurate, performance-ready work. At Mt. Carmel Games, Joshua combines technical precision with an artist's eye to build detailed, believable worlds that look great and play smoothly.",
  //   linkedIn: "https://www.linkedin.com/in/joshuanelson1038/",
  // },
];

export default function Team() {
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });
  }, []);

  return (
    <section className="team" aria-labelledby="team-heading">
      <h1 id="team-heading" className="team__heading">
        Meet the Team
      </h1>

      <div className="team__list">
        {teamMembers.map((member) => (
          <article className="team-member" key={member.name}>
            <img className="team-member__photo" src={member.image} alt={`Portrait of ${member.name}`} />

            <div className="team-member__details">
              <h2 className="team-member__name">{member.name}</h2>
              <p className="team-member__role">{member.role}</p>
              <p className="team-member__bio">{member.bio}</p>
              {member.linkedIn && (
                <a className="team-member__link" href={member.linkedIn} target="_blank" rel="noreferrer">
                  View LinkedIn profile
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
