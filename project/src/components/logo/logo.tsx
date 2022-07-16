import { Link } from 'react-router-dom';

type LogoProps = {
  isInFooter?: boolean;
}

function Logo(props: LogoProps): JSX.Element {
  const logoClassName = props.isInFooter ? 'logo__link logo__link--light' : 'logo__link';
  return (
    <div className="logo">
      <Link to="/" className={logoClassName}>
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </Link>
    </div>
  );
}

export default Logo;
