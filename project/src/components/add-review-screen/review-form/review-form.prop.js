import PropTypes from 'prop-types';

export default PropTypes.shape({
  filmId: PropTypes.number.isRequired,
  onReview: PropTypes.func.isRequired,
});
