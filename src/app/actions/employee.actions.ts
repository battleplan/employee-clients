import { createAction, props } from '@ngrx/store';
import { EmployeeEntity } from '../reducers/employees.reducer';



export const employeesLoadedSuccessfully = createAction(
  '[employees] loaded successfully',
  props<{ payload: EmployeeEntity[] }>()
);
