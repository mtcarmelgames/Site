import { storyblokEditable } from "@storyblok/react";
import { ProjectCard } from "../components/project_cards";

export default function StoryblokProjectCard({ blok }) {
  const link = blok.link?.cached_url || blok.link?.url || blok.link || "/";
  const safeLink = typeof link === "string" && (/^\/(?!\/)/.test(link) || /^https?:\/\//.test(link)) ? link : "/";
  return (
    <div {...storyblokEditable(blok)}>
      <ProjectCard title={blok.title} category={blok.category} description={blok.description} image={blok.image?.filename || blok.image} imageAlt={blok.image?.alt || blok.image_alt} link={safeLink} linkLabel={blok.link_label} />
    </div>
  );
}
