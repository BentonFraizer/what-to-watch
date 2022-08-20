import { createAction } from '@reduxjs/toolkit';
import { AppRoute } from '../consts';

export const postComment = createAction('data/postComment', (value) => ({payload: value}));
export const redirectToRoute = createAction<AppRoute>('site/redirectToRoute');
