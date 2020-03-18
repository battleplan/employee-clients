import { Component, OnInit } from '@angular/core';
import { BankAccountService } from 'src/app/services/bank-account.service';

@Component({
  selector: 'app-bank-kiosk',
  templateUrl: './bank-kiosk.component.html',
  styleUrls: ['./bank-kiosk.component.css']
})
export class BankKioskComponent implements OnInit {

  currentBalance: number;

  constructor(private bankAccount: BankAccountService) { }

  ngOnInit(): void {
    this.currentBalance = this.bankAccount.getBalance();
  }

  deposit(amountEl: HTMLInputElement) {
    this.bankAccount.deposit(amountEl.valueAsNumber);
    this.currentBalance = this.bankAccount.getBalance();
  }

  withdraw(amountEl: HTMLInputElement) {
    this.bankAccount.withdraw(amountEl.valueAsNumber);
    this.currentBalance = this.bankAccount.getBalance();
  }

  doTransaction(op: Action<number>, amount: number) {
    op(amount);
    this.currentBalance = this.bankAccount.getBalance();

  }
}

type Action<T> = (amount: T) => void;
