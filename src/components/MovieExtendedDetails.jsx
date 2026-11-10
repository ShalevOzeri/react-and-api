function MovieExtendedDetails({ movie, onBack }) {
    return (
        <section className="movie-extended-details">
            <button className="back-button" onClick={onBack}>
                Back to movies
            </button>

            <h2 className="movie-details-title">{movie.name}</h2>
            <p>{movie.premiered?.slice(0, 4)}</p>
            <p>{movie.genres?.join(', ') || 'No genres available'}</p>
            <p>Rating: {movie.rating?.average ?? 'No rating available'}</p>
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











        </section>
    )
}

export default MovieExtendedDetails