import React from 'react';
import PropTypes from 'prop-types';

function SmallFilmCard(props) {
  const {filmName, filmImg} = props;

  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={filmImg} alt={filmName} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href="film-page.html">{filmName}</a>
      </h3>
    </article>
  );
}

SmallFilmCard.propTypes = {
  filmName: PropTypes.string.isRequired,
  filmImg: PropTypes.string.isRequired,
};

export default SmallFilmCard;
