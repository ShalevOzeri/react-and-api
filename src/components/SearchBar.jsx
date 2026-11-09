function SearchBar({ value, onChange }) {
    return (
        <input
            type="text"
            value={value}
            onChange={onChange}
            placeholder="Search shows..."
        />
    )
}

export default SearchBar