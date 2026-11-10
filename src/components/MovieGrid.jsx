import MovieCard from './MovieCard'

function MovieGrid({ movies, onMovieClick }) {
    return (
        <section className="movie-grid">
            {movies.map((movie) => (
                <MovieCard
                    key={movie.id}
                    movie={movie}
                    onClick={onMovieClick}
                />
            ))}

        </section>



    )
}

export default MovieGrid


