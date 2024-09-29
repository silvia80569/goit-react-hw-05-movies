import { useEffect, useState } from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';
import Axios from 'axios';

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
    <div>
      <Link to="/movies">Back to movies</Link>

      {movie ? (
        <>
          <h1>{movie.title}</h1>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
          <p>{movie.overview}</p>
          <p>
            Release date: {new Date(movie.release_date).toLocaleDateString()}
          </p>

          {/* Rutas relativas */}
          <nav>
            <Link to="cast">Cast</Link>
            <Link to="review">Review</Link>
          </nav>

          {/* Renderizar contenido de las rutas anidadas */}
          <Outlet />
        </>
      ) : (
        <p>No movie found!</p>
      )}
    </div>
  );
};

export default MoviesDetails;
