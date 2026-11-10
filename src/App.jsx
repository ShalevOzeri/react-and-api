import './App.css'
import MovieGrid from './components/MovieGrid'
import SearchBar from './components/SearchBar'
import FilterBar from './components/FilterBar'
import Header from './components/Header'
import { useState, useEffect } from 'react'
import MovieExtendedDetails from './components/MovieExtendedDetails'


function normalizeMovie(item) {
  const rawRating = typeof item.rating === 'object'
    ? item.rating?.average
    : item.rating

  const ratingValue = Number(rawRating)

  return {
    id: item.id,

    name: Array.isArray(item.name) ?
      item.name.join(', ')
      : String(item.name || ''),

    genres: Array.isArray(item.genres) ?
      item.genres
      : typeof item.genres === 'string' ?
        [item.genres]
        : [],

    premiered: item.premiered || '',
    network: item.network?.name || 'Unknown network',
    rating: {
      average: Number.isFinite(ratingValue)
        ? ratingValue
        : null
    },

    image: {
      medium: item.image?.medium || ''
    },

    summary: item.summary || ''
  }
}


function App() {

  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [selectedMovie, setSelectedMovie] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedGenre, setSelectedGenre] = useState('')
  const [selectedYear, setSelectedYear] = useState('')
  const [minimumRating, setMinimumRating] = useState('')
  const ratingOptions = [9, 8, 7, 6, 5, 4, 3, 2, 1]

  const genres = [
    ...new Set(movies.flatMap((movie) => movie.genres))]

  const years = [
    ...new Set(
      movies
        .filter((movie) => movie.premiered)
        .map((movie) => movie.premiered.slice(0, 4))
    )
  ].sort((a, b) => Number(b) - Number(a))


  const filteredMovies = movies.filter((movie) => {
    const matchesSearchTerm = movie.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesGenre = selectedGenre === '' || movie.genres.includes(selectedGenre)
    const matchesYear = selectedYear === '' || movie.premiered?.startsWith(selectedYear)
    const matchesRating = minimumRating === '' || movie.rating?.average >= Number(minimumRating)

    return matchesSearchTerm && matchesGenre && matchesYear && matchesRating
  })





  useEffect(() => {

    fetch('https://api.tvmaze.com/shows')

      .then((response) => {

        if (response.ok) {
          return response.json()
        }
        throw new Error('Failed to fetch movies')
      })

      .then((data) => {
        if (!Array.isArray(data)) {
          throw new Error('Invalid movies response')
        }

        setMovies(data.map(normalizeMovie))
        setLoading(false)
      })

      .catch((error) => {
        setError(error)
        setLoading(false)
      })

  }, [])


  return (

    <div className="app">
      <Header title="Movies" />

      {!selectedMovie && (
        <div className="toolbar">
          <SearchBar
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <FilterBar
            genres={genres}
            years={years}
            ratingOptions={ratingOptions}
            genreValue={selectedGenre}
            onGenreChange={(e) => setSelectedGenre(e.target.value)}
            yearValue={selectedYear}
            onYearChange={(e) => setSelectedYear(e.target.value)}
            ratingValue={minimumRating}
            onRatingChange={(e) => setMinimumRating(e.target.value)}
          />
        </div>
      )}



      {selectedMovie ? (
        <MovieExtendedDetails
          movie={selectedMovie}
          onBack={() => setSelectedMovie(null)}
        />
      ) : (
        <>
          {loading && <p>Loading...</p>}
          {error && <p>Error: {error.message}</p>}
          {!loading && !error && (
            filteredMovies.length === 0 ? (
              <p>No movies found</p>
            ) : (
              <MovieGrid
                movies={filteredMovies}
                onMovieClick={setSelectedMovie}
              />
            )
          )}
        </>
      )}




    </div>
  )

}

export default App
