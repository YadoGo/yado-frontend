import { UserDetails } from '@core/models/user/user-details/user-details.model';
import { Action, createAction, createReducer, on } from '@ngrx/store';

const initialState: UserDetails = {
  id: '',
  email: '',
  firstName: '',
  lastName: '',
  imageProfile: '',
  username: '',
  role: 0,
};

export const setUser = createAction('[User] Set User', (user: UserDetails) => ({
  user,
}));

export type UserState = UserDetails;

const _userReducer = createReducer(
  initialState,
  on(setUser, (state, { user }) => user),
);

export function userReducer(state: UserDetails | undefined, action: Action) {
  return _userReducer(state, action);
}
