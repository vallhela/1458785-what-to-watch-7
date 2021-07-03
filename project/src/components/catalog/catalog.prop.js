import PropTypes from 'prop-types';

export default PropTypes.shape({
  films: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      previewImage: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
    })).isRequired,
  showGenresFilter: PropTypes.bool,
  selectedGenre: PropTypes.string,
  onSelectedGenreChanged: PropTypes.func,
});
