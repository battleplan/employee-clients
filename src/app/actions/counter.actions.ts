import { createAction, props } from '@ngrx/store';

export const countIncremented = createAction(
  '[counter] increment'
);

export const countDecremented = createAction(
  '[counter] count decremented'
);

export const countReset = createAction(
  '[counter] count reset'
);

export const countingBySet = createAction(
  '[counter] counting by set',
  props<{ by: number }>()
);
