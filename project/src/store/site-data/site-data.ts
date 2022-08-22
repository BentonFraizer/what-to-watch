import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../consts';
import { SiteData } from '../../types/state';
import { fetchFilmsAction, fetchFilmAction, fetchSimilarFilmsAction, fetchPromoFilmAction, fetchCommentsAction, postCommentAction, fetchFavoriteFilmsAction } from '../api-actions';

const initialState: SiteData = {
  filmsList: [],
  film: null,
  similarFilmsList: [],
  promoFilm: null,
  comments: [],
  isDataLoaded: true,
  favoriteFilmsList: [],
};

export const siteData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFilmsAction.pending, (state) => {
        state.isDataLoaded = true;
      })
      .addCase(fetchFilmsAction.fulfilled, (state, action) => {
        state.filmsList = action.payload;
        state.isDataLoaded = false;
      })
      .addCase(fetchFilmAction.pending, (state) => {
        state.isDataLoaded = true;
      })
      .addCase(fetchFilmAction.fulfilled, (state, action) => {
        state.film = action.payload;
        state.isDataLoaded = false;
      })
      .addCase(fetchSimilarFilmsAction.pending, (state) => {
        state.isDataLoaded = true;
      })
      .addCase(fetchSimilarFilmsAction.fulfilled, (state, action) => {
        state.similarFilmsList = action.payload;
        state.isDataLoaded = false;
      })
      .addCase(fetchPromoFilmAction.pending, (state) => {
        state.isDataLoaded = true;
      })
      .addCase(fetchPromoFilmAction.fulfilled, (state, action) => {
        state.promoFilm = action.payload;
        state.isDataLoaded = false;
      })
      .addCase(fetchCommentsAction.pending, (state) => {
        state.isDataLoaded = true;
      })
      .addCase(fetchCommentsAction.fulfilled, (state, action) => {
        state.comments = action.payload;
        state.isDataLoaded = false;
      })
      .addCase(postCommentAction.pending, (state) => {
        state.isDataLoaded = true;
      })
      .addCase(postCommentAction.fulfilled, (state) => {
        state.isDataLoaded = false;
      })
      .addCase(fetchFavoriteFilmsAction.pending, (state) => {
        state.isDataLoaded = true;
      })
      .addCase(fetchFavoriteFilmsAction.fulfilled, (state, action) => {
        state.favoriteFilmsList = action.payload;
        state.isDataLoaded = false;
      });
  },
});
