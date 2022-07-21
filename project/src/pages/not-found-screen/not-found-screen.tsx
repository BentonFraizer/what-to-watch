import { Link } from 'react-router-dom';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';

function NotFoundScreen(): JSX.Element {
  return (
    <div className="user-page">
      <Header/>

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
