import PropTypes from 'prop-types';

export default PropTypes.shape({
  filmId: PropTypes.number.isRequired,
  filmName: PropTypes.string.isRequired,
  filmImg: PropTypes.string.isRequired,
  onMouseEnter: PropTypes.func,
});
