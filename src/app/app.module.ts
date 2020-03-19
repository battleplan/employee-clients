import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { BankKioskComponent } from './components/bank-kiosk/bank-kiosk.component';
import { BankAccountService, StandardBonusCalculator } from './services/bank-account.service';
import { CounterComponent } from './components/counter/counter.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { CounterEffects } from './effects/counter.effects';
import { EmployeesComponent } from './components/employees/employees.component';
import { EmployeeListComponent } from './components/employees/components/employee-list/employee-list.component';
import { EmployeeEntryComponent } from './components/employees/components/employee-entry/employee-entry.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeEffects } from './effects/employees.effects';
@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    BankKioskComponent,
    CounterComponent,
    EmployeesComponent,
    EmployeeListComponent,
    EmployeeEntryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([CounterEffects, EmployeeEffects]),
    HttpClientModule
  ],
  providers: [
    StandardBonusCalculator,
    BankAccountService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
