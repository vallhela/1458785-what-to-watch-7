import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const promo = {
  name: 'The Grand Budapest Hotel',
  img: 'img/bg-the-grand-budapest-hotel.jpg',
  genre: 'Drama',
  year: 2014,
  poster: {
    text: 'The Grand Budapest Hotel poster',
    img: 'img/the-grand-budapest-hotel-poster.jpg',
  },
};

const genres = [
  {
    title: 'All genres',
    active: 'catalog__genres-item catalog__genres-item--active',
  },
  {
    title: 'Comedies',
    active: 'catalog__genres-item ',
  },
  {
    title: 'Crime',
    active: 'catalog__genres-item ',
  },
  {
    title: 'Documentary',
    active: 'catalog__genres-item ',
  },
  {
    title: 'Dramas',
    active: 'catalog__genres-item ',
  },
  {
    title: 'Horror',
    active: 'catalog__genres-item ',
  },
  {
    title: 'Kids & Family',
    active: 'catalog__genres-item ',
  },
  {
    title: 'Romance',
    active: 'catalog__genres-item ',
  },
  {
    title: 'Sci-Fi',
    active: 'catalog__genres-item ',
  },
  {
    title: 'Thrillers',
    active: 'catalog__genres-item ',
  },
];

const films = [
  {
    filmName: 'Fantastic Beasts: The Crimes of Grindelwald',
    filmImg: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
  },
  {
    filmName: 'Bohemian Rhapsody',
    filmImg: 'img/bohemian-rhapsody.jpg',
  },
  {
    filmName: 'Macbeth',
    filmImg: 'img/macbeth.jpg',
  },
  {
    filmName: 'Aviator',
    filmImg: 'img/aviator.jpg',
  },
  {
    filmName: 'Macbeth',
    filmImg: 'img/macbeth.jpg',
  },
  {
    filmName: 'We need to talk about Kevin',
    filmImg: 'img/we-need-to-talk-about-kevin.jpg',
  },
  {
    filmName: 'Revenant',
    filmImg: 'img/revenant.jpg',
  },
  {
    filmName: 'Johnny English',
    filmImg: 'img/johnny-english.jpg',
  },
  {
    filmName: 'Shutter Island',
    filmImg: 'img/shutter-island.jpg',
  },
  {
    filmName: 'Pulp Fiction',
    filmImg: 'img/pulp-fiction.jpg',
  },
  {
    filmName: 'No Country for Old Men',
    filmImg: 'img/no-country-for-old-men.jpg',
  },
  {
    filmName: 'Snatch',
    filmImg: 'img/snatch.jpg',
  },
  {
    filmName: 'Moonrise Kingdom',
    filmImg: 'img/moonrise-kingdom.jpg',
  },
  {
    filmName: 'Seven Years in Tibet',
    filmImg: 'img/seven-years-in-tibet.jpg',
  },
  {
    filmName: 'Midnight Special',
    filmImg: 'img/midnight-special.jpg',
  },
  {
    filmName: 'War of the Worlds',
    filmImg: 'img/war-of-the-worlds.jpg',
  },
  {
    filmName: 'Dardjeeling Limited',
    filmImg: 'img/dardjeeling-limited.jpg',
  },
  {
    filmName: 'Orlando',
    filmImg: 'img/orlando.jpg',
  },
  {
    filmName: 'Mindhunter',
    filmImg: 'img/mindhunter.jpg',
  },
  {
    filmName: 'Midnight Special',
    filmImg: 'img/midnight-special.jpg',
  },
];

const footerUrl = {
  footerMain: '/',
  footerToMain: 'main.html',
};

ReactDOM.render(
  <React.StrictMode>
    <App
      promo = {promo}
      films = {films}
      footerUrl = {footerUrl}
      genres = {genres}
    />
  </React.StrictMode>,
  document.getElementById('root'));
