import MainScreen from '../../pages/main-screen/main-screen';

type AppScreenProps = {
  filmName: string;
  filmGenre: string;
  filmYear: number;
  filmRepeat: number
}

function App(filmName: AppScreenProps, filmGenre: AppScreenProps, filmYear: AppScreenProps, filmRepeat: AppScreenProps): JSX.Element {
  return (
    <MainScreen
      {...filmName}
      {...filmGenre}
      {...filmYear}
      {...filmRepeat}
    />
  );
}

export default App;
