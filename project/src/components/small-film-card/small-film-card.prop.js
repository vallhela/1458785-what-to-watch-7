import PropTypes from 'prop-types';

export default PropTypes.shape({
  className: PropTypes.string,
  filmId: PropTypes.number.isRequired,
  filmName: PropTypes.string.isRequired,
  filmPreviewVideoLink: PropTypes.string.isRequired,
  filmPreviewImage: PropTypes.string.isRequired,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
});
