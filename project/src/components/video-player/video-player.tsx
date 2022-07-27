import { Film } from '../../types';
import { useEffect, useRef } from 'react';

type VideoPlayerProps = {
  film: Film;
  activeCardId: number | null;
}

function VideoPlayer(props: VideoPlayerProps):JSX.Element {
  const PLAY_DELAY = 1000;
  const {film, activeCardId} = props;
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current === null) {
      return;
    }

    if (activeCardId === film.id) {

      setTimeout(() => {
        if(videoRef.current !== null) {
          videoRef.current.play();
        }
      }, PLAY_DELAY);
    }
    return () => {

      clearTimeout();
    };
  }, [activeCardId, film.id]);

  return (
    <video
      key={film.id}
      ref={videoRef}
      src={film.previewVideoLink}
      muted
      poster={film.previewImage}
      width={260.75}
    >

    </video>
  );
}

export default VideoPlayer;
