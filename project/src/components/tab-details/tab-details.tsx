import React from 'react';
import { Film } from '../../types';
import { Link } from 'react-router-dom';
import { timeConvertation } from '../../utils/utils';

type TabDetailsProps = {
  film: Film;
  onTabClick: (datasetValue: string | undefined) => void;
}

function TabDetails({film, onTabClick}: TabDetailsProps): JSX.Element {


  return (
    <>
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
                film.starring.join(', \n')
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
    </>
  );
}

export default TabDetails;
