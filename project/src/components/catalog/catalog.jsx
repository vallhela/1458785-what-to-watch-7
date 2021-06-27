import React, {useState} from 'react';
import CatalogGenresListItem from './genres-list-item/genres-list-item';
import CatalogFilmsListItem from './films-list-item/films-list-item';
import prop from './catalog.prop';

function Catalog(props) {
  const {genres, films} = props;

  const [genre, setGenre] = useState(genres[0]);

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

      {genres && genres.length > 0 &&
      <ul className="catalog__genres-list">
        {genres.map((p) => <CatalogGenresListItem key={p.title} title={p.title} isActive={p.title === genre} onClick={setGenre}/>)}
      </ul>}

      <div className="catalog__films-list">
        {films.map((p) => <CatalogFilmsListItem key={p.id} filmId={p.id} filmName={p.name} filmImg={p.previewImage} onMouseEnter={()=>handleFilmOnMouseEnter(p.id)} onMouseLeave={()=>handleFilmOnMouseLeave()}/>)}
      </div>

      <div className="catalog__more">
        <button className="catalog__button" type="button">Show more</button>
      </div>
    </section>
  );
}

Catalog.propTypes = prop.isRequired;

export default Catalog;
