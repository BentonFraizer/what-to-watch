import React from 'react';
import { Comment } from '../../types';
import { default as dayjs } from 'dayjs';

type TabReviewsProps = {
  reviewsList: Comment[];
  onTabClick: (datasetValue: string | undefined) => void;
}

function TabReviews(props: TabReviewsProps): JSX.Element {
  const {reviewsList} = props;
  const reversedReviewsList = reviewsList.slice().reverse();

  const getReviewsTemplate = (reviews: Comment[]) => {
    if (reviews.length <= 3) {
      return (
        <div className="film-card__reviews film-card__row">
          <div className="film-card__reviews-col">

            {
              reviews.map((review) => (
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
      );
    }
    if (reviews.length > 3) {
      const firstColReviews = reviews.slice(0, 3);
      const secondColReviews = reviews.slice(3, 6);

      return (
        <div className="film-card__reviews film-card__row">
          <div className="film-card__reviews-col">

            {
              firstColReviews.map((review) => (
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
          <div className="film-card__reviews-col">
            {
              secondColReviews.map((review) => (
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
      );
    }
  };

  const reviewsTemplate = getReviewsTemplate(reversedReviewsList);

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

      {reviewsTemplate}

    </React.Fragment>
  );
}

export default TabReviews;
