import React from 'react';
import CatalogGenresListItem from '../genres-list-item/genres-list-item';

import prop from './genres-list.prop';

function CatalogGanresList(props) {
  const {genres, selected, onSelectedChanged} = props;

  const unique =[...new Set(genres)].filter((p)=>p !== null).sort((left, right) => left.localeCompare(right));

  const handleGenreClicked = (genre) =>{
    if(selected === genre){
      return;
    }

    if(onSelectedChanged){
      onSelectedChanged(genre);
    }
  };

  return (
    <ul className="catalog__genres-list">
      <CatalogGenresListItem key={'All genres'} title={'All genres'} isActive={selected === null} onClick={() => handleGenreClicked(null)}/>

      {unique.map((p) => <CatalogGenresListItem key={p} title={p} isActive={selected === p} onClick={() => handleGenreClicked(p)}/>)}
    </ul>
  );
}

CatalogGanresList.propTypes = prop.isRequired;

export default CatalogGanresList;
