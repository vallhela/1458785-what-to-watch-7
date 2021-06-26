import React from 'react';
import { Link } from 'react-router-dom';
import prop from './small-film-card.prop';

function SmallFilmCard(props) {
  const {filmId, filmName, filmImg, onMouseEnter, onMouseLeave} = props;
  const handleMouseEnter = () => {
    if(onMouseEnter) {
      onMouseEnter();
    }
  };

  const handleMouseLeave = () => {
    if(onMouseLeave) {
      onMouseLeave();
    }
  };

  return (
    <article className="small-film-card catalog__films-card" onMouseEnter = {()=> handleMouseEnter()} onMouseLeave= {handleMouseLeave()}>
      <div className="small-film-card__image">
        <img src={filmImg} alt={filmName} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={{pathname: `/films/${filmId}`}}>{filmName}</Link>
      </h3>
    </article>
  );
}

SmallFilmCard.propTypes = prop.isRequired;

export default SmallFilmCard;
