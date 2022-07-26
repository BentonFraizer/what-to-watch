import { Link } from 'react-router-dom';
import { Film } from '../../types';
import VideoPlayer from '../video-player/video-player';
type SmallFilmCardProps = {
  filmData: Film;
  onMouseEnterCard: (id:number) => void;
  onMouseLeaveCard: (id:null) => void;
  activeCardId: number | null;
}

function SmallFilmCard(props: SmallFilmCardProps): JSX.Element {
  const {name, previewImage, id} = props.filmData;

  return (
    <article className="small-film-card catalog__films-card"
      onMouseEnter = {() => props.onMouseEnterCard(id)}
      onMouseLeave = {() => props.onMouseLeaveCard(null)}
    >
      {props.activeCardId &&
        <VideoPlayer
          film={props.filmData}
          activeCardId={props.activeCardId}
        />}

      {!props.activeCardId &&
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
