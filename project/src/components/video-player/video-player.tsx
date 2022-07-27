import { useEffect, useRef } from 'react';

type VideoPlayerProps = {
  width: string;
  height: string;
  previewVideoLink: string;
  previewImage:string;
  isPlaying: boolean;
}

function VideoPlayer({width, height, previewVideoLink, previewImage, isPlaying}: VideoPlayerProps):JSX.Element {
  const PLAY_DELAY = 1000;
  const START_TIME = 0;
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current === null) {
      return;
    }

    const timer = setTimeout(() => {
      if(isPlaying) {
        videoRef.current?.play();
      }
    }, PLAY_DELAY);

    videoRef.current.pause();
    videoRef.current.currentTime = START_TIME;
    videoRef.current.load();

    return () => {
      clearTimeout(timer);
    };
  }, [isPlaying]);

  return (
    <video
      ref={videoRef}
      width={width}
      height={height}
      poster={previewImage}
      muted
    >
      <source src={previewVideoLink} />
    </video>
  );
}

export default VideoPlayer;
