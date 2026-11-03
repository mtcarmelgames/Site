import { StoryblokComponent } from "@storyblok/react";

function Page({ blok }) {
  return (
    <main className="div">
      {blok.body?.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </main>
  );
}

export default Page;
