export enum AppRoute {
  Main = '/what-to-watch',
  SignIn = '/what-to-watch/login',
  MyList = '/what-to-watch/mylist',
  Film = '/what-to-watch/films/:id',
  AddReview = '/what-to-watch/films/:id/review',
  Player = '/what-to-watch/player/:id',
  Offline = '/what-to-watch/offline',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const RATING_NUMBERS:number[] = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

export enum Rating {
  Bad = 'Bad',
  Normal = 'Normal',
  Good = 'Good',
  VeryGood = 'Very good',
  Awesome = 'Awesome',
}

export enum TabName {
  Overview = 'Overview',
  Details = 'Details',
  Reviews = 'Reviews',
}

export enum APIRoute {
  Films = '/films',
  Login = '/login',
  Logout = '/logout',
  Promo = '/promo',
  Film = '/films/',
  Comments = '/comments/',
  Favorite = '/favorite',
}

export enum NameSpace {
  Site = 'SITE',
  Data = 'DATA',
  User = 'USER',
}

export enum ProgressBar {
  Start = 0,
  End = 100,
}
