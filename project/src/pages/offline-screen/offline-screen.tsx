import { Link } from 'react-router-dom';
import Footer from '../../components/footer/footer';
import { AppRoute } from '../../consts';
import './offline-screen.css';

function OfflineScreen(): JSX.Element {
  return (
    <div className="user-page">

      <div className="user-page__content">
        <div className="user-page__title">
          <p>The service is not available at the moment.</p>
          <p>Try again later.</p>
          <Link className='user-page__link' to={AppRoute.Main} >
            Main page
          </Link>
        </div>
      </div>

      <Footer/>
    </div>
  );
}

export default OfflineScreen;
