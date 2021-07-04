import React from 'react';
import Logo from '../logo/logo';
import ReviewForm from './review-form/review-form';
import prop from './add-review-screen.prop';
import {Link, useParams} from 'react-router-dom';

function AddReviewScreen(props) {
  const {films, onReview} = props;

  const {id} = useParams();
  const filmId = +id; //We ensure that id is number
  const film = films.filter((p) => p.id === filmId)[0];

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={film.backgroundImage} alt={film.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo/>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={{pathname: `/films/${film.id}`}} className="breadcrumbs__link">{film.name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <Link to={{pathname: `/films/${film.id}/review`}} className="breadcrumbs__link">Add review</Link>
              </li>
            </ul>
          </nav>

          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </li>
            <li className="user-block__item">
              <a href="/" className="user-block__link">Sign out</a>
            </li>
          </ul>
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={film.posterImage} alt={`${film.name} poster`} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <ReviewForm filmId = {film.id} onReview = {onReview}/>
      </div>
    </section>
  );
}

AddReviewScreen.propTypes = prop.isRequired;

export default AddReviewScreen;
