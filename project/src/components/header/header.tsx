import { Link } from 'react-router-dom';
import Logo from '../logo/logo';
import Film from '../../types/film';
import UserBlock from '../user-block/user-block';

type HeaderProps = {
  isInMyList?: boolean;
  isInSignIn?: boolean;
  isInAddReview?: boolean;
  film?: Film;
  filmsAmount?: number | undefined;
}

function Header(props: HeaderProps): JSX.Element {
  const filmsAmount = props.filmsAmount ?? 0;

  const getFilmsAmountToRender = (favoriteFimsAmount: number) => favoriteFimsAmount === 0 ? 0 : favoriteFimsAmount;

  const filmsAmountToRender = getFilmsAmountToRender(filmsAmount);

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

      {props.isInMyList && <h1 className="page-title user-page__title">My list <span className="user-page__film-count">{filmsAmountToRender}</span></h1>}

      {props.isInSignIn && <h1 className="page-title user-page__title">Sign in</h1>}
      {!props.isInSignIn && <UserBlock/>}

    </header>
  );
}

export default Header;
