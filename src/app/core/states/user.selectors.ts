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

// export const selectUserRoleId = createSelector(
//   selectUserState,
//   (state: UserState) => state.roleId,
// );

export const selectUserLoggedIn = createSelector(
  selectUserId,
  (userId: string) => !!userId,
);
