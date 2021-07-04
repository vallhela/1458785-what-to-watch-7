import React, {useState, useEffect, useRef} from 'react';
import prop from './video-player.prop';

function VideoPlayer(props) {
  const {src, poster, width, height} = props;

  const [isLoaded, setIsLoaded] = useState(false);

  const videoRef = useRef(null);

  useEffect(() => {
    setIsLoaded(false);

    const current = videoRef.current;
    if(current) {
      current.onloadeddata = () => setIsLoaded(true);
      return () => {
        current.onloadeddata = null;
      };
    }
  }, [src]);

  useEffect(() => {
    const current = videoRef.current;
    if (current && isLoaded) {
      current.play();
    }
  }, [isLoaded]);

  return (
    <video ref={videoRef} src={src} poster={poster} width={width} height={height} muted loop></video>
  );
}

VideoPlayer.propTypes = prop.isRequired;

export default VideoPlayer;
