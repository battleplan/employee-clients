import { Component, OnInit } from '@angular/core';
import { EmployeeListModel } from '../../models';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { EmployeeState } from 'src/app/reducers/employees.reducer';
import { selectEmployeeListModel, AppState } from 'src/app/reducers';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  model$: Observable<EmployeeListModel[]>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.model$ = this.store.select(selectEmployeeListModel);
  }

}
