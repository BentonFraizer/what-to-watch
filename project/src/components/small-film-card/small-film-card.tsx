import { Link } from 'react-router-dom';
import { Film } from '../../types';
import { useState } from 'react';

type SmallFilmCardProps = {
  filmData: Film;
}

function SmallFilmCard(props: SmallFilmCardProps): JSX.Element {
  const {name, previewImage, id} = props.filmData;
  const [, setActiveCardId] = useState<number | null>(null);

  const path = `/films/${id}`;
  return (
    <article className="small-film-card catalog__films-card"
      onMouseEnter = {() => setActiveCardId(id)}
      onMouseLeave = {() => setActiveCardId(null)}
    >
      <div className="small-film-card__image">
        <img src={previewImage} alt={name} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={path}>{name}</Link>
      </h3>
    </article>
  );
}

export default SmallFilmCard;
