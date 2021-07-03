import PropTypes from 'prop-types';
import CatalogProp from '../catalog/catalog.prop';

export default PropTypes.shape({
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
  films: CatalogProp.films,
  selectedGenre: PropTypes.string,
  onSelectedGenreChanged: PropTypes.func,
});
