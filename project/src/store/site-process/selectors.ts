import { NameSpace } from '../../consts';
import { State } from '../../types/state';

export const getGenre = (state: State) => state[NameSpace.Site].genre;
export const getAvatarUrl = (state: State) => state[NameSpace.Site].avatarUrl;
