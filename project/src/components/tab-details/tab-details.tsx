import React from 'react';
import { Film } from '../../types';
import { Link } from 'react-router-dom';

type TabDetailsProps = {
  film: Film;
  onTabClick: (datasetValue: string | undefined) => void;
}

function TabDetails({film, onTabClick}: TabDetailsProps): JSX.Element {
  const timeConvertation = (minutesAmount:number): string => {
    const hours = (minutesAmount / 60);
    const roundHours = Math.floor(hours);
    const minutes = (hours - roundHours) * 60;
    const roundMinutes = Math.round(minutes);
    if (roundHours === 0) {
      return `${roundMinutes}m`;
    }
    return `${roundHours}h ${roundMinutes}m`;
  };

  return (
    <React.Fragment>
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li className="film-nav__item"
            onClick={
              (evt) => {
                evt.preventDefault();
                onTabClick((evt.target as HTMLUListElement).dataset.filmTab);
              }
            }
          >
            <Link to={`/films/${film.id}`} data-film-tab='Overview' className="film-nav__link">Overview</Link>
          </li>
          <li className="film-nav__item film-nav__item--active"
            onClick={
              (evt) => {
                evt.preventDefault();
                onTabClick((evt.target as HTMLUListElement).dataset.filmTab);
              }
            }
          >
            <a href="!" data-film-tab='Details' className="film-nav__link">Details</a>
          </li>
          <li className="film-nav__item"
            onClick={
              (evt) => {
                evt.preventDefault();
                onTabClick((evt.target as HTMLUListElement).dataset.filmTab);
              }
            }
          >
            <a href="!" data-film-tab='Reviews' className="film-nav__link">Reviews</a>
          </li>
        </ul>
      </nav>

      <div className="film-card__text film-card__row">
        <div className="film-card__text-col">
          <p className="film-card__details-item">
            <strong className="film-card__details-name">Director</strong>
            <span className="film-card__details-value">{film.director}</span>
          </p>
          <p className="film-card__details-item">
            <strong className="film-card__details-name">Starring</strong>
            <span className="film-card__details-value">
              {
                film.starring.map((actor: string) => (
                  `${actor}, \n`
                ))
              }
            </span>
          </p>
        </div>

        <div className="film-card__text-col">
          <p className="film-card__details-item">
            <strong className="film-card__details-name">Run Time</strong>
            <span className="film-card__details-value">{timeConvertation(film.runTime)}</span>
          </p>
          <p className="film-card__details-item">
            <strong className="film-card__details-name">Genre</strong>
            <span className="film-card__details-value">{film.genre}</span>
          </p>
          <p className="film-card__details-item">
            <strong className="film-card__details-name">Released</strong>
            <span className="film-card__details-value">{film.released}</span>
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default TabDetails;
