import MainScreen from '../../pages/main-screen/main-screen';
import { Film } from '../../types';

type AppProps = {
  films: Film[];
  promoFilm: Film;
}

function App(props: AppProps): JSX.Element {
  return (
    <MainScreen
      films = {props.films}
      promoFilm = {props.promoFilm}
    />
  );
}

export default App;
