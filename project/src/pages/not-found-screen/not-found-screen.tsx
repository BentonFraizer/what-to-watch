import { Link } from 'react-router-dom';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import { AppRoute } from '../../consts';
import './not-found-screen.css';

function NotFoundScreen(): JSX.Element {
  return (
    <div className="user-page">
      <Header/>

      <div className="user-page__content">
        <div className="user-page__title">
          <b>404</b>
          <p>Page not found</p>
          <Link className='user-page__link' to={AppRoute.Main} >
            Go to Main page
          </Link>
        </div>
      </div>

      <Footer/>
    </div>
  );
}

export default NotFoundScreen;
