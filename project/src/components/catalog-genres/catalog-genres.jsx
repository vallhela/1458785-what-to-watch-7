import React from 'react';
import PropTypes from 'prop-types';

function CatalogGenres(props) {
  const {title, active} = props;

  return (
    <li className={active}>
      <a href="foo" className="catalog__genres-link">{title}</a>
    </li>
  );
}

CatalogGenres.propTypes = {
  title: PropTypes.string.isRequired,
  active: PropTypes.string.isRequired,
};

export default CatalogGenres;
