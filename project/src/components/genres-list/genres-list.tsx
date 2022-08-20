import { changeGenre } from '../../store/site-process/site-process';
import { useAppDispatch } from '../../hooks/';

type GenresListProps = {
  genres: string[];
  currentGenre: string;
  onChangeClick: () => void;
}

function GenresList({genres, currentGenre, onChangeClick}: GenresListProps): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <ul className="catalog__genres-list">
      {
        genres.map((genre) =>
          (
            <li
              onClick={(evt) => {
                evt.preventDefault();
                dispatch(changeGenre(genre));
                onChangeClick();
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
