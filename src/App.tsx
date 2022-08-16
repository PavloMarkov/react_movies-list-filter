import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = moviesFromServer
    .filter(movie => (
      movie.title.toLowerCase().includes(query.toLowerCase())
      || movie.description.toLowerCase().includes(query.toLowerCase())));

  return (
    <div className="page">
      <div className="page-content">
        <div className="box">
          <div className="field">
            <label htmlFor="search-query" className="label">
              Search movie
            </label>

            <div className="control">
              <input
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
                onChange={(event) => setQuery(event.target.value)}
              />
            </div>
          </div>
        </div>
        {visibleMovies.length === 0
          ? <strong> Nothing was found </strong>
          : <MoviesList movies={visibleMovies} />}

      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};