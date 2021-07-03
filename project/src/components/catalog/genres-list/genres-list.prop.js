import PropTypes from 'prop-types';

export default PropTypes.shape({
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  selected: PropTypes.string,
  onSelectedChanged: PropTypes.func,
});
