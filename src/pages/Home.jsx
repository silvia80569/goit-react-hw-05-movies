import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    Axios.get(
      'https://api.themoviedb.org/3/movie/popular?api_key=65c8682b0ea793c5f0ab74a2479dcb8c'
    )

      .then(res => {
        console.log(res.data.results);
        setMovies(res.data.results);
      })
      .catch(err => console.error('Error fetching movies:', err));
  }, []);
  return (
    <>
      <h1>Home</h1>

      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <strong> {movie.title}</strong>
            <Link to={`/movies/${movie.id}`}>More info</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
