import { Component, OnInit } from '@angular/core';
import { EmployeeListModel } from '../../models';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { EmployeeState, EmployeeEntity } from 'src/app/reducers/employees.reducer';
import { selectEmployeeListModel, AppState } from 'src/app/reducers';
import { employeeFired } from 'src/app/actions/employee.actions';

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

  fire(employee: EmployeeEntity) {
    const emp: EmployeeEntity = {
      id: employee.id,
      firstName: employee.firstName,
      lastName: employee.lastName,
      department: employee.department
    };
    this.store.dispatch(employeeFired({ payload: emp }));
  }
}
