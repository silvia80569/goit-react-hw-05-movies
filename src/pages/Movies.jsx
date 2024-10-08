import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Route, Routes, Link, useSearchParams } from 'react-router-dom';
import Axios from 'axios';
import styles from './Movies.module.css';

const MoviesDetails = lazy(() => import('../components/MoviesDetaills'));
const Cast = lazy(() => import('../components/Cast'));
const Review = lazy(() => import('../components/Review'));

const Movies = () => {
  const [keyword, setKeyword] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const query = searchParams.get('query') || '';
    setKeyword(query);
    if (query) {
      fetchMovies(query);
    }
  }, [searchParams]);

  const fetchMovies = async query => {
    try {
      const response = await Axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=65c8682b0ea793c5f0ab74a2479dcb8c&query=${query}`
      );
      setMovies(response.data.results);
    } catch (err) {
      console.error('Error fetching movies:', err);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    setSearchParams({ query: keyword });
    setKeyword('');
  };

  return (
    <div className={styles.container}>
      <Link to="/">Back to ...</Link>
      <h1>Movies</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          placeholder="Search movie..."
          value={keyword}
          onChange={e => setKeyword(e.target.value)}
        />
        <button className={styles.button} type="submit">
          Search
        </button>
      </form>

      <ul className={styles.list}>
        {movies.map(movie => (
          <li className={styles.listItem} key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>

      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route path=":movieId" element={<MoviesDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="review" element={<Review />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};

export default Movies;
