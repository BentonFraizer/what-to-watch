import FilmsList from '../../components/films-list/films-list';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { useAppSelector, useAppDispatch } from '../../hooks';
import GenresList from '../../components/genres-list/genres-list';
import { getGenres } from '../../utils/utils';
import { useState, useEffect } from 'react';
import ShowMore from '../../components/show-more/show-more';
import { changeGenre } from '../../store/action';
import { fetchFilmsAction, fetchPromoFilmAction } from '../../store/api-actions';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../consts';

function MainScreen(): JSX.Element {
  const {filmsList, promoFilm} = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  const currentGenre = useAppSelector((state) => state.genre);

  const filteredFilmsList = filmsList.filter((film) => {
    if (currentGenre === 'All genres') {
      return filmsList;
    }
    return film.genre === currentGenre;
  }
  );

  useEffect(() => {
    if (filmsList.length === 0) {
      dispatch(fetchFilmsAction());
    }

    if(!promoFilm) {
      dispatch(fetchPromoFilmAction());
    }

    dispatch(changeGenre('All genres'));
  }, [filmsList, dispatch, promoFilm]);

  const FILMS_COUNT_PER_STEP = 8;
  const filmsCount = filteredFilmsList.length;
  const [renderedFilmsCount, setRenderedFilmsCount] = useState<number>(FILMS_COUNT_PER_STEP);
  const [showMoreButtonVisibility, setShowMoreButtonVisibility] = useState<boolean>(true);
  let renderedFilms = filteredFilmsList.slice(0, Math.min(filmsCount, renderedFilmsCount));

  //Обнуление счетчика отрисованных фильмов при смене жанра
  const handleChangeGenreClick = () => {
    setRenderedFilmsCount(FILMS_COUNT_PER_STEP);
  };

  //Код для показа/скрывания кнопки Show more
  useEffect(() => {
    if (renderedFilms.length >= FILMS_COUNT_PER_STEP && renderedFilms.length < filmsCount) {
      setShowMoreButtonVisibility(true);
    } else {
      setShowMoreButtonVisibility(false);
    }
  }, [renderedFilms, filmsCount, showMoreButtonVisibility]);

  //Обработчик нажатия на кнопку Show more. Отрисовывает ещё 8 фильмов или все оставшиеся, если их меньше 8 и скрывает кнопку
  const handleLoadMoreButtonClick = () => {
    const newRenderedFilmsCount = Math.min(filmsCount, renderedFilmsCount + FILMS_COUNT_PER_STEP);
    renderedFilms = filteredFilmsList.slice(renderedFilmsCount, newRenderedFilmsCount);
    setRenderedFilmsCount(newRenderedFilmsCount);

    if (newRenderedFilmsCount >= filmsCount) {
      setShowMoreButtonVisibility(false);
    }

    return renderedFilms;
  };

  const genres = getGenres(filmsList);

  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={promoFilm?.backgroundImage} alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header/>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={promoFilm?.posterImage} alt="The Grand Budapest Hotel poster" width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{promoFilm?.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{promoFilm?.genre}</span>
                <span className="film-card__year">{promoFilm?.released}</span>
              </p>

              <div className="film-card__buttons">
                <Link to={`/player/${promoFilm?.id}`} className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </Link>
                <Link to={AppRoute.MyList} className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenresList
            genres = {genres}
            currentGenre = {currentGenre}
            onChangeClick = {handleChangeGenreClick}
          />

          <FilmsList filmsList = {renderedFilms}/>

          {showMoreButtonVisibility && <ShowMore onButtonClick = {handleLoadMoreButtonClick}/>}
        </section>
        <Footer/>
      </div>
    </>
  );
}

export default MainScreen;
