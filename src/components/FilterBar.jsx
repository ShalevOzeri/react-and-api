function FilterBar({ genres, years, ratingOptions, genreValue, onGenreChange, yearValue, onYearChange, ratingValue, onRatingChange }) {
    return (
        <>
            <div className="genre-options">
                <label>
                    <input
                        type="radio"
                        name="genre"
                        value=""
                        checked={genreValue === ''}
                        onChange={onGenreChange}
                    />
                    All genres
                </label>

                {genres.map((genre) => (
                    <label key={genre}>
                        <input
                            type="radio"
                            name="genre"
                            value={genre}
                            checked={genreValue === genre}
                            onChange={onGenreChange}
                        />
                        {genre}
                    </label>
                ))}
            </div>

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