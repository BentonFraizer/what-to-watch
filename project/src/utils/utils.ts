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

//Функция для преобразования количества секунд в необходимый формат
//Функция позаимствована с сайта "https://russianblogs.com/article/6472332881/" и адаптирована;
export const convertSecondsToTime = (value: string) => {
  if(value === undefined || value === '0') {
    return '00:00';
  }
  let secondsTime = parseInt(value, 10);
  let minutesTime = 0;
  let hoursTime = 0;
  if (secondsTime >= 60) {
    minutesTime = parseInt(String(secondsTime / 60), 10);
    secondsTime = parseInt(String(secondsTime % 60), 10);
    if(minutesTime >= 60) {
      hoursTime = parseInt(String(minutesTime / 60), 10);
      minutesTime = parseInt(String(minutesTime % 60), 10);
    }
  }
  let result = `${secondsTime.toString().padStart(2, '0')}`;

  if ((Number(value) - 60) < 0 ) {
    result = `00:${secondsTime.toString().padStart(2, '0')}`;
  }

  if(minutesTime > 0 && hoursTime === 0) {
    result = `${minutesTime.toString().padStart(2, '0')}:${result}`;
  }
  if(hoursTime > 0) {
    result = `${hoursTime.toString().padStart(2, '0')}:${minutesTime.toString().padStart(2, '0')}:${result}`;
  }
  return result;
};

export const validatePassword = (password:string): boolean => {
  const NEEDED_ELEMENTS = 2;
  const heededSimbols = new Map();
  const separatedSymbols = Array.from(password);
  separatedSymbols.forEach((symbol) => {
    const regex = new RegExp(/[a-z]/i);
    if (regex.test(symbol)) {
      heededSimbols.set('hasLetter', true);
    }
  });

  separatedSymbols.forEach((symbol) => {
    const regex = new RegExp(/[0-9]/i);
    if (regex.test(symbol)){
      heededSimbols.set('hasNumber', true);
    }
  });

  if (heededSimbols.size === NEEDED_ELEMENTS) {
    return true;
  } else {
    return false;
  }
};


