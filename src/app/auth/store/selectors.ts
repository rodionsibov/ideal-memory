import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from 'src/app/shared/types/app-state';
import { AuthState } from '../types/auth-state';

export const authFeatureSelector = createFeatureSelector<AuthState>('auth');

export const isSubmittingSelector = createSelector(
  authFeatureSelector,
  (authState: AuthState) => authState.isSubmitting
);
