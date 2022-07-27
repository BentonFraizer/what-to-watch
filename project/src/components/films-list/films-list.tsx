import SmallFilmCard from '../small-film-card/small-film-card';
import { Film } from '../../types';
import { useState } from 'react';

type FilmsListProps = {
  filmsList: Film[];
}

function FilmsList(props: FilmsListProps): JSX.Element {
  const films: Film[] = props.filmsList;
  const [activeCardId, setActiveCardId] = useState<number | null>(null);

  const handleMouseEnterCard = (gettedActiveCardId: number) => {
    setActiveCardId(gettedActiveCardId);
  };

  const handleMouseLeaveCard = () => {
    setActiveCardId(null);
  };

  return (
    <div className="catalog__films-list">
      {
        films.map((film) =>
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
