import { Routes, Route } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { AppRoute } from '../../consts';
import AddReviewScreen from '../../pages/add-review-screen/add-review-screen';
import FilmScreen from '../../pages/film-screen/film-screen';
import MyListScreen from '../../pages/my-list/my-list';
import PlayerScreen from '../../pages/player-screen/player-screen';
import SignInScreen from '../../pages/sign-in-screen/sign-in-screen';
import MainScreen from '../../pages/main-screen/main-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import OfflineScreen from '../../pages/offline-screen/offline-screen';
import PrivateRoute from '../private-route/private-route';
import LoadingScreen from '../../pages/loading-screen/loading-screen';
import HistoryRouter from '../history-route/history-route';
import { isCheckedAuth } from '../../utils/utils';
import browserHistory from '../../browser-history';
import { checkAuthAction } from '../../store/api-actions';
import { useEffect } from 'react';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { getDataLoadedStatus } from '../../store/site-data/selectors';


function App(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(checkAuthAction());
  }, [dispatch]);

  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isDataLoaded = useAppSelector(getDataLoadedStatus);

  if (isDataLoaded === true) {
    if (isCheckedAuth(authorizationStatus) || !isDataLoaded) {
      return (
        <LoadingScreen/>
      );
    }
  } else {
    if (isCheckedAuth(authorizationStatus) || isDataLoaded) {
      return (
        <LoadingScreen/>
      );
    }
  }

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={
            <MainScreen />
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
              authorizationStatus={authorizationStatus}
            >
              <MyListScreen/>
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Film}
          element={
            <FilmScreen />
          }
        />
        <Route
          path={AppRoute.AddReview}
          element={
            <PrivateRoute
              authorizationStatus={authorizationStatus}
            >
              <AddReviewScreen />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Player}
          element={
            <PlayerScreen />
          }
        />
        <Route
          path={AppRoute.Offline}
          element={
            <OfflineScreen />
          }
        />
        <Route
          path='*'
          element={<NotFoundScreen />}
        />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
