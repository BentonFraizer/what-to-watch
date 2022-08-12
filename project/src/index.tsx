import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { ToastContainer } from 'react-toastify';
import promoFilm from './mocks/promo-film';
import reviewsList from './mocks/reviews';
import { store } from './store';
import { fetchFilmsAction, checkAuthAction } from './store/api-actions';
import 'react-toastify/dist/ReactToastify.css';

store.dispatch(fetchFilmsAction());
store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <App
        {...{
          promoFilm,
          reviewsList
        }}
      />
    </Provider>
  </React.StrictMode>,
);
