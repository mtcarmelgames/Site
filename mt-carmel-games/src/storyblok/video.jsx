function Video({ blok }) {
  const url = blok.url?.url ?? blok.url;

  const videoId = url?.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&?/]+)/)?.[1];

  if (!videoId) {
    return null;
  }

  return (
    <div className="video">
      <div className="video-player">
        <iframe src={`https://www.youtube.com/embed/${videoId}`} title={blok.title || "YouTube video"} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
      </div>

      {(blok.title || blok.description) && (
        <div className="video-content">
          {blok.title && <h2>{blok.title}</h2>}
          {blok.description && <p>{blok.description}</p>}
        </div>
      )}
    </div>
  );
}

export default Video;
