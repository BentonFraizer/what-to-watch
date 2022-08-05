import { createReducer } from '@reduxjs/toolkit';
import { changeGenre, applyFilter, resetFilter } from './action';
import filmsList from '../mocks/films';

const initialFilmsList = filmsList;

const initialState = {
  genre: 'All genres',
  filmsList: initialFilmsList,
  filteredFilmsList: initialFilmsList,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(applyFilter, (state, action) => {
      if (action.payload === 'All genres') {
        return {...state, filteredFilmsList: initialFilmsList};
      }
      state.filteredFilmsList = state.filteredFilmsList.filter((film) => film.genre === action.payload);
    })
    .addCase(resetFilter, (state) => {
      state.filteredFilmsList = initialState.filmsList;
    });
});

export { reducer };
