import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Axios from 'axios';

const Review = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    Axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=65c8682b0ea793c5f0ab74a2479dcb8c`
    )
      .then(response => {
        console.log('Reviews:', response.data.results);
        setReviews(response.data.results);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching reviews:', err);
        setLoading(false);
      });
  }, [movieId]);

  if (loading) return <h1>Loading...</h1>;

  return (
    <div>
      <button onClick={() => navigate(-1)}>Back</button>
      <h1>Reviews</h1>
      <ul>
        {reviews.map(review => (
          <li key={review.id}>
            <h3>{review.author}</h3>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Review;
