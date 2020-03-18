import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectCurrentCount, selectAtBeginning, selectCountingBy, selectResetDisabled } from 'src/app/reducers';
import * as actions from '../../actions/counter.actions';
@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  current$: Observable<number>;
  atBeginning$: Observable<boolean>;
  countingBy$: Observable<number>;
  resetDisabled$: Observable<boolean>;
  constructor(private store: Store) { }

  ngOnInit(): void {
    this.current$ = this.store.select(selectCurrentCount);
    this.atBeginning$ = this.store.select(selectAtBeginning);
    this.countingBy$ = this.store.select(selectCountingBy);
    this.resetDisabled$ = this.store.select(selectResetDisabled);
  }

  increment() {
    // this.current += 1;
    this.store.dispatch(actions.countIncremented());
  }
  decrement() {
    // this.current -= 1;
    this.store.dispatch(actions.countDecremented());
  }
  reset() {
    this.store.dispatch(actions.countReset());
  }

  countBySet(by: number) {
    this.store.dispatch(actions.countingBySet({ by }));
  }

}
