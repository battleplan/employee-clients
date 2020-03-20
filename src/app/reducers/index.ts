import * as fromCounter from './counter.reducer';
import * as fromEmployees from './employees.reducer';
import * as employeeModels from '../components/employees/models';
import * as fromErrors from './errors.reducer';
import { createSelector } from '@ngrx/store';

export interface AppState {
  counter: fromCounter.CounterState;
  employees: fromEmployees.EmployeeState;
  errors: fromErrors.ErrorsState;
}

export const reducers = {
  counter: fromCounter.reducer,
  employees: fromEmployees.reducer,
  errors: fromErrors.reducer
};

// selectors

// a selector for each "branch" of the state.
const selectCounter = (state: AppState) => state.counter;
const selectEmployees = (state: AppState) => state.employees;
const selectErrors = (state: AppState) => state.errors;

// Selectors for the components
export const selectHasError = createSelector(selectErrors, e => e.hasError);
export const selectErrorMessage = createSelector(selectErrors, e => e.errorMessage);

export const selectCountingBy = createSelector(selectCounter, c => c.by);
export const selectCurrentCount = createSelector(selectCounter, (c) => c.current);
export const selectAtBeginning = createSelector(selectCurrentCount, selectCountingBy, (c, b) => (c - b) < 0);
export const selectResetDisabled = createSelector(selectCurrentCount, c => c === 0);

const { selectAll: selectEmployeeArray } = fromEmployees.adapter.getSelectors(selectEmployees);


// TODO: We need a selector that returns an EmployeeListModel[]

export const selectEmployeeListModel = createSelector(selectEmployeeArray,
  e => e.map(employee => ({
    isTemporary: employee.id.toString().startsWith('T'),
    ...employee
  } as employeeModels.EmployeeListModel)));
