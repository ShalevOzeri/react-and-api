function MovieCard({ movie }) {
  return (
    <article className="movie-card">
      <h2 className="movie-name">{movie.name}</h2>
      <p>{movie.premiered}</p>
      <p>{movie.genres?.join(', ') || 'No genres available'}</p>
      <p>Rating: {movie.rating?.average || 'No rating available'}</p>
      {movie.image?.medium ? (
        <img src={movie.image.medium} alt={movie.name} />
      ) : (
        <p>No image available</p>
      )}
      {movie.summary ? (
        <div dangerouslySetInnerHTML={{ __html: movie.summary }} />
      ) : (
        <p>No summary available</p>
      )}

    </article>
  )
}

export default MovieCard