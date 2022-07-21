import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import FilmsList from '../../components/films-list/films-list';
import Film from '../../types/film';

type MyListScreenProps = {
  filmsList: Film[];
}

function MyListScreen(props: MyListScreenProps): JSX.Element {
  const filmsList = props.filmsList;

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
