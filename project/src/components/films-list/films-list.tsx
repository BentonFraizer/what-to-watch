import SmallFilmCard from '../small-film-card/small-film-card';
import { Film } from '../../types';

type FilmsListProps = {
  filmsList: Film[];
}

function FilmsList(props: FilmsListProps): JSX.Element {
  const films: Film[] = props.filmsList;

  return (
    <div className="catalog__films-list">
      {
        films.map((film) =>
          (
            <SmallFilmCard filmData={film} key={film.id}/>
          )
        )
      }
    </div>
  );
}

export default FilmsList;
