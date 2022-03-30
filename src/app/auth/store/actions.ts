import { createAction, props } from '@ngrx/store';
import { RegisterRequest } from '../types/register-request';
import { ActionTypes } from './action-types';

export const registerAction = createAction(
  ActionTypes.REGISTER,
  props<{ request: RegisterRequest }>()
);