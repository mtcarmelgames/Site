import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import StoryblokProjectCard from "./storyblok/project_card";
import WarNuggets from "./components/war_nuggets";
import ReactGA from "react-ga4";
import "./css/base.css";
import Hero from "./components/hero";
import Games from "./components/games";
import Apps from "./components/apps";
import Team from "./components/team";
import Contact from "./components/contact";
import JefferyBunnPortfolio from "./components/portfolio/jeffery_bunn";
import FCPP from "./components/apps/financial_calendar/privacy_policy";
import { storyblokInit, apiPlugin, StoryblokComponent, getStoryblokApi } from "@storyblok/react";
import Page from "./storyblok/Page";
import Teaser from "./storyblok/Teaser";
import Grid from "./storyblok/Grid";
import Feature from "./storyblok/Feature";
import Video from "./storyblok/Video";
import Carousel from "./storyblok/carousel";
import TheStory from "./components/the_story";
import JoshuaNelsonPortfolio from "./components/portfolio/joshua_nelson";
import BiteScribe from "./components/apps/bitescribe/bitescribe";
import BiteScribe_PrivacyPolicy from "./components/apps/bitescribe/privacy_policy";
import BiteScribe_Terms from "./components/apps/bitescribe/terms";
import BiteScribe_RequestAccountDeletion from "./components/apps/bitescribe/request_account_deletion";
import { Link } from "react-router-dom";

ReactGA.initialize("G-M77JN2ZYMH");

storyblokInit({
  accessToken: import.meta.env.VITE_STORYBLOK_DELIVERY_API_TOKEN,
  use: [apiPlugin],
  components: {
    page: Page,
    teaser: Teaser,
    grid: Grid,
    feature: Feature,
    video: Video,
    carousel: Carousel,
    project_card: StoryblokProjectCard,
  },
  apiOptions: {
    region: "en", // Choose the correct region from your Space.
  },
});

function Index() {
  const [story, setStory] = useState(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let active = true;
    getStoryblokApi().get("cdn/stories/home", { version: "published" })
      .then(({ data }) => { if (active) setStory(data.story); })
      .catch(() => { if (active) setFailed(true); });
    return () => { active = false; };
  }, []);

  return (
    <section>
      <section className="block">
        <h3 style={{ textAlign: "justify", fontStyle: "italic" }} className="center">
          At Mount Carmel Games, our mission is to build games and software that inspire adventure, bring people together, and create content you can feel good about.
        </h3>
      </section>
      {story ? <StoryblokComponent blok={story.content} /> : <p role="status">{failed ? "Homepage content is not available yet." : "Loading projects…"}</p>}
    </section>
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
            <Route path="/games/war_nuggets" element={<WarNuggets />} />
            <Route path="/apps" element={<Apps />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio/jeffery_bunn" element={<JefferyBunnPortfolio />} />
            <Route path="/portfolio/joshua_nelson" element={<JoshuaNelsonPortfolio />} />
            <Route path="/apps/financial_calendar/privacy_policy" element={<FCPP />} />
            <Route path="/apps/bitescribe" element={<BiteScribe />} />
            <Route path="/apps/bitescribe/privacy_policy" element={<BiteScribe_PrivacyPolicy />} />
            <Route path="/apps/bitescribe/terms" element={<BiteScribe_Terms />} />
            <Route path="/apps/bitescribe/request_account_deletion" element={<BiteScribe_RequestAccountDeletion />} />
            <Route path="/the_story" element={<TheStory />} />
          </Routes>
        </main>
        <footer>
          <Link to="/the_story">The Story</Link>
          <a className="footer-social" href="https://www.facebook.com/MountCarmelGames/" target="_blank" rel="noopener noreferrer" aria-label="Mount Carmel Games on Facebook">
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" fill="currentColor"><path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073c0 6.025 4.388 11.02 10.125 11.927v-8.437H7.078v-3.49h3.047v-2.66c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.49 0-1.956.931-1.956 1.887v2.264h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.099 24 12.073z" /></svg>
          </a>
          <a className="footer-social" href="https://www.youtube.com/@mountcarmelgames" target="_blank" rel="noopener noreferrer" aria-label="Mount Carmel Games on YouTube">
            <svg viewBox="0 0 24 24" width="24" height="20" aria-hidden="true" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.121 2.136c1.872.505 9.377.505 9.377.505s7.505 0 9.376-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
          </a>
        </footer>
      </section>
    </>
  );
}

export default App;
