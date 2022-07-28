import SmallFilmCard from '../small-film-card/small-film-card';
import { Film } from '../../types';
import { useState } from 'react';

type FilmsListProps = {
  filmsList: Film[];
  inMoreLikeThis?: boolean;
  genreOfFilm?: string;
}

function FilmsList({filmsList, inMoreLikeThis, genreOfFilm}: FilmsListProps): JSX.Element {
  const films: Film[] = filmsList;
  const [activeCardId, setActiveCardId] = useState<number | null>(null);

  const getFilteredFilms = (allFilms: Film[], genre: string, inMoreLikeThisSection: boolean): Film[] => {
    const neededFilmAmount = 4;

    if (inMoreLikeThisSection) {
      const filteredFilms = allFilms.filter((film: Film) => film.genre === genre);
      return filteredFilms.slice(0, neededFilmAmount);
    } else {
      return films;
    }
  };

  const filteredFilms = getFilteredFilms(films, genreOfFilm as string, inMoreLikeThis as boolean);


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
