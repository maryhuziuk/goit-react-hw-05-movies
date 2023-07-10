import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovieByQuery } from '../../servises/api.js';

import SearchFilm from '../../components/SearchFilm/SearchFilm.jsx';
import FilmList from '../../components/FilmList/FilmList';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const currentQuery = searchParams.get('query');
    if (!currentQuery) return;

    const fetchMovieByQuery = async () => {
      try {
        const movieByQuery = await getMovieByQuery(currentQuery);
        setMovies(movieByQuery);
      } catch (e) {
        console.log(e);
      }
    };
    fetchMovieByQuery();
  }, [searchParams]);

  return (
    <>
      <SearchFilm setSearchParams={setSearchParams} />
      {movies.length > 0 && <FilmList movies={movies} />}
    </>
  );
};

export default Movies;