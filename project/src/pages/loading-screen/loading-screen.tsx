import './loading-screen.css';

function LoadingScreen(): JSX.Element{
  return (
    <>
      <div className="text">Loading...</div>
      <div className="loader">
        <div className="inner one"></div>
        <div className="inner two"></div>
        <div className="inner three"></div>
      </div>
    </>
  );
}

export default LoadingScreen;
