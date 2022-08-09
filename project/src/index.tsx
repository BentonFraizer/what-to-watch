import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app/app';
import promoFilm from './mocks/promo-film';
import reviewsList from './mocks/reviews';
import { store } from './store';
import { fetchFilmsAction } from './store/api-actions';

store.dispatch(fetchFilmsAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        {...{
          promoFilm,
          reviewsList
        }}
      />
    </Provider>
  </React.StrictMode>,
);
