import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import VideoPlayer from '../video-player/video-player';
import prop from './small-film-card.prop';

function SmallFilmCard(props) {
  const {className, filmId, filmName, filmPreviewVideoLink, filmPreviewImage, onMouseEnter, onMouseLeave} = props;

  const [isMouseOver, setIsMouseOver] = useState(false);
  const [shouldBePlaying, setShouldBePlaying] = useState(false);

  useEffect(()=>{
    if(isMouseOver && !shouldBePlaying){
      const timerId = setTimeout(() => setShouldBePlaying(true), 1000);
      return () =>{
        clearTimeout(timerId);
      };
    }

    if(!isMouseOver && shouldBePlaying){
      setShouldBePlaying(false);
    }
  }, [isMouseOver, shouldBePlaying]);

  const handleMouseEnter = () => {
    if(!isMouseOver) {
      setIsMouseOver(true);
    }

    if(onMouseEnter) {
      onMouseEnter();
    }
  };

  const handleMouseLeave = () => {
    if(isMouseOver){
      setIsMouseOver(false);
    }

    if(onMouseLeave) {
      onMouseLeave();
    }
  };

  return (
    <article className={['small-film-card', className].join(' ')} onMouseEnter = {handleMouseEnter} onMouseLeave = {handleMouseLeave}>
      <div className="small-film-card__image">
        {shouldBePlaying
          ? (<VideoPlayer src={filmPreviewVideoLink} poster={filmPreviewImage} width="280" height="175"/>)
          : (<img src={filmPreviewImage} alt={filmName} width="280" height="175" />)}
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={{pathname: `/films/${filmId}`}}>{filmName}</Link>
      </h3>
    </article>
  );
}

SmallFilmCard.propTypes = prop.isRequired;

export default SmallFilmCard;
