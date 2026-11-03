import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
import MediaCarousel from "../components/carousel";
import ProjectCards from "../components/project_cards";

export default function Carousel({ blok }) {
  // Keep the Media field already configured in Storyblok as a list of blocks.
  const blocks = Array.isArray(blok.media) ? blok.media : [];

  if (blocks.length && blocks.every((block) => block.component === "project_card")) {
    return <div {...storyblokEditable(blok)}><ProjectCards heading={blok.heading} description={blok.description} slides={blocks.map((block) => <StoryblokComponent blok={block} key={block._uid} />)} /></div>;
  }

  return (
    <div {...storyblokEditable(blok)}>
      <MediaCarousel blocks={blocks.map((nestedBlok) => <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />)} />
    </div>
  );
}
