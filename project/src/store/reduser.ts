import { createReducer } from '@reduxjs/toolkit';
import { changeGenre, applyFilter, resetFilter, loadFilms, setDataLoadedStatus, requireAuthorization } from './action';
import { AuthorizationStatus } from '../consts';
import { Film } from '../types';

type InitialState = {
  genre: string,
  filmsList: Film[],
  filteredFilmsList: Film[],
  authorizationStatus: AuthorizationStatus,
  isDataLoaded: boolean,
}

const initialState: InitialState = {
  genre: 'All genres',
  filmsList: [],
  filteredFilmsList: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoaded: false,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(applyFilter, (state, action) => {
      if (action.payload === 'All genres') {
        return {...state, filteredFilmsList: state.filmsList};
      }
      state.filteredFilmsList = state.filmsList.filter((film) => film.genre === action.payload);
    })
    .addCase(resetFilter, (state) => {
      state.filteredFilmsList = initialState.filmsList;
    })
    .addCase(loadFilms, (state, action) => {
      state.filmsList = action.payload;
    })
    .addCase(setDataLoadedStatus, (state, action) => {
      state.isDataLoaded = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

export { reducer };
