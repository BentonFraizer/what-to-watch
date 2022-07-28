import React from 'react';
import { Review } from '../../types';
import { default as dayjs } from 'dayjs';

type TabReviewsProps = {
  reviewsList: Review[];
  onTabClick: (datasetValue: string | undefined) => void;
}

function TabReviews(props: TabReviewsProps): JSX.Element {
  const reviewsList = props.reviewsList;

  return (
    <React.Fragment>
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li className="film-nav__item"
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
          <li className="film-nav__item film-nav__item--active"
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

      <div className="film-card__reviews film-card__row">
        <div className="film-card__reviews-col">

          {
            reviewsList.map((review) => (
              <React.Fragment key={review.id}>
                <div className="review">
                  <blockquote className="review__quote">
                    <p className="review__text">{review.comment}</p>

                    <footer className="review__details">
                      <cite className="review__author">{review.user.name}</cite>
                      <time className="review__date" dateTime={review.date}>{dayjs(review.date).format('MMMM D, YYYY')}</time>
                    </footer>
                  </blockquote>

                  <div className="review__rating">{review.rating}</div>
                </div>
              </React.Fragment>
            ))
          }

        </div>
      </div>
    </React.Fragment>
  );
}

export default TabReviews;
