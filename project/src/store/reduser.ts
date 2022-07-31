import { createReducer } from '@reduxjs/toolkit';
import { changeGenre, applyFilter } from './action';
import filmsList from '../mocks/films';

const initialState = {
  genre: 'allGenres',
  filmsList: filmsList,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(applyFilter, (state, action) => {
      state.filmsList = state.filmsList.filter((film) => film.genre === action.payload);
    });
});

export { reducer };
