import SmallFilmCard from '../small-film-card/small-film-card';
import { Film } from '../../types';
import { useState } from 'react';

type FilmsListProps = {
  filmsList: Film[];
  isSimilarFilms?: boolean;
  genreOfFilm?: string;
  idOfFilm?: number;
}

function FilmsList({filmsList, isSimilarFilms, genreOfFilm, idOfFilm}: FilmsListProps): JSX.Element {
  const films: Film[] = filmsList;
  const [activeCardId, setActiveCardId] = useState<number | null>(null);

  const getFilteredFilms = (allFilms: Film[], genre: string, similarFilms: boolean, currentFilmId: number): Film[] => {
    const NEEDED_FILM_AMOUNT = 4;

    if (similarFilms) {
      const filteredFilms = allFilms.filter((film: Film) => film.genre === genre && film.id !== currentFilmId);
      return filteredFilms.slice(0, NEEDED_FILM_AMOUNT);
    } else {
      return films;
    }
  };

  const filteredFilms: Film[] = getFilteredFilms(films, genreOfFilm as string, isSimilarFilms as boolean, idOfFilm as number);


  const handleMouseEnterCard = (gettedActiveCardId: number) => {
    setActiveCardId(gettedActiveCardId);
  };

  const handleMouseLeaveCard = () => {
    setActiveCardId(null);
  };

  return (
    <div className="catalog__films-list">
      {
        filteredFilms.map((film) =>
          (
            <SmallFilmCard
              activeCardId={activeCardId}
              filmData={film}
              key={film.id}
              onMouseEnterCard = {handleMouseEnterCard}
              onMouseLeaveCard = {handleMouseLeaveCard}
            />
          )
        )
      }
    </div>
  );
}

export default FilmsList;
