import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../consts';
import AddReviewScreen from '../../pages/add-review-screen/add-review-screen';
import FilmScreen from '../../pages/film-screen/film-screen';
import MyListScreen from '../../pages/my-list/my-list';
import PlayerScreen from '../../pages/player-screen/player-screen';
import SignInScreen from '../../pages/sign-in-screen/sign-in-screen';
import MainScreen from '../../pages/main-screen/main-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import { Film, Review } from '../../types';
import PrivateRoute from '../private-route/private-route';

type AppProps = {
  filmsList: Film[];
  promoFilm: Film;
  reviewsList: Review[];
}

function App(props: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={
            <MainScreen
              {...props}
            />
          }
        />
        <Route
          path={AppRoute.SignIn}
          element={<SignInScreen />}
        />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.Auth}
            >
              <MyListScreen
                {...props}
              />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Film}
          element={
            <FilmScreen
              {...props}
            />
          }
        />
        <Route
          path={AppRoute.AddReview}
          element={
            <AddReviewScreen
              {...props}
            />
          }
        />
        <Route
          path={AppRoute.Player}
          element={
            <PlayerScreen
              {...props}
            />
          }
        />
        <Route
          path='*'
          element={<NotFoundScreen />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
