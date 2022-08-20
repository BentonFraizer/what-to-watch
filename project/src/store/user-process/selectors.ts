import { NameSpace } from '../../consts';
import { State } from '../../types/state';
import { AuthorizationStatus } from '../../consts';

export const getAuthorizationStatus = (state: State): AuthorizationStatus => state[NameSpace.User].authorizationStatus;
