import { Film } from '../../types';
import Header from '../../components/header/header';
import FormSendReview from '../../components/form-send-review/form-send-review';
import { useParams } from 'react-router-dom';

type AddReviewScreenProps = {
  filmsList: Film[];
}

function AddReviewScreen(props: AddReviewScreenProps): JSX.Element {
  const filmsList = props.filmsList;
  const {id} = useParams() as {id: string};
  const neededId = parseInt(id, 10);
  const film = filmsList[neededId - 1];
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

      <FormSendReview/>

    </section>
  );
}

export default AddReviewScreen;
