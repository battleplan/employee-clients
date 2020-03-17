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
    this.doTransaction(this.bankAccount.deposit, amountEl.valueAsNumber);
  }

  withdraw(amountEl: HTMLInputElement) {
    this.doTransaction(this.bankAccount.withdraw, amountEl.valueAsNumber);
  }

  doTransaction(op: Action<number>, amount: number) {
    op(amount);
    this.currentBalance = this.bankAccount.getBalance();

  }
}

type Action<T> = (amount: T) => void;
