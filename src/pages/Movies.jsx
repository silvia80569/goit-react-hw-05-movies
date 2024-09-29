import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MoviesDetaills from '../components/MoviesDetaills';
import Cast from 'components/Cast';
import Review from 'components/Review';

const Movies = () => {
  return (
    <>
      <h1>Movies</h1>
      <Routes>
        <Route path=":movieId" element={<MoviesDetaills />}>
          <Route path="cast" element={<Cast />} />
          <Route path="cast" element={<Review />} />
        </Route>
      </Routes>
    </>
  );
};

export default Movies;
