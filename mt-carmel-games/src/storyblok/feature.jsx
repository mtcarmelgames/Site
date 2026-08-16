function Feature({ blok }) {
  return (
    <article className="feature">
      <h2>{blok.name}</h2>
      <p>{blok.description}</p>
    </article>
  );
}

export default Feature;
