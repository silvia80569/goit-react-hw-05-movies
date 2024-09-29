import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Axios from 'axios';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    Axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=65c8682b0ea793c5f0ab74a2479dcb8c`
    )
      .then(response => {
        console.log('Cast:', response.data.cast);
        setCast(response.data.cast);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching cast:', err);
        setLoading(false);
      });
  }, [movieId]);

  if (loading) return <h1>Loading...</h1>;

  return (
    <>
      <button onClick={() => navigate(-1)}>Back</button>
      <h2>Cast</h2>
      <ul>
        {cast.map(actor => (
          <li key={actor.cast_id}>
            {actor.name} as {actor.character}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Cast;
