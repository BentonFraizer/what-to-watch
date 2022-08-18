import { Link } from 'react-router-dom';
import { changeGenre } from '../../store/action';
import { useAppDispatch } from '../../hooks/';
import { AppRoute } from '../../consts';

type LogoProps = {
  isInFooter?: boolean;
}

function Logo(props: LogoProps): JSX.Element {
  const logoClassName = props.isInFooter ? 'logo__link logo__link--light' : 'logo__link';
  const dispatch = useAppDispatch();
  return (
    <div className="logo">
      <Link to={AppRoute.Main} className={logoClassName}
        onClick={() => {
          dispatch(changeGenre('All genres'));
        }}
      >
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </Link>
    </div>
  );
}

export default Logo;
