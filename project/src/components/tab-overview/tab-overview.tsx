import React from 'react';
import { Film } from '../../types';
import { Rating } from '../../consts';

type TabOverviewProps = {
  film: Film;
  onTabClick: (datasetValue: string | undefined) => void;
}

function TabOverview(props: TabOverviewProps): JSX.Element {
  const film = props.film;
  const getTextRating = (rating: number): string => {
    const RATING_BAD_FROM = 0;
    const RATING_BAD_TO = 3;
    const RATING_NORMAL_FROM = 3;
    const RATING_NORMAL_TO = 5;
    const RATING_GOOD_FROM = 5;
    const RATING_GOOD_TO = 8;
    const RATING_VERY_GOOD_FROM = 8;
    const RATING_VERY_GOOD_TO = 10;
    const RATING_AWESOME = 10;

    if (rating >= RATING_BAD_FROM && rating <= RATING_BAD_TO) {
      return Rating.Bad;
    }

    if (rating >= RATING_NORMAL_FROM && rating <= RATING_NORMAL_TO) {
      return Rating.Normal;
    }

    if (rating >= RATING_GOOD_FROM && rating <= RATING_GOOD_TO) {
      return Rating.Good;
    }

    if (rating >= RATING_VERY_GOOD_FROM && rating < RATING_VERY_GOOD_TO) {
      return Rating.VeryGood;
    }

    if (rating === RATING_AWESOME) {
      return Rating.Awesome;
    }
    return '';
  };

  return (
    <React.Fragment>
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li className="film-nav__item film-nav__item--active"
            onClick={
              (evt) => {
                evt.preventDefault();
                props.onTabClick((evt.target as HTMLUListElement).dataset.filmTab);
              }
            }
          >
            <a href="!" data-film-tab='Overview' className="film-nav__link">Overview</a>
          </li>
          <li className="film-nav__item"
            onClick={
              (evt) => {
                evt.preventDefault();
                props.onTabClick((evt.target as HTMLUListElement).dataset.filmTab);
              }
            }
          >
            <a href="!" data-film-tab='Details' className="film-nav__link">Details</a>
          </li>
          <li className="film-nav__item"
            onClick={
              (evt) => {
                evt.preventDefault();
                props.onTabClick((evt.target as HTMLUListElement).dataset.filmTab);
              }
            }
          >
            <a href="!" data-film-tab='Reviews' className="film-nav__link">Reviews</a>
          </li>
        </ul>
      </nav>

      <div className="film-rating">
        <div className="film-rating__score">{film.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{getTextRating(film.rating)}</span>
          <span className="film-rating__count">{film.scoresCount} ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{film.description}</p>
        <p className="film-card__director"><strong>Director: {film.director}</strong></p>
        <p className="film-card__starring"><strong>Starring: {film.starring.join(', ')} and other</strong></p>
      </div>
    </React.Fragment>
  );
}

export default TabOverview;
