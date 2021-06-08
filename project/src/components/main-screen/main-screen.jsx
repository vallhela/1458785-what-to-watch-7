import React from 'react';
import PropTypes from 'prop-types';
import SmallFilmCard from '../small-film-card/small-film-card';
import Footer from '../footer/footer';
import CatalogGenres from '../catalog-genres/catalog-genres';

function MainScreen(props) {
  const {promo, genres, films, footerUrl} = props;

  return (
    <React.Fragment>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={promo.img} alt={promo.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <div className="logo">
            <a href="foo" className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </li>
            <li className="user-block__item">
              <a href="foo" className="user-block__link">Sign out</a>
            </li>
          </ul>
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={promo.poster.img} alt={promo.poster.text} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{promo.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{promo.genre}</span>
                <span className="film-card__year">{promo.year}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <ul className="catalog__genres-list">
            {genres.map((genre) => <CatalogGenres key={genre.title} title={genre.title} active={genre.active}/>)}
          </ul>

          <div className="catalog__films-list">
            {films.map((film) => <SmallFilmCard key={film.filmName} filmName={film.filmName} filmImg={film.filmImg} />)}
          </div>

          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>

        <Footer key={footerUrl.footerMain} footerUrl={footerUrl.footerMain} />
      </div>
    </React.Fragment>);
}

MainScreen.propTypes = {
  promo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    poster: PropTypes.shape({
      text: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  films: PropTypes.arrayOf(
    PropTypes.shape({
      filmName: PropTypes.string.isRequired,
      filmImg: PropTypes.string.isRequired,
    }).isRequired,
  ),
  footerUrl: PropTypes.shape({
    footerMain: PropTypes.string.isRequired,
    footerToMain: PropTypes.string.isRequired,
  }).isRequired,
  genres: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      active: PropTypes.string.isRequired,
    }).isRequired,
  ),
};

export default MainScreen;
