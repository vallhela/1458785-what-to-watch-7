import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {AppRoute} from '../../const';
import MainScreen from '../main-screen/main-screen';
import SignInScreen from '../sign-in-screen/sign-in-screen';
import MyListScreen from '../my-list-screen/my-list-screen';
import MoviePageScreen from '../movie-page-screen/movie-page-screen';
import AddReviewScreen from '../add-review-screen/add-review-screen';
import PlayerScreen from '../player-screen/player-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
function App(props) {
  const {promo, genres, films, footerUrl} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          <MainScreen
            promo={promo} genres={genres} films={films} footerUrl={footerUrl}
          />
        </Route>
        <Route exact path={AppRoute.SING_IN}>
          <SignInScreen
            footerUrl={footerUrl}
          />
        </Route>
        <Route exact path={AppRoute.MY_LIST}>
          <MyListScreen
            footerUrl={footerUrl}
          />
        </Route>
        <Route exact path={AppRoute.FILM}>
          <MoviePageScreen
            footerUrl={footerUrl}
          />
        </Route>
        <Route exact path={AppRoute.ADD_REVIEW}>
          <AddReviewScreen />
        </Route>
        <Route exact path={AppRoute.PLAYER}>
          <PlayerScreen />
        </Route>
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
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

export default App;
