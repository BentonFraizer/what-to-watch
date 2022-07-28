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
    if (rating >= 0 && rating <= 3) {
      return Rating.Bad;
    }

    if (rating >= 3 && rating <= 5) {
      return Rating.Normal;
    }

    if (rating >= 5 && rating <= 8) {
      return Rating.Good;
    }

    if (rating >= 5 && rating < 10) {
      return Rating.VeryGood;
    }

    if (rating === 10) {
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
      </div>
    </React.Fragment>
  );
}

export default TabOverview;
