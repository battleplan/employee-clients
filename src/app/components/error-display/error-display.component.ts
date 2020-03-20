import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, selectHasError, selectErrorMessage } from 'src/app/reducers';
import { Observable } from 'rxjs';
import { clearError } from 'src/app/actions/errors.actions';

@Component({
  selector: 'app-error-display',
  templateUrl: './error-display.component.html',
  styleUrls: ['./error-display.component.css']
})
export class ErrorDisplayComponent implements OnInit {

  hasError$: Observable<boolean>;
  errorMessage$: Observable<string>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.hasError$ = this.store.select(selectHasError);
    this.errorMessage$ = this.store.select(selectErrorMessage);
  }

  clear() {
    this.store.dispatch(clearError());
  }
}
