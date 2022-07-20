import Footer from '../../components/footer/footer';
import Logo from '../../components/logo/logo';
import FilmsList from '../../components/films-list/films-list';
import Film from '../../types/film';
import { Link } from 'react-router-dom';

type MyListScreenProps = {
  filmsList: Film[];
}

function MyListScreen(props: MyListScreenProps): JSX.Element {
  const filmsList = props.filmsList;

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo/>

        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">9</span></h1>
        <ul className="user-block">
          <li className="user-block__item">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </li>
          <li className="user-block__item">
            <Link to="/" className="user-block__link">Sign out</Link>
          </li>
        </ul>
      </header>
      <section className='catalog'>
        <h2 className='catalog__title visually-hidden'>Catalog</h2>

        <FilmsList {...{filmsList}}/>

      </section>
      <Footer/>
    </div>
  );
}

export default MyListScreen;
