import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { Film, Comment } from '../types';
import { postComment, redirectToRoute, changeFilmStatus } from './action';
import { saveToken, dropToken } from '../services/token';
import { APIRoute, AppRoute } from '../consts';
import { AuthData, UserData, PostCommentData, ChangeFilmStatusData } from '../types';

// Запрос всех фильмов
export const fetchFilmsAction = createAsyncThunk<Film[], undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchFilms',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<Film[]>(APIRoute.Films);
    return data;
  },
);

// Зарос одного фильма
export const fetchFilmAction = createAsyncThunk<Film, number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchFilm',
  async (id: number, {extra: api}) => {
    const {data} = await api.get<Film>(`${APIRoute.Film}${id}`);
    return data;
  },
);

//Запрос похожих фильмов
export const fetchSimilarFilmsAction = createAsyncThunk<Film[], number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchSimilarFilms',
  async (id: number, {extra: api}) => {
    const {data} = await api.get<Film[]>(`${APIRoute.Film}${id}/similar`);
    return data;
  },
);

//Запрос промофильма
export const fetchPromoFilmAction = createAsyncThunk<Film, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchPromoFilm',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<Film>(APIRoute.Promo);
    return data;
  },
);

//Запрос комментариев
export const fetchCommentsAction = createAsyncThunk<Comment[], number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchComments',
  async (id: number, {extra: api}) => {
    const {data} = await api.get<Comment[]>(`${APIRoute.Comments}${id}`);
    return data;
  },
);

//Отправка комментария на сервер
export const postCommentAction = createAsyncThunk<void, PostCommentData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/postComment',
  async ({comment, rating, filmId}, {dispatch, extra: api}) => {
    const {data} = await api.post<PostCommentData>(APIRoute.Comments, {comment, rating});
    dispatch(postComment(data));
  },
);

//Запрос списка фильмов "к просмотру"
export const fetchFavoriteFilmsAction = createAsyncThunk<Film[], undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchFavoriteFilms',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<Film[]>(APIRoute.Favorite);
    return data;
  },
);

//Изменение статуса "к просмотру" у фильма
export const changeFilmStatusAction = createAsyncThunk<void, ChangeFilmStatusData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/changeFilmStatus',
  async ({filmId, status}, {dispatch, extra: api}) => {
    const {data} = await api.post<ChangeFilmStatusData>(`${APIRoute.Favorite}/${filmId}/${status}`, {filmId, status});
    dispatch(changeFilmStatus(data));
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    await api.get(APIRoute.Login);
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/login',
  async ({eMail: email, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(redirectToRoute(AppRoute.Main));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  },
);
