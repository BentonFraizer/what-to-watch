import { store } from '../store/index';
import { AuthorizationStatus } from '../consts';
import { Film, Comment } from './index';

export type SiteData = {
  filmsList: Film[],
  film: Film | null,
  similarFilmsList: Film[],
  promoFilm: Film | null,
  comments: Comment[];
  isCommentSentSuccessfully: boolean,
  isDataLoaded: boolean,
  favoriteFilmsList: Film[],
  isFavoriteStatusChanged: boolean,
  error: {
    postComment: boolean,
  },
}

export type SiteProcess = {
  genre: string,
  avatarUrl: string | null,
}

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
}

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
