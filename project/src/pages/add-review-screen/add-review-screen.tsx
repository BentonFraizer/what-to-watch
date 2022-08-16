import Header from '../../components/header/header';
import FormSendReview from '../../components/form-send-review/form-send-review';
import { useParams } from 'react-router-dom';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import { useAppSelector } from '../../hooks/index';

function AddReviewScreen(): JSX.Element | null {
  const {filmsList} = useAppSelector((state) => state);
  const {id} = useParams();

  if (!id) {
    return null;
  }

  const film = filmsList.find((item) => item.id === parseInt(id, 10));

  if (!film) {
    return <NotFoundScreen/>;
  }

  const {backgroundImage, backgroundColor, name, posterImage} = film;

  return (
    <section className="film-card film-card--full" style={{backgroundColor: backgroundColor}}>
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={backgroundImage} alt={name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header isInAddReview film={film}/>

        <div className="film-card__poster film-card__poster--small">
          <img src={posterImage} alt={`${name} poster`} width="218" height="327" />
        </div>
      </div>

      <FormSendReview currentFilmId={id} />

    </section>
  );
}

export default AddReviewScreen;
