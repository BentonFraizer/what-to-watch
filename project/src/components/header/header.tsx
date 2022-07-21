import { Link } from 'react-router-dom';
import Logo from '../logo/logo';
import Film from '../../types/film';

type HeaderProps = {
  isInMyList?: boolean;
  isInSignIn?: boolean;
  isInAddReview?: boolean;
  film?: Film;
}

function Header(props: HeaderProps): JSX.Element {
  return (
    <header className="page-header user-page__head">
      <Logo/>
      {props.isInAddReview &&
      <nav className="breadcrumbs">
        <ul className="breadcrumbs__list">
          <li className="breadcrumbs__item">
            <Link to={`/films/${props.film?.id}`} className="breadcrumbs__link">{props.film?.name}</Link>
          </li>
          <li className="breadcrumbs__item">
            <Link to={`/films/${props.film?.id}/review`} className="breadcrumbs__link">Add review</Link>
          </li>
        </ul>
      </nav> }

      {props.isInMyList && <h1 className="page-title user-page__title">My list <span className="user-page__film-count">9</span></h1>}

      {props.isInSignIn && <h1 className="page-title user-page__title">Sign in</h1>}
      {!props.isInSignIn &&
        <ul className="user-block">
          <li className="user-block__item">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </li>
          <li className="user-block__item">
            <Link to="/mylist" className="user-block__link">Sign out</Link>
          </li>
        </ul>}
    </header>
  );
}

export default Header;
