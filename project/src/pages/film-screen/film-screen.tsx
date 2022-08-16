import { Link, useParams } from 'react-router-dom';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import TabOverview from '../../components/tab-overview/tab-overview';
import TabDetails from '../../components/tab-details/tab-details';
import TabReviews from '../../components/tab-reviews/tab-reviews';
import { useState, useEffect } from 'react';
import FilmsList from '../../components/films-list/films-list';
import { TabName } from '../../consts';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import { useAppSelector, useAppDispatch } from '../../hooks/';
import { fetchCommentsAction, fetchFilmAction, fetchSimilarFilmsAction } from '../../store/api-actions';
import { AuthorizationStatus } from '../../consts';

function FilmScreen(): JSX.Element | null {
  const [activeTab, setActiveTab] = useState('Overview');
  const {id} = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFilmAction(Number(id)));
    dispatch(fetchSimilarFilmsAction(Number(id)));
    dispatch(fetchCommentsAction(Number(id)));
  }, []);

  const {similarFilmsList, film, comments, authorizationStatus } = useAppSelector((state) => state);

  if (!film) {
    return <NotFoundScreen/>;
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
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
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
