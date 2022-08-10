import FilmsList from '../../components/films-list/films-list';
import { Film } from '../../types';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { useAppSelector, useAppDispatch } from '../../hooks';
import GenresList from '../../components/genres-list/genres-list';
import { getGenres } from '../../utils/utils';
import { useState, useEffect } from 'react';
import ShowMore from '../../components/show-more/show-more';
import { applyFilter } from '../../store/action';

type MainScreenProps = {
  promoFilm: Film;
}

function MainScreen(props: MainScreenProps): JSX.Element {
  const {name, genre, released} = props.promoFilm;
  const {filmsList, filteredFilmsList} = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(applyFilter('All genres'));
  }, []);

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
  const currentGenre = useAppSelector((state) => state.genre);

  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header/>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{genre}</span>
                <span className="film-card__year">{released}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>
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
