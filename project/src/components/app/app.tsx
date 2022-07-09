import MainScreen from '../../pages/main-screen/main-screen';

type AppScreenProps = {
  filmName: string;
  filmGenre: string;
  filmYear: number;
}

function App(filmName: AppScreenProps, filmGenre: AppScreenProps, filmYear: AppScreenProps): JSX.Element {
  return (
    <MainScreen
      {...filmName}
      {...filmGenre}
      {...filmYear}
    />
  );
}

export default App;
