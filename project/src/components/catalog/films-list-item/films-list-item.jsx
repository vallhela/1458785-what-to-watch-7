import React from 'react';
import SmallFilmCard from '../../small-film-card/small-film-card';
import smallFilmCardProp from '../../small-film-card/small-film-card.prop';

function CatalogFilmsListItem(props) {
  return (
    <SmallFilmCard {...props}/>
  );
}

CatalogFilmsListItem.propTypes = smallFilmCardProp.isRequired;

export default CatalogFilmsListItem;
