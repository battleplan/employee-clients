import * as fromCounter from './counter.reducer';
import { createSelector } from '@ngrx/store';

export interface AppState {
  counter: fromCounter.CounterState;
}

export const reducers = {
  counter: fromCounter.reducer
};

// selectors

// a selector for each "branch" of the state.
const selectCounter = (state: AppState) => state.counter;

// Selectors for the components
export const selectCountingBy = createSelector(selectCounter, c => c.by);
export const selectCurrentCount = createSelector(selectCounter, (c) => c.current);
export const selectAtBeginning = createSelector(selectCurrentCount, selectCountingBy, (c, b) => (c - b) < 0);
export const selectResetDisabled = createSelector(selectCurrentCount, c => c === 0);
