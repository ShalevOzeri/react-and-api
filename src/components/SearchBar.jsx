function SearchBar({ value, onChange }) {
    return (
        <input
            className="search-input"
            type="text"
            value={value}
            onChange={onChange}
            placeholder="Search movies..."
        />
    )
}

export default SearchBar