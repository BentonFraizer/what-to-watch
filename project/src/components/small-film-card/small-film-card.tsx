import { Link } from 'react-router-dom';
import { Film } from '../../types';

type SmallFilmCardProps = {
  filmData: Film;
  onMouseEnterCard: (id:number) => void;
  onMouseLeaveCard: (id:null) => void;
}

function SmallFilmCard(props: SmallFilmCardProps): JSX.Element {
  const {name, previewImage, id} = props.filmData;

  return (
    <article className="small-film-card catalog__films-card"
      onMouseEnter = {() => props.onMouseEnterCard(id)}
      onMouseLeave = {() => props.onMouseLeaveCard(null)}
    >
      <div className="small-film-card__image">
        <img src={previewImage} alt={name} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${id}`}>{name}</Link>
      </h3>
    </article>
  );
}

export default SmallFilmCard;
