import { Link } from 'react-router-dom';
import { Film } from '../../types';
import VideoPlayer from '../video-player/video-player';
type SmallFilmCardProps = {
  filmData: Film;
  onMouseEnterCard: (id:number) => void;
  onMouseLeaveCard: () => void;
  activeCardId: number | null;
}

function SmallFilmCard(props: SmallFilmCardProps): JSX.Element {
  const {name, previewImage, id, previewVideoLink} = props.filmData;
  const activeCardId = props.activeCardId;

  return (
    <article className="small-film-card catalog__films-card"
      onMouseEnter = {() => props.onMouseEnterCard(id)}
      onMouseLeave = {() => props.onMouseLeaveCard()}
    >
      {activeCardId === id &&
        <VideoPlayer
          width="265"
          height="170"
          previewVideoLink={previewVideoLink}
          previewImage={previewImage}
          isPlaying={activeCardId === id}
        />}

      {activeCardId !== id &&
        <div className="small-film-card__image">
          <img src={previewImage} alt={name} width="280" height="175" />
        </div>}

      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${id}`}>{name}</Link>
      </h3>
    </article>
  );
}

export default SmallFilmCard;
