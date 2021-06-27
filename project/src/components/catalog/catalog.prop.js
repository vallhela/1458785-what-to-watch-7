import PropTypes from 'prop-types';

export default PropTypes.shape({
  genres: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
    })),
  films: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      previewImage: PropTypes.string.isRequired,
    })).isRequired,
});
