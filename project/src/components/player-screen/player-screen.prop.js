import PropTypes from 'prop-types';
import filmProp from '../../mocks/films.prop';

export default PropTypes.shape({
  films: PropTypes.arrayOf(filmProp).isRequired,
});
