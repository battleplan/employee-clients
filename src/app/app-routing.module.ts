import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { BankKioskComponent } from './components/bank-kiosk/bank-kiosk.component';
import { CounterComponent } from './components/counter/counter.component';
import { EmployeesComponent } from './components/employees/employees.component';



const routes: Routes = [
  {
    path: 'shopping',
    component: ShoppingListComponent
  },
  {
    path: 'banking',
    component: BankKioskComponent
  },
  {
    path: 'counter',
    component: CounterComponent
  },
  {
    path: 'employees',
    component: EmployeesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
