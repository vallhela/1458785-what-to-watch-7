import React, {useState} from 'react';
import prop from './review-form.prop';

function ReviewForm(props) {
  const {filmId, onReview} = props;

  const [rating, setRating] = useState(8);
  const [comment, setComment] = useState('');

  const handleRatingChange = (evt) =>{
    setRating(+evt.target.value);
  };

  const handleSubmit = (evt) =>{
    evt.preventDefault();
    onReview(filmId, {rating, comment});
  };

  return (
    <form action="#" className="add-review__form" onSubmit={handleSubmit}>
      <div className="rating">
        <div className="rating__stars">
          <input className="rating__input" id="star-10" type="radio" name="rating" value="10" checked = {rating === 10} onChange = {handleRatingChange}/>
          <label className="rating__label" htmlFor="star-10">Rating 10</label>

          <input className="rating__input" id="star-9" type="radio" name="rating" value="9" checked = {rating === 9} onChange = {handleRatingChange}/>
          <label className="rating__label" htmlFor="star-9">Rating 9</label>

          <input className="rating__input" id="star-8" type="radio" name="rating" value="8" checked = {rating === 8} onChange = {handleRatingChange}/>
          <label className="rating__label" htmlFor="star-8">Rating 8</label>

          <input className="rating__input" id="star-7" type="radio" name="rating" value="7" checked = {rating === 7} onChange = {handleRatingChange}/>
          <label className="rating__label" htmlFor="star-7">Rating 7</label>

          <input className="rating__input" id="star-6" type="radio" name="rating" value="6" checked = {rating === 6} onChange = {handleRatingChange}/>
          <label className="rating__label" htmlFor="star-6">Rating 6</label>

          <input className="rating__input" id="star-5" type="radio" name="rating" value="5" checked = {rating === 5} onChange = {handleRatingChange}/>
          <label className="rating__label" htmlFor="star-5">Rating 5</label>

          <input className="rating__input" id="star-4" type="radio" name="rating" value="4" checked = {rating === 4} onChange = {handleRatingChange}/>
          <label className="rating__label" htmlFor="star-4">Rating 4</label>

          <input className="rating__input" id="star-3" type="radio" name="rating" value="3" checked = {rating === 3} onChange = {handleRatingChange}/>
          <label className="rating__label" htmlFor="star-3">Rating 3</label>

          <input className="rating__input" id="star-2" type="radio" name="rating" value="2" checked = {rating === 2} onChange = {handleRatingChange}/>
          <label className="rating__label" fhtmlForor="star-2">Rating 2</label>

          <input className="rating__input" id="star-1" type="radio" name="rating" value="1" checked = {rating === 1} onChange = {handleRatingChange}/>
          <label className="rating__label" htmlFor="star-1">Rating 1</label>
        </div>
      </div>

      <div className="add-review__text">
        <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" value={comment} onChange = {(e) => {setComment(e.target.value);}}></textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
        </div>

      </div>
    </form>
  );
}

ReviewForm.propTypes = prop.isRequired;

export default ReviewForm;
