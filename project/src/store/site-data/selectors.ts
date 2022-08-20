import { NameSpace } from '../../consts';
import { State } from '../../types/state';
import { Film, Comment } from '../../types';

export const getFilms = (state: State): Film[] => state[NameSpace.Data].filmsList;
export const getFilm = (state: State): Film | null => state[NameSpace.Data].film;
export const getSimilarFilmsList = (state: State): Film[] => state[NameSpace.Data].similarFilmsList;
export const getPromoFilm = (state: State): Film | null => state[NameSpace.Data].promoFilm;
export const getComments = (state: State): Comment[] => state[NameSpace.Data].comments;
export const getLoadedDataStatus = (state: State): boolean => state[NameSpace.Data].isDataLoaded;
