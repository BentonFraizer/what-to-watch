import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const Film = {
  Name: 'The Grand Budapest Hotel',
  Genre: 'Drama',
  Year: 2014,
  Repeat: 20
} as const;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      filmName = {Film.Name}
      filmGenre = {Film.Genre}
      filmYear = {Film.Year}
      filmRepeat = {Film.Repeat}
    />
  </React.StrictMode>,
);
