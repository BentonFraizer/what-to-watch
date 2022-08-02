import { createReducer } from '@reduxjs/toolkit';
import { changeGenre, applyFilter, resetFilter } from './action';
import filmsList from '../mocks/films';

const initialFilmsList = filmsList;

const initialState = {
  genre: 'All genres',
  filmsList: initialFilmsList,
  filteredFilmList: initialFilmsList,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(applyFilter, (state, action) => {
      if (action.payload === 'All genres') {
        return {...state, filteredFilmList: initialFilmsList};
      }
      state.filteredFilmList = state.filteredFilmList.filter((film) => film.genre === action.payload);
    })
    .addCase(resetFilter, (state) => {
      state.filteredFilmList = initialState.filmsList;
    });
});

export { reducer };
