import { createAction } from '@reduxjs/toolkit';

export const changeGenre = createAction('filter/changeGenre', (value) => ({payload: value}));
export const applyFilter = createAction('filter/applyFilter', (value) => ({payload: value}));
export const resetFilter = createAction('filter/resetFilter');
