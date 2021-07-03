import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {AppRoute} from '../../const';
import MainScreen from '../main-screen/main-screen';
import SignInScreen from '../sign-in-screen/sign-in-screen';
import MyListScreen from '../my-list-screen/my-list-screen';
import MoviePageScreen from '../movie-page-screen/movie-page-screen';
import AddReviewScreen from '../add-review-screen/add-review-screen';
import PlayerScreen from '../player-screen/player-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';

import PropTypes from 'prop-types';
import filmProp from '../../mocks/films.prop';
function App(props) {

  const {promo, films} = props;
  const mainScreen = {
    promo: promo,
    films: films,
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          <MainScreen {... mainScreen}/>
        </Route>
        <Route exact path={AppRoute.SING_IN}>
          <SignInScreen/>
        </Route>
        <Route exact path={AppRoute.MY_LIST}>
          <MyListScreen films={films}/>
        </Route>
        <Route exact path={AppRoute.FILM}>
          <MoviePageScreen films={films}/>
        </Route>
        <Route exact path={AppRoute.ADD_REVIEW}>
          <AddReviewScreen films={films} onReview={() => {}}/>
        </Route>
        <Route exact path={AppRoute.PLAYER}>
          <PlayerScreen films={films}/>
        </Route>
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = PropTypes.shape({
  promo: PropTypes.any.isRequired,
  genres: PropTypes.any.isRequired,
  films: PropTypes.arrayOf(filmProp).isRequired,
}).isRequired;

export default App;
