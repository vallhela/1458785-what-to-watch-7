import React from 'react';
import { Link } from 'react-router-dom';
import Catalog from '../catalog/catalog';
import Footer from '../footer/footer';
import prop from './my-list-screen.prop';

function MyListScreen(props) {
  const {films} = props;
  const mine = films.filter((film) => film.isFavorite);

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <Link href="main.html" className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        <h1 className="page-title user-page__title">My list</h1>

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

      <Catalog genres={null} films={mine}/>

      <Footer/>
    </div>

  );
}

MyListScreen.propTypes = prop.isRequired;

export default MyListScreen;
