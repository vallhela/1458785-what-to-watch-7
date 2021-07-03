import React from 'react';
import { connect } from 'react-redux';
import { Action } from '../../store/action';
import Logo from '../logo/logo';
import Footer from '../footer/footer';
import Catalog from '../catalog/catalog';
import prop from './main-screen.prop';

function MainScreen(props) {
  const {promo, films, selectedGenre, onSelectedGenreChanged} = props;

  return (
    <React.Fragment>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={promo.img} alt={promo.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <Logo/>

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
        <Catalog films={films} showGenresFilter selectedGenre={selectedGenre} onSelectedGenreChanged={onSelectedGenreChanged}/>

        <Footer/>
      </div>
    </React.Fragment>);
}

MainScreen.propTypes = prop.isRequired;

const mapStateToProps = (state) => ({
  selectedGenre: state.mainScreenCatalogSelectedGenre,
});

const mapDispatchToProps = (dispatch) => ({
  onSelectedGenreChanged(selectedGenre) {
    dispatch(Action.selecteMainScreenCatalogGenre.create(selectedGenre));
  },
});

export {MainScreen};
export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
