import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { tap, map, filter } from 'rxjs/operators';
import * as counterActions from '../actions/counter.actions';
import * as appActions from '../actions/app.actions';
@Injectable()
export class CounterEffects {

  // applicationStarted -> Nothing || counterActions.countBySet(3)
  readCountBy$ = createEffect(() => this.actions$.pipe(
    ofType(appActions.applicationStarted),
    map(() => localStorage.getItem('by')),
    filter(by => by !== null),
    map(by => counterActions.countingBySet({ by: +by }))

  ));

  saveCountBy$ = createEffect(() => this.actions$.pipe(
    ofType(counterActions.countingBySet),
    tap(a => localStorage.setItem('by', a.by.toString()))
  ), { dispatch: false });

  constructor(private actions$: Actions) { }
}
