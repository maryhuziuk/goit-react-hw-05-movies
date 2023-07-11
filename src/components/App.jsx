import { lazy, Suspense } from 'react';
import {Route, Routes, Navigate } from 'react-router-dom';
import SharedLayout from '../components/SharedLayout/SharedLayout';

const Home = lazy(() => import('../pages/Home/Home.jsx'));
const MovieDetails = lazy(() =>
  import('../pages/MoviesDetails/MoviesDetails.jsx'));
const Movies = lazy(() => import('../pages/Movies/Movies.jsx'));
const Cast = lazy(() => import('../components/Cast/Cast.jsx'));
const Reviews = lazy(() => import('../components/Reviews/Reviews.jsx'));

export const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
};
