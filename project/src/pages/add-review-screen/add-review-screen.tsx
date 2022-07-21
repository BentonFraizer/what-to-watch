import { Film } from '../../types';
import Header from '../../components/header/header';
import FormSendReview from '../../components/form-send-review/form-send-review';

type AddReviewScreenProps = {
  filmsList: Film[];
}

function AddReviewScreen(props: AddReviewScreenProps): JSX.Element {
  const filmsList = props.filmsList;
  const film = filmsList[4];
  const {backgroundImage, name, posterImage} = film;

  return (
    <section className="film-card film-card--full" >
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

      <FormSendReview/>

    </section>
  );
}

export default AddReviewScreen;
