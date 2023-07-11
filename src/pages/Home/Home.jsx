import { useEffect, useState } from 'react';
import { SectionTitle} from '../../components/FilmList/FilmList.styled.js';

import { getTrendingMovies } from '../../servises/api.js';

import FilmList from 'components/FilmList/FilmList';
const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(setMovies);
  }, []);

  return (
    <>
     <SectionTitle>Trending today</SectionTitle>
      <FilmList movies={movies} />
    </>
  );
};

export default Home;