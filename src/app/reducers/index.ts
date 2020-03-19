import * as fromCounter from './counter.reducer';
import * as fromEmployees from './employees.reducer';
import * as employeeModels from '../components/employees/models';
import { createSelector } from '@ngrx/store';

export interface AppState {
  counter: fromCounter.CounterState;
  employees: fromEmployees.EmployeeState;
}

export const reducers = {
  counter: fromCounter.reducer,
  employees: fromEmployees.reducer
};

// selectors

// a selector for each "branch" of the state.
const selectCounter = (state: AppState) => state.counter;
const selectEmployees = (state: AppState) => state.employees;

// Selectors for the components
export const selectCountingBy = createSelector(selectCounter, c => c.by);
export const selectCurrentCount = createSelector(selectCounter, (c) => c.current);
export const selectAtBeginning = createSelector(selectCurrentCount, selectCountingBy, (c, b) => (c - b) < 0);
export const selectResetDisabled = createSelector(selectCurrentCount, c => c === 0);

const { selectAll: selectEmployeeArray } = fromEmployees.adapter.getSelectors(selectEmployees);


// TODO: We need a selector that returns an EmployeeListModel[]

export const selectEmployeeListModel = createSelector(selectEmployeeArray,
  e => e as employeeModels.EmployeeListModel[]);
