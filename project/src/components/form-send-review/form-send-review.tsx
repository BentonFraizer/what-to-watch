import React, { useState, FormEvent, useEffect } from 'react';
import { RATING_NUMBERS } from '../../consts';
import { PostCommentData } from '../../types/index';
import { postCommentAction } from '../../store/api-actions';
import { useAppDispatch } from '../../hooks';

const MIN_REVIEW_LENGTH = 50;
const MAX_REVIEW_LENGTH = 400;

type FormSendReviewProps = {
  currentFilmId: string;
}

function FormSendReview({currentFilmId}: FormSendReviewProps) {
  const [formData, setFormData] = useState({
    rating: '',
    comment: '',
  });

  //Реализация активности/неактивности кнопки "Post"
  const [isSubmitButtonDisabled, setIsSubmitButtonDisabled] = useState(true);
  useEffect(() => {
    if (formData.rating !== '' && formData.comment.length >= MIN_REVIEW_LENGTH && formData.comment.length <= MAX_REVIEW_LENGTH) {
      setIsSubmitButtonDisabled(false);
    } else {
      setIsSubmitButtonDisabled(true);
    }
  }, [formData.rating, formData.comment.length]);


  const dispatch = useAppDispatch();

  const handleOptionChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const {value} = evt.target;
    setFormData({...formData, rating: value});
  };

  const handleTextareaChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    const {value} = evt.target;
    setFormData({...formData, comment: value});
  };

  const onSubmit = (comment: PostCommentData) => {
    dispatch(postCommentAction(comment));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if(formData.rating !== '' && formData.comment.length >= MIN_REVIEW_LENGTH && formData.comment.length <= MAX_REVIEW_LENGTH) {
      onSubmit({
        rating: formData.rating,
        comment: formData.comment,
        filmId: currentFilmId,
      });
    }
  };

  return (
    <div className="add-review">
      <form
        action="#"
        className="add-review__form"
        onSubmit={handleSubmit}
      >
        <div className="rating">
          <div className="rating__stars">
            {
              RATING_NUMBERS.map((ratingNumber) => (
                <React.Fragment key={ratingNumber}>
                  <input key={ratingNumber} onChange={handleOptionChange} className="rating__input" id={`star-${ratingNumber}`} type="radio" name="rating" value={ratingNumber}/>
                  <label className="rating__label" htmlFor={`star-${ratingNumber}`}>{`Rating ${ratingNumber}`}</label>
                </React.Fragment>
              ))
            }
          </div>
        </div>

        <div className="add-review__text">
          <textarea onChange={handleTextareaChange} className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text"></textarea>
          <div className="add-review__submit">
            <button
              className="add-review__btn"
              type="submit"
              disabled={isSubmitButtonDisabled}
            >
              Post
            </button>
          </div>

        </div>
      </form>
    </div>
  );
}

export default FormSendReview;
