import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import FilmsList from '../../components/films-list/films-list';
import { useAppSelector } from '../../hooks/';
import { getFilms } from '../../store/site-data/selectors';

function MyListScreen(): JSX.Element {
  const filmsList = useAppSelector(getFilms);

  return (
    <div className="user-page">
      <Header isInMyList/>

      <section className='catalog'>
        <h2 className='catalog__title visually-hidden'>Catalog</h2>

        <FilmsList {...{filmsList}}/>

      </section>
      <Footer/>
    </div>
  );
}

export default MyListScreen;
