import { StoryblokComponent } from "@storyblok/react";

function Grid({ blok }) {
  return (
    <div className="grid">
      {blok.columns?.map((column) => (
        <StoryblokComponent blok={column} key={column._uid} />
      ))}
    </div>
  );
}

export default Grid;
