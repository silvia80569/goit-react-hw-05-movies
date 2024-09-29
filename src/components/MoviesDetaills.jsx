import { useEffect, useState } from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';
import Axios from 'axios';
import styles from './MoviesDetailles.module.css';

const MoviesDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=65c8682b0ea793c5f0ab74a2479dcb8c`
    )
      .then(response => {
        console.log('Movie:', response.data);
        setMovie(response.data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching movie:', err);
        setLoading(false);
      });
  }, [movieId]);

  if (loading) return <h1>Loading...</h1>;

  return (
    <div className={styles.container}>
      <Link className={styles.backLink} to="/movies">
        Back to movies
      </Link>

      {movie ? (
        <>
          <h1 className={styles.movieTitle}>{movie.title}</h1>
          <img
            className={styles.movieImage}
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
          <p className={styles.movieOverview}>{movie.overview}</p>
          <p className={styles.releaseDate}>
            Release date: {new Date(movie.release_date).toLocaleDateString()}
          </p>

          <nav className={styles.nav}>
            <Link className={styles.navLink} to="cast">
              Cast
            </Link>
            <Link className={styles.navLink} to="review">
              Review
            </Link>
          </nav>

          <Outlet />
        </>
      ) : (
        <p>No movie found!</p>
      )}
    </div>
  );
};

export default MoviesDetails;
