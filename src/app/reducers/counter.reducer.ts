import { Action, createReducer, on } from '@ngrx/store';
import * as actions from '../actions/counter.actions';

export interface CounterState {
  current: number;
  by: number;
}

const initialState: CounterState = {
  current: 0,
  by: 1
};

export function reducer(state: CounterState = initialState, action: Action): CounterState {
  return myReducer(state, action);
}


const myReducer = createReducer(
  initialState,
  on(actions.countIncremented, (s) => ({ current: s.current + s.by, by: s.by })),
  on(actions.countDecremented, (s) => ({ current: s.current - s.by, by: s.by })),
  on(actions.countingBySet, (s, a) => ({ current: s.current, by: a.by })),
  on(actions.countReset, () => initialState)
);
