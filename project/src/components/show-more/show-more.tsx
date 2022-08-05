type ShowMoreProps = {
  onButtonClick: () => void;
}

function ShowMore({onButtonClick}: ShowMoreProps): JSX.Element{
  return (
    <div
      className="catalog__more"
      onClick={onButtonClick}
    >
      <button className="catalog__button" type="button">Show more</button>
    </div>
  );
}

export default ShowMore;
