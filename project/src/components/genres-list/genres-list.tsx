import { Film } from '../../types';
import { getGenres } from '../../utils/utils';
import { changeGenre, applyFilter, resetFilter } from '../../store/action';
import { useAppDispatch, useAppSelector } from '../../hooks/';

type GenresListProps = {
  filmsList: Film[];
}

function GenresList({filmsList}: GenresListProps): JSX.Element {
  const genres = getGenres(filmsList);
  const dispatch = useAppDispatch();
  const currentGenre = useAppSelector((state) => state.genre);

  return (
    <ul className="catalog__genres-list">
      {
        genres.map((genre) =>
          (
            <li
              onClick={(evt) => {
                evt.preventDefault();
                dispatch(resetFilter());
                dispatch(changeGenre((evt.target as HTMLInputElement).innerHTML));
                dispatch(applyFilter((evt.target as HTMLInputElement).innerHTML));
              }}
              key={genre}
              className={currentGenre === genre ? 'catalog__genres-item catalog__genres-item--active' : 'catalog__genres-item'}
            >
              <a href="!" className="catalog__genres-link">{genre}</a>
            </li>
          )
        )
      }
    </ul>
  );
}

export default GenresList;
