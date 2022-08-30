import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import FilmsList from '../../components/films-list/films-list';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { fetchFavoriteFilmsAction } from '../../store/api-actions';
import { useEffect } from 'react';
import { getFavoriteFilms } from '../../store/site-data/selectors';

function MyListScreen(): JSX.Element {
  const filmsList = useAppSelector(getFavoriteFilms);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchFavoriteFilmsAction());
  }, [dispatch]);

  return (
    <div className="user-page">
      <Header
        isInMyList
        filmsAmount = {filmsList.length}
      />

      <section className='catalog'>
        <h2 className='catalog__title visually-hidden'>Catalog</h2>

        <FilmsList {...{filmsList}}/>

      </section>
      <Footer/>
    </div>
  );
}

export default MyListScreen;
