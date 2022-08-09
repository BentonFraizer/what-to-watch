import { createAction } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../consts';

export const changeGenre = createAction('filter/changeGenre', (value) => ({payload: value}));
export const applyFilter = createAction('filter/applyFilter', (value) => ({payload: value}));
export const resetFilter = createAction('filter/resetFilter');
export const loadFilms = createAction('data/loadFilms', (value) => ({payload: value}));
export const setDataLoadedStatus = createAction<boolean>('data/setDataLoadedStatus');
export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
