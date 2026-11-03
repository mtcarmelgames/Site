import { useEffect, useState } from "react";
import { getStoryblokApi, StoryblokComponent } from "@storyblok/react";
import "../css/project_cards.css";

export default function WarNuggets() {
  const [story, setStory] = useState(null);
  const [failed, setFailed] = useState(false);
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    let active = true;
    getStoryblokApi().get("cdn/stories/war-nuggets-development", { version: "published" })
      .then(({ data }) => { if (active) setStory(data.story); })
      .catch(() => { if (active) setFailed(true); });
    return () => { active = false; };
  }, [attempt]);

  return (
    <div className="war-nuggets-page">
      <header className="war-nuggets-intro">
        <div><p>In development</p><h1>War Nuggets</h1><h2>Small Units. Big Battles.</h2><p>A first look at what we're building. Follow the development below for a look behind the scenes.</p><a href="#development">Watch development ↓</a></div>
        <img src="/images/war_nuggets/game-preview.png" alt="Blue and red War Nuggets tanks on grassy terrain dotted with craters" />
      </header>
      <section id="development" aria-label="War Nuggets development">
        <h2>From the battlefield.</h2>
        {story ? <StoryblokComponent blok={story.content} /> : failed ? <div role="status"><p>Development updates couldn't load.</p><button onClick={() => { setFailed(false); setAttempt((value) => value + 1); }}>Try again</button></div> : <p role="status">Loading development updates…</p>}
      </section>
    </div>
  );
}
