import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FilmCard from './FilmCard';
import Filter from './Filter';
import FilmList from './MovieList';
import { Link } from 'react-router-dom';

function FilmDetails() {
  return (
    <div>
      <h2>Page de détails du film</h2>
      <Link to="/">Retour à la page d'accueil</Link>
    </div>
  );
}

function App() {
  const [films, setFilms] = useState([
    {
      title: 'Film 1',
      description: 'Death Note',
      posterURL: '/images/28406.webp',
      rating: 7.5,
      trailerLink: 'https://www.youtube.com/watch?v=example1',
    },
    {
      title: 'Film 2',
      description: 'Death Note',
      posterURL: '/images/28406.webp',
      rating: 8.0,
      trailerLink: 'https://www.youtube.com/watch?v=example2',
    },
  ]);

  const [filteredFilms, setFilteredFilms] = useState(films);

  const addFilm = (newFilm) => {
    setFilms([...films, newFilm]);
    setFilteredFilms([...films, newFilm]);
  };

  const filterFilms = ({ title, rating }) => {
    const filtered = films.filter((film) => {
      return film.title.toLowerCase().includes(title.toLowerCase()) && film.note >= rating;
    });
    setFilteredFilms(filtered);
  };

  return (
    <Router>
      <div className="app">
        <h1>Liste de Films</h1>
        <Filter onFilterChange={filterFilms} />
        <button onClick={() => filterFilms({ title: '', rating: 0 })}>Effacer le filtre</button>
        <FilmCard title="" description="" posterURL="" note="" trailerLink="" />
        <FilmList films={filteredFilms} />

      <Routes>
        <Route path="/" element={<FilmList films={filteredFilms} />} />
        <Route path="/film/:filmTitle" element={<FilmDetails />} />
      </Routes>

      </div>
    </Router>
  );
}

export default App;


