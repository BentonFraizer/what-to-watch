import React from 'react';
import { Film } from '../../types';

type SmallFilmCardProps = {
  filmData: Film;
}

function SmallFilmCard(props: SmallFilmCardProps): JSX.Element {
  const {name, previewImage} = props.filmData;
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={previewImage} alt={name} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href="film-page.html">{name}</a>
      </h3>
    </article>
  );
}

export default SmallFilmCard;
