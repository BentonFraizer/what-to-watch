import { createReducer } from '@reduxjs/toolkit';
import { changeGenre, loadFilms, loadFilm, loadSimilarFilms, loadPromoFilm, loadComments, setDataLoadedStatus, setAvatarUrl } from './action';
import { Film, Comment } from '../types';

type InitialState = {
  genre: string,
  filmsList: Film[],
  film: Film | null,
  similarFilmsList: Film[],
  promoFilm: Film | null,
  comments: Comment[];
  isDataLoaded: boolean,
  avatarUrl: string | null,
}

const initialState: InitialState = {
  genre: 'All genres',
  filmsList: [],
  film: null,
  similarFilmsList: [],
  promoFilm: null,
  comments: [],
  isDataLoaded: true,
  avatarUrl: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(loadFilms, (state, action) => {
      state.filmsList = action.payload;
    })
    .addCase(loadFilm, (state, action) => {
      state.film = action.payload;
    })
    .addCase(loadSimilarFilms, (state, action) => {
      state.similarFilmsList = action.payload;
    })
    .addCase(loadPromoFilm, (state, action) => {
      state.promoFilm = action.payload;
    })
    .addCase(loadComments, (state, action) => {
      state.comments = action.payload;
    })
    .addCase(setDataLoadedStatus, (state, action) => {
      state.isDataLoaded = action.payload;
    })
    .addCase(setAvatarUrl, (state, action) => {
      state.avatarUrl = action.payload;
    });
});

export { reducer };
