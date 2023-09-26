import { createSelector, createFeatureSelector } from '@ngrx/store';
import { UserState } from './user.state';

export const selectUserState = createFeatureSelector<UserState>('user');

export const selectUser = createSelector(
  selectUserState,
  (state: UserState) => state,
);

export const selectUsername = createSelector(
  selectUserState,
  (state: UserState) => state.username,
);

export const selectUserId = createSelector(
  selectUserState,
  (state: UserState) => state.id,
);

export const selectUserLoggedIn = createSelector(
  selectUserId,
  (userId: string) => !!userId,
);

export const selectUserFirstName = createSelector(
  selectUserState,
  (state: UserState) => state.firstName,
);

export const selectUserLastName = createSelector(
  selectUserState,
  (state: UserState) => state.lastName,
);

export const selectUserProfileImage = createSelector(
  selectUserState,
  (state: UserState) => state.imageProfile,
);
