import React from 'react';
import PropTypes from 'prop-types';

function CatalogGenresListItem(props) {
  const {title, isActive, onClick} = props;

  const handleClick = (evt) =>{
    evt.preventDefault();
    if(onClick){
      onClick(title);
    }
  };

  const className = `catalog__genres-item${isActive?' catalog__genres-item--active':''}`;
  return (
    <li className={className}>
      <a href="/" className="catalog__genres-link" onClick = {handleClick}>{title}</a>
    </li>
  );
}

CatalogGenresListItem.propTypes = PropTypes.shape({
  title: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
}).isRequired;

export default CatalogGenresListItem;
