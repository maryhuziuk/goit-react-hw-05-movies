import { Suspense, useEffect, useState } from 'react';
import {
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';
import { getMovieById } from '../../servises/api.js';
import {
    NavItemLink,
  FilmWrapper,
  StyledList,
  ListItem,
  FilmImg,
  FilmTitle,
  FilmDescr,
  GoBackLink,
  FilmSubTitle,
    StyledListDescr,
  NavLinkItem,
} from './MoviesDetails.styled.js';

const defaultImg = '<https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700>'

const MoviesDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState('');
  const location = useLocation();

  const backLinkHref = location.state?.from ?? '/movies';
  useEffect(() => {
    const fetchMovieById = async () => {
      try {
        const movieById = await getMovieById(movieId);
        setMovie(movieById);
      } catch (e) {
        console.log(e);
      }
    };
    fetchMovieById();
  }, [movieId]);

  return (
    <>
      <GoBackLink>
        <NavItemLink to={backLinkHref}>
          Go back<span>.</span>
        </NavItemLink>
      </GoBackLink>
      <FilmWrapper>
        <FilmImg src={  
          movie.poster_path ?
          `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
          : defaultImg
        }
        width={250}
        alt="poster"
        />
        <div>
          <FilmTitle>{movie.original_title}</FilmTitle>
          <FilmSubTitle>Rating: {Math.round(movie.vote_average)}</FilmSubTitle>
          <FilmSubTitle>Overview</FilmSubTitle>
          <FilmDescr>{movie.overview}</FilmDescr>
          <FilmSubTitle>Genres</FilmSubTitle>
          <StyledListDescr>
            {movie.genres?.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </StyledListDescr>
        </div>
      </FilmWrapper>
      <div>
        <h2>Additional information</h2>
        <StyledList>
          <ListItem>
            <NavLinkItem to="cast" state={location.state}>
              Cast
            </NavLinkItem>
          </ListItem>
          <ListItem>
            <NavLinkItem to="reviews" state={location.state}>
              Reviews
            </NavLinkItem>
          </ListItem>
        </StyledList>
        <Suspense fallback={<div>Loading subpage...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};

export default MoviesDetails;