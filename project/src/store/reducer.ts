import { createReducer } from '@reduxjs/toolkit';
import { changeGenre, applyFilter, resetFilter, loadFilms, loadFilm, loadPromoFilm, setDataLoadedStatus, requireAuthorization, setAvatarUrl } from './action';
import { AuthorizationStatus } from '../consts';
import { Film } from '../types';

type InitialState = {
  genre: string,
  filmsList: Film[],
  film: Film | null,
  promoFilm: Film | null,
  filteredFilmsList: Film[],
  authorizationStatus: AuthorizationStatus,
  isDataLoaded: boolean,
  avatarUrl: string | null,
}

const initialState: InitialState = {
  genre: 'All genres',
  filmsList: [],
  film: null,
  promoFilm: null,
  filteredFilmsList: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoaded: false,
  avatarUrl: null,
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
    .addCase(loadFilm, (state, action) => {
      state.film = action.payload;
    })
    .addCase(loadPromoFilm, (state, action) => {
      state.promoFilm = action.payload;
    })
    .addCase(setDataLoadedStatus, (state, action) => {
      state.isDataLoaded = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setAvatarUrl, (state, action) => {
      state.avatarUrl = action.payload;
    });
});

export { reducer };