import { Link, useParams } from 'react-router-dom';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import Tabs from '../../components/tabs/tabs';
import TabOverview from '../../components/tab-overview/tab-overview';
import TabDetails from '../../components/tab-details/tab-details';
import TabReviews from '../../components/tab-reviews/tab-reviews';
import { Film, Review } from '../../types';
import { useState } from 'react';
import FilmsList from '../../components/films-list/films-list';

type FilmScreenProps = {
  filmsList: Film[];
  reviewsList: Review[];
}

function FilmScreen({filmsList, reviewsList}: FilmScreenProps): JSX.Element {
  const [activeTab, setActiveTab] = useState('Overview');
  const {id} = useParams() as {id: string};
  const film = filmsList[parseInt(id, 10) - 1];

  const handleClick = (gettedDatasetValue: string | undefined) => {
    const datasetValue = gettedDatasetValue as string;
    setActiveTab(datasetValue);
  };

  const renderSwitch = (switchParameter: string): JSX.Element => {
    switch(switchParameter) {
      case 'Overview':
        return <TabOverview film={film} onTabClick={handleClick}/>;
      case 'Details':
        return <TabDetails film={film} onTabClick={handleClick}/>;
      case 'Reviews':
        return <TabReviews reviewsList={reviewsList} onTabClick={handleClick}/>;
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
                <Link to={`/films/${film.id}/review`} className="btn film-card__button">Add review</Link>
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
              <Tabs title=''>
                {renderSwitch(activeTab)}
              </Tabs>
            </div>

          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <FilmsList
            filmsList={filmsList}
            inMoreLikeThis
            genreOfFilm={film.genre}
          />

        </section>

        <Footer/>
      </div>
    </>
  );
}

export default FilmScreen;
