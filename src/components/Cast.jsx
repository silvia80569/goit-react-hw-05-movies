import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Axios from 'axios';
import styles from './Cast.module.css';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    Axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=65c8682b0ea793c5f0ab74a2479dcb8c`
    )
      .then(res => {
        console.log('Cast:', res.data.cast);
        setCast(res.data.cast);
      })
      .catch(err => console.error('Error fetching cast:', err))
      .finally(() => {
        setLoading(false);
      });
  }, [movieId]);

  if (loading) return <h1>Loading...</h1>;

  return (
    <div className={styles.castContainer}>
      <button className={styles.button} onClick={() => navigate(-1)}>
        Back
      </button>
      <h1 className={styles.castTitle}>Cast</h1>
      {cast.length > 0 ? (
        <ul className={styles.castList}>
          {cast.map(member => (
            <li className={styles.castMember} key={member.id}>
              <strong>{member.name}</strong> as {member.character}
            </li>
          ))}
        </ul>
      ) : (
        <p>No cast information found.</p>
      )}
    </div>
  );
};

export default Cast;
