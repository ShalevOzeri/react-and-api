import './App.css'
import MovieGrid from './components/MovieGrid'
import SearchBar from './components/SearchBar'
import FilterBar from './components/FilterBar'
import Header from './components/Header'
import { useState, useEffect } from 'react'


function App() {

  const [shows, setShows] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedGenre, setSelectedGenre] = useState('')
  const genres = [
    ...new Set(shows.flatMap((show) => show.genres))]

  const filteredShows = shows.filter((show) => {
    const matchesSearchTerm = show.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesGenre = selectedGenre === '' || show.genres.includes(selectedGenre)

    return matchesSearchTerm && matchesGenre
  })


  useEffect(() => {

    fetch('https://api.tvmaze.com/shows')

      .then((response) => {

        if (response.ok) {
          return response.json()
        }
        throw new Error('Failed to fetch shows')
      })

      .then((data) => {
        setShows(data)
        setLoading(false)
      })

      .catch((error) => {
        setError(error)
        setLoading(false)
      })

  }, [])


  return (

    <div>
      <Header title="TV shows" />
      <div className="toolbar">
        <SearchBar
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <FilterBar
          genres={genres}
          value={selectedGenre}
          onChange={(e) => setSelectedGenre(e.target.value)}
        />
      </div>




      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {!loading && !error && (
        filteredShows.length === 0 ? (
          <p>No shows found</p>
        ) : (
          <MovieGrid movies={filteredShows} />
        )
      )}

    </div>
  )

}

export default App
