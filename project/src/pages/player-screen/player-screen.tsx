import { useParams } from 'react-router-dom';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import { useAppSelector, useAppDispatch } from '../../hooks/';
import { getFilm } from '../../store/site-data/selectors';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { fetchFilmAction } from '../../store/api-actions';
import { convertSecondsToTime } from '../../utils/utils';
import './player-screen.css';
import { ProgressBar } from '../../consts';
import Spinner from '../../components/spinner/spinner';

function PlayerScreen(): JSX.Element | null {
  const dispatch = useAppDispatch();
  const film = useAppSelector(getFilm);
  const {id} = useParams();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState<number>(ProgressBar.Start);
  const [timeLeft, setTimeLeft] = useState<number>(ProgressBar.Start);
  const convertedTimeLeft = convertSecondsToTime(timeLeft.toString());
  const videoRef = useRef<HTMLVideoElement | null>(null);


  useEffect(() => {
    videoRef.current?.play();
    dispatch(fetchFilmAction(Number(id)));
  }, [dispatch, id]);

  const handleIsPlayingClick = () => {
    if (videoRef.current?.paused) {
      videoRef.current?.play();
      setIsPlaying(true);
    } else {
      videoRef.current?.pause();
      setIsPlaying(false);
    }
  };

  if (!id) {
    return null;
  }

  if (!film) {
    return <NotFoundScreen/>;
  }

  //Функция получения иконки кнопки play/pause в зависимости от режима воспроизведения
  const getPlayPauseButtonImage = (playbackStatus: boolean):JSX.Element => {
    if (playbackStatus) {
      return (
        <>
          <svg viewBox="0 0 14 21" width="14" height="21">
            <use xlinkHref="#pause"></use>
          </svg>
          <span>Pause</span>
        </>
      );
    }
    return (
      <>
        <svg viewBox="0 0 19 19" width="19" height="19">
          <use xlinkHref="#play-s"></use>
        </svg>
        <span>Play</span>
      </>
    );
  };
  const playPauseButtonIcon = getPlayPauseButtonImage(isPlaying);

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const currentProgress = (videoRef.current?.currentTime / videoRef.current?.duration) * ProgressBar.End;
      setProgress(currentProgress);
      setTimeLeft(videoRef.current.duration - videoRef.current.currentTime);
    }
  };

  const handleVideoProgress = (evt: ChangeEvent<HTMLInputElement>) => {
    const manualChange = Number(evt.target.value);
    if (videoRef.current) {
      videoRef.current.currentTime = (videoRef.current?.duration / ProgressBar.End) * manualChange;
      setProgress(manualChange);
    }
  };

  const handleEndPlay = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = ProgressBar.Start;
      setIsPlaying(false);
    }
  };

  const {videoLink, posterImage} = film;

  return (
    <div className="player" >
      <video
        autoPlay
        muted
        ref={videoRef}
        src={videoLink}
        className="player__video"
        poster={posterImage}
        onSeeking={() => setIsLoading(true)}
        onSeeked={() => setIsLoading(false)}
        onTimeUpdate={handleTimeUpdate}
        onDoubleClick={() =>videoRef.current?.requestFullscreen()}
        onEnded={handleEndPlay}
      >
      </video>

      <button
        type="button"
        className="player__exit"
        onClick={() => {
          videoRef.current?.pause();
          window.history.back();
        }}
      >
        Exit
      </button>

      {
        isLoading &&
        <span>
          <Spinner />
        </span>
      }

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <input
              className="player__progress-setter"
              type="range"
              min="0"
              max="100"
              value={progress}
              onChange={(evt) => handleVideoProgress(evt)}
            />
            <progress
              className="player__progress"
              value={progress} max="100"
            >
            </progress>
            <div className="player__toggler" style={{left: `${progress}%`}}>Toggler</div>
          </div>
          <div className="player__time-value">- {convertedTimeLeft}</div>
        </div>

        <div className="player__controls-row">
          <button onClick={handleIsPlayingClick} type="button" className="player__play">
            {playPauseButtonIcon}
          </button>
          <div className="player__name">{film.name}</div>

          <button onClick={() => videoRef.current?.requestFullscreen()} type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PlayerScreen;
