import React from 'react';
import MainScreen from '../main-screen/main-screen';
import PropTypes from 'prop-types';

function App(props) {
  const {promo, films} = props;

  return (
    <MainScreen promo={promo} films={films} />
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
};

export default App;
