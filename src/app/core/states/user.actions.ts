import { createAction, props } from '@ngrx/store';
import { UserDetails } from '@core/models/user/user-details/user-details.model';

export const login = createAction(
  '[User] Login',
  props<{ token: string; userDetails: UserDetails }>(),
);

export const logout = createAction('[User] Logout');

export const clearUserData = createAction('[User] Clear User Data');
