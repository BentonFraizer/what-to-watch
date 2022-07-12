import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import filmsList from './mocks/films-list';
import promoFilm from './mocks/promo-film';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      films = {filmsList}
      promoFilm = {promoFilm}
    />
  </React.StrictMode>,
);
