import { Link } from 'react-router-dom';
import { changeGenre, applyFilter, resetFilter } from '../../store/action';
import { useAppDispatch } from '../../hooks/';

type LogoProps = {
  isInFooter?: boolean;
}

function Logo(props: LogoProps): JSX.Element {
  const logoClassName = props.isInFooter ? 'logo__link logo__link--light' : 'logo__link';
  const dispatch = useAppDispatch();
  return (
    <div className="logo">
      <Link to="/" className={logoClassName}
        onClick={() => {
          dispatch(resetFilter());
          dispatch(changeGenre('All genres'));
          dispatch(applyFilter('All genres'));
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
