function MovieCard({ movie, onClick }) {
  return (
    <article
      className="movie-card"
      onClick={() => onClick(movie)}>
      <h2 className="movie-name">{movie.name}</h2>

      {movie.image?.medium ? (
        <img src={movie.image.medium} alt={movie.name} />
      ) : (
        <p>No image available</p>
      )}

      <div className="movie-filtered-details">
        <p>{movie.premiered?.slice(0, 4) || 'No year available'}</p>
        <p>{movie.genres?.join(', ') || 'No genres available'}</p>
      </div>
    </article>
  )
}

export default MovieCard