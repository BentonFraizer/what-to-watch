import { useState } from 'react';
import { ratingNumbers } from '../../consts';

function FormSendReview() {
  const [formData, setFormData] = useState({
    ratingValue: '',
    reviewText: '',
  });

  const optionChangeHandle = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const {value} = evt.target;
    setFormData({...formData, ratingValue: value});
  };

  return (
    <div className="add-review">
      <form action="#" className="add-review__form">
        <div className="rating">
          <div className="rating__stars">
            {
              ratingNumbers.map((ratingNumber) => (
                <>
                  <input onChange={optionChangeHandle} className="rating__input" id={`star-${ratingNumber}`} type="radio" name="rating" value={ratingNumber}/>
                  <label className="rating__label" htmlFor={`star-${ratingNumber}`}>{`Rating ${ratingNumber}`}</label>
                </>
              ))
            }
          </div>
        </div>

        <div className="add-review__text">
          <textarea onChange={(evt) => setFormData({...formData, reviewText: evt.target.value})} className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text"></textarea>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">Post</button>
          </div>

        </div>
      </form>
    </div>
  );
}

export default FormSendReview;
