import { createAction } from '@reduxjs/toolkit';
import { Film } from '../types';
import { AuthorizationStatus } from '../consts';

export const changeGenre = createAction('filter/changeGenre', (value) => ({payload: value}));
export const applyFilter = createAction('filter/applyFilter', (value) => ({payload: value}));
export const resetFilter = createAction('filter/resetFilter');
export const loadFilms = createAction<Film[]>('data/loadFilms');
export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
