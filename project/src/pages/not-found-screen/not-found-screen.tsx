import { Link } from 'react-router-dom';
import Footer from '../../components/footer/footer';
import Logo from '../../components/logo/logo';

function NotFoundScreen(): JSX.Element {
  return (
    <div className="user-page">
      <header className="page-header film-card__head" style={{maxWidth: 'none', margin: '0'}}>
        <Logo/>

        <ul className="user-block">
          <li className="user-block__item">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </li>
          <li className="user-block__item">
            <a href="#section" className="user-block__link">Sign out</a>
          </li>
        </ul>
      </header>

      <div className="user-page__content">
        <div className="user-page__title" style={{fontSize:'50px', color:'#dfcf77'}}>
          <b>404</b>
          <p>Page not found</p>
          <Link to="/" style={{fontSize: '30px', color: 'white'}} >
            Go to Main page
          </Link>
        </div>
      </div>

      <Footer/>
    </div>
  );
}

export default NotFoundScreen;
