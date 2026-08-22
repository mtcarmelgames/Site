import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactGA from "react-ga4";
import Hero from "./components/hero";
import Games from "./components/games";
import Apps from "./components/apps";
import Team from "./components/team";
import Contact from "./components/contact";
import FCPP from "./components/apps/financial_calendar/privacy_policy";
import "./css/base.css";
import { storyblokInit, apiPlugin, StoryblokComponent, getStoryblokApi } from "@storyblok/react";
import Page from "./storyblok/Page";
import Teaser from "./storyblok/Teaser";
import Grid from "./storyblok/Grid";
import Feature from "./storyblok/Feature";
import Video from "./storyblok/Video";

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
  },
  apiOptions: {
    region: "en", // Choose the correct region from your Space.
  },
});

function Index() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    async function LoadStories() {
      const storyblokApi = getStoryblokApi();

      const response = await storyblokApi.get("cdn/stories", {
        version: "published",
        per_page: 5,
        sort_by: "first_published_at:desc",
      });

      setStories(response.data.stories);
    }

    LoadStories();
  }, []);

  return (
    <main className="main">
      {stories.map((story) => (
        <StoryblokComponent blok={story.content} story={story} key={story.uuid} />
      ))}
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
            <Route path="/apps" element={<Apps />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/apps/financial_calendar/privacy_policy" element={<FCPP />} />
            {/* <Route path="/contact" element={<ContactPage />} /> */}
          </Routes>
        </main>
      </section>
    </>
  );
}

export default App;
