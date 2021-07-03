import React, { useState } from 'react';
import CatalogGanresList from './genres-list/genres-list';
import CatalogFilmsListItem from './films-list-item/films-list-item';
import prop from './catalog.prop';

function Catalog(props) {
  const {films, showGenresFilter=false, selectedGenre=null, onSelectedGenreChanged=null} = props;
  const genres = films.map((p) => p.genre);

  const selectedGenreFilms = selectedGenre === null ? films : films.filter((p)=>p.genre === selectedGenre);

  const [filmId, setFilmId] = useState();
  const handleFilmOnMouseEnter = (handledFilmId) => {
    // TODO: What to do with filmId at this moment?
    setFilmId(filmId);
  };
  const handleFilmOnMouseLeave = () => {
    setFilmId(undefined);
  };

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      {showGenresFilter && <CatalogGanresList genres={genres} selected={selectedGenre} onSelectedChanged={onSelectedGenreChanged}/>}

      <div className="catalog__films-list">
        {selectedGenreFilms.map((p) => <CatalogFilmsListItem className="catalog__films-card" key={p.id} filmId={p.id} filmName={p.name} filmPreviewVideoLink={p.previewVideoLink} filmPreviewImage={p.previewImage} onMouseEnter={()=>handleFilmOnMouseEnter(p.id)} onMouseLeave={()=>handleFilmOnMouseLeave()}/>)}
      </div>

      <div className="catalog__more">
        <button className="catalog__button" type="button">Show more</button>
      </div>
    </section>
  );
}

Catalog.propTypes = prop.isRequired;

export default Catalog;
