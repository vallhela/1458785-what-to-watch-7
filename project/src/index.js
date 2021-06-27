import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import films from './mocks/films';
import promo from './mocks/promo';
import genres from './mocks/genres';

ReactDOM.render(
  <React.StrictMode>
    <App
      promo = {promo}
      genres = {genres}
      films = {films}
    />
  </React.StrictMode>,
  document.getElementById('root'));
