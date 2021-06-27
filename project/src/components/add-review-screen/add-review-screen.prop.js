import PropTypes from 'prop-types';
import reviewFormProp from './review-form/review-form.prop';
import filmProp from '../../mocks/films.prop';

export default PropTypes.shape({
  films: PropTypes.arrayOf(filmProp).isRequired,
  onReview: reviewFormProp.onReview,
});
