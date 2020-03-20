import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { employeeAdded } from 'src/app/actions/employee.actions';

@Component({
  selector: 'app-employee-entry',
  templateUrl: './employee-entry.component.html',
  styleUrls: ['./employee-entry.component.css']
})
export class EmployeeEntryComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  hire(firstNameEl: HTMLInputElement,
    lastNameEl: HTMLInputElement,
    departmentEl: HTMLSelectElement) {
    const payload = {
      firstName: firstNameEl.value,
      lastName: lastNameEl.value,
      department: departmentEl.value
    };

    this.store.dispatch(employeeAdded(payload));
    firstNameEl.value = '';
    lastNameEl.value = '';
    departmentEl.value = 'DEV';
    firstNameEl.focus();
  }
}
