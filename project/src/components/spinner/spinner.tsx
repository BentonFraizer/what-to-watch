import './spinner.css';

function Spinner(): JSX.Element{
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

export default Spinner;
