import React from 'react'
import './styles/App.css'
import movieArray from './data/movies.json'
import Genres from './components/Genres'
import Movie from './components/Movie'
import MovieItems from './components/MovieItems'

const App = () => {
  console.log(movieArray)
  return (
    <div className="App">
      <h1>Movie List</h1>
      <MovieItems>
        {movieArray.map((movie) => (
          <li className="movie-list">
            <Movie
              key={movie.title}
              title={movie.title}
              releaseDate={movie.release_date}
              overVssiew={movie.overview}
              pic={movie.poster_path}
            />
            {movie.genres.map((genre, index) => (
              <Genres genres={genre.name} />
            ))}
          </li>
        ))}
      </MovieItems>
    </div>
  )
}

export default App
