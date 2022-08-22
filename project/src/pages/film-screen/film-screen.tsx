import { Link, useParams } from 'react-router-dom';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import TabOverview from '../../components/tab-overview/tab-overview';
import TabDetails from '../../components/tab-details/tab-details';
import TabReviews from '../../components/tab-reviews/tab-reviews';
import { useState, useEffect } from 'react';
import FilmsList from '../../components/films-list/films-list';
import { TabName, AuthorizationStatus, AppRoute } from '../../consts';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import { useAppSelector, useAppDispatch } from '../../hooks/';
import { fetchCommentsAction, fetchFilmAction, fetchSimilarFilmsAction, changeFilmStatusAction, fetchFavoriteFilmsAction } from '../../store/api-actions';
import LoadingScreen from '../../pages/loading-screen/loading-screen';
import { getSimilarFilmsList, getFilm, getComments, getLoadedDataStatus, getFavoriteFilms } from '../../store/site-data/selectors';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { redirectToRoute } from '../../store/action';

function FilmScreen(): JSX.Element | null {
  const [activeTab, setActiveTab] = useState('Overview');
  const {id} = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFilmAction(Number(id)));
    dispatch(fetchSimilarFilmsAction(Number(id)));
    dispatch(fetchCommentsAction(Number(id)));
    dispatch(fetchFavoriteFilmsAction());
  }, [dispatch, id]);

  const similarFilmsList = useAppSelector(getSimilarFilmsList);
  const film = useAppSelector(getFilm);
  const comments = useAppSelector(getComments);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isDataLoaded = useAppSelector(getLoadedDataStatus);
  const favoriteFilmsList = useAppSelector(getFavoriteFilms);

  if (!film) {
    return <NotFoundScreen/>;
  }

  if (isDataLoaded) {
    return (
      <LoadingScreen/>
    );
  }

  const handleClick = (gettedDatasetValue: string | undefined) => {
    const datasetValue = gettedDatasetValue as string;
    setActiveTab(datasetValue);
  };

  const renderSwitch = (switchParameter: string): JSX.Element => {
    switch(switchParameter) {
      case TabName.Overview:
        return <TabOverview film={film} onTabClick={handleClick}/>;
      case TabName.Details:
        return <TabDetails film={film} onTabClick={handleClick}/>;
      case TabName.Reviews:
        return <TabReviews reviewsList={comments} onTabClick={handleClick}/>;
      default:
        return <span></span>;
    }
  };

  //Функция для обновления изображения кнопки "My list"
  const getFavoriteIcon = (filmStatus: boolean): JSX.Element => {
    if (filmStatus) {
      return (
        <svg viewBox="0 0 18 14" width="18" height="14">
          <use xlinkHref="#in-list"></use>
        </svg>
      );
    }
    return (
      <svg viewBox="0 0 19 20" width="19" height="20">
        <use xlinkHref="#add"></use>
      </svg>
    );
  };
  const favoriteIcon = getFavoriteIcon(film.isFavorite);

  //Получение количества фильмов, добавленных в список "к просмотру"
  let filmsAmount = favoriteFilmsList.length;
  if (filmsAmount === undefined) {
    filmsAmount = 0;
  }

  const getFilmsAmountToRender = (favoriteFimsAmount: number) => {
    if (favoriteFimsAmount === 0) {
      return 0;
    }
    return favoriteFimsAmount;
  };
  const filmsAmountToRender = getFilmsAmountToRender(filmsAmount);

  return (
    <>
      <section className="film-card film-card--full" style={{backgroundColor: film.backgroundColor}}>
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={film.backgroundImage} alt={film.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header/>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film.genre}</span>
                <span className="film-card__year">{film.released}</span>
              </p>

              <div className="film-card__buttons">
                <Link to={`/player/${film.id}`} className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </Link>

                <button
                  className="btn btn--list film-card__button"
                  type="button"
                  onClick={() => {
                    if (authorizationStatus !== AuthorizationStatus.Auth) {
                      dispatch(redirectToRoute(AppRoute.SignIn));
                    }
                    dispatch(changeFilmStatusAction({
                      filmId: film.id,
                      status: Number(!film.isFavorite),
                    }));
                    dispatch(fetchFilmAction(Number(id)));
                    dispatch(fetchFavoriteFilmsAction());
                  }}
                >

                  {favoriteIcon}

                  <span>My list</span>
                  <span className="film-card__count">{filmsAmountToRender}</span>
                </button>
                {authorizationStatus === AuthorizationStatus.Auth &&
                  <Link to={`/films/${film.id}/review`} className="btn film-card__button">Add review</Link>}
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={film.posterImage} alt={`${film.name} poster`} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              {renderSwitch(activeTab)}
            </div>

          </div>
        </div>
      </section>

      <div className="page-content">
        {
          similarFilmsList.length > 1 &&
            <section className="catalog catalog--like-this">
              <h2 className="catalog__title">More like this</h2>

              <FilmsList
                filmsList={similarFilmsList}
                isSimilarFilms
                genreOfFilm={film.genre}
                idOfFilm={film.id}
              />

            </section>
        }


        <Footer/>
      </div>
    </>
  );
}

export default FilmScreen;
