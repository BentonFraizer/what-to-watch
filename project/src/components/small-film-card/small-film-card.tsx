function SmallFilmCard(): JSX.Element {
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src="https://10.react.pages.academy/static/film/poster/Snatch.jpg" alt="Snatch" width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href="film-page.html">Snatch</a>
      </h3>
    </article>
  );
}

export default SmallFilmCard;
