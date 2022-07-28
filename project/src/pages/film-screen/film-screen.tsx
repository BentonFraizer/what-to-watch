import { Link, useParams } from 'react-router-dom';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import Tabs from '../../components/tabs/tabs';
import TabOverview from '../../components/tab-overview/tab-overview';
import TabDetails from '../../components/tab-details/tab-details';
import { Film } from '../../types';
import { useState } from 'react';

type FilmScreenProps = {
  filmsList: Film[];
}

function FilmScreen(props: FilmScreenProps): JSX.Element {
  const [activeTab, setActiveTab] = useState('Overview');
  const filmsList = props.filmsList;
  const {id} = useParams() as {id: string};
  const film = filmsList[parseInt(id, 10) - 1];

  const handleClick = (gettedDatasetValue: string | undefined) => {
    const datasetValue = gettedDatasetValue as string;
    // console.log(gettedDatasetValue);
    setActiveTab(datasetValue);
  };

  const renderSwitch = (switchParameter: string): JSX.Element => {
    switch(switchParameter) {
      case 'Overview':
        return <TabOverview film={film} onTabClick={handleClick}/>;
      case 'Details':
        return <TabDetails film={film} onTabClick={handleClick}/>;
      case 'Reviews':
        return <TabDetails film={film} onTabClick={handleClick}/>;
      default:
        return <TabOverview film={film} onTabClick={handleClick}/>;
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

          <div className="catalog__films-list">
            <article className="small-film-card catalog__films-card">
              <div className="small-film-card__image">
                <img src="img/fantastic-beasts-the-crimes-of-grindelwald.jpg" alt="Fantastic Beasts: The Crimes of Grindelwald" width="280" height="175" />
              </div>
              <h3 className="small-film-card__title">
                <Link className="small-film-card__link" to="/films/5">Fantastic Beasts: The Crimes of Grindelwald</Link>
              </h3>
            </article>

            <article className="small-film-card catalog__films-card">
              <div className="small-film-card__image">
                <img src="img/bohemian-rhapsody.jpg" alt="Bohemian Rhapsody" width="280" height="175" />
              </div>
              <h3 className="small-film-card__title">
                <Link className="small-film-card__link" to="/films/5">Bohemian Rhapsody</Link>
              </h3>
            </article>

            <article className="small-film-card catalog__films-card">
              <div className="small-film-card__image">
                <img src="img/macbeth.jpg" alt="Macbeth" width="280" height="175" />
              </div>
              <h3 className="small-film-card__title">
                <Link className="small-film-card__link" to="/films/5">Macbeth</Link>
              </h3>
            </article>

            <article className="small-film-card catalog__films-card">
              <div className="small-film-card__image">
                <img src="img/aviator.jpg" alt="Aviator" width="280" height="175" />
              </div>
              <h3 className="small-film-card__title">
                <Link className="small-film-card__link" to="/films/5">Aviator</Link>
              </h3>
            </article>
          </div>
        </section>

        <Footer/>
      </div>
    </>
  );
}

export default FilmScreen;
