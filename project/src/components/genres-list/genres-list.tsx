import { changeGenre, applyFilter, resetFilter } from '../../store/action';
import { useAppDispatch } from '../../hooks/';

type GenresListProps = {
  genres: string[];
  currentGenre: string;
}

function GenresList({genres, currentGenre}: GenresListProps): JSX.Element {
  const dispatch = useAppDispatch();

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
