function FilterBar({ genres, value, onChange }) {
    return (
        <select
            className="genre-select"
            value={value}
            onChange={onChange}
        >
            <option value="">All genres</option>

            {genres.map((genre) => (
                <option key={genre} value={genre}>{genre}</option>
            ))}
        </select>
    )
}

export default FilterBar