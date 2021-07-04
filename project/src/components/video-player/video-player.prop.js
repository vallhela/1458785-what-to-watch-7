import PropTypes from 'prop-types';

export default PropTypes.shape({
  src: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
});
