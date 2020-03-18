import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { BankKioskComponent } from './components/bank-kiosk/bank-kiosk.component';
import { BankAccountService, StandardBonusCalculator } from './services/bank-account.service';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    BankKioskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    StandardBonusCalculator,
    BankAccountService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
