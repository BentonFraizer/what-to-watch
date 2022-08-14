import { createAction } from '@reduxjs/toolkit';
import { AppRoute, AuthorizationStatus } from '../consts';

export const changeGenre = createAction('filter/changeGenre', (value) => ({payload: value}));
export const applyFilter = createAction('filter/applyFilter', (value) => ({payload: value}));
export const resetFilter = createAction('filter/resetFilter');
export const loadFilms = createAction('data/loadFilms', (value) => ({payload: value}));
export const loadFilm = createAction('data/loadFilm', (value) => ({payload: value}));
export const loadSimilarFilms = createAction('data/loadSimilarFilms', (value) => ({payload: value}));
export const loadPromoFilm = createAction('data/loadPromoFilm', (value) => ({payload: value}));
export const loadComments = createAction('data/loadComments', (value) => ({payload: value}));
export const setDataLoadedStatus = createAction<boolean>('data/setDataLoadedStatus');
export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const redirectToRoute = createAction<AppRoute>('site/redirectToRoute');
export const setAvatarUrl = createAction<string | null>('user/setAvatarUrl');
