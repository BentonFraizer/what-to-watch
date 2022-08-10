import { Film } from '../types';
import { AuthorizationStatus } from '../consts';

export const timeConvertation = (minutesAmount:number): string => {
  const hours = (minutesAmount / 60);
  const roundHours = Math.floor(hours);
  const minutes = (hours - roundHours) * 60;
  const roundMinutes = Math.round(minutes);
  if (roundHours === 0) {
    return `${roundMinutes}m`;
  }
  return `${roundHours}h ${roundMinutes}m`;
};

// Функция для получения массива неповторяющихся жанров и дополнительно 'All genres'
export const getGenres = (films: Film[]) => {
  const genres = new Set(films.map((film) => film.genre));
  return Array.from(['All genres', ...genres]);
};

//функция для проверки авторизации пользователя
export const isCheckedAuth = (authorizationStatus: AuthorizationStatus): boolean =>
  authorizationStatus === AuthorizationStatus.Unknown;
