function FilterBar({ genres, years, ratingOptions, genreValue, onGenreChange, yearValue, onYearChange, ratingValue, onRatingChange }) {
    return (
        <>
            <select
                className="genre-select"
                value={genreValue}
                onChange={onGenreChange}
            >
                <option value="">All genres</option>

                {genres.map((genre) => (
                    <option key={genre} value={genre}>
                        {genre}
                    </option>
                ))}
            </select>

            <select
                className="year-select"
                value={yearValue}
                onChange={onYearChange}
            >
                <option value="">All years</option>

                {years.map((year) => (
                    <option key={year} value={year}>
                        {year}
                    </option>
                ))}
            </select>

            <select
                className="rating-select"
                value={ratingValue}
                onChange={onRatingChange}
            >
                <option value="">All ratings</option>

                {ratingOptions.map((rating) => (
                    <option key={rating} value={rating}>
                        {rating}+
                    </option>
                ))}
            </select>

        </>
    )
}

export default FilterBar