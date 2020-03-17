import { Injectable } from '@angular/core';

@Injectable()
export class BankAccountService {

  constructor(private bonusCalculator: StandardBonusCalculator) { }
  private currentBalance = 7000;

  deposit(amount: number) {
    const bonus = this.bonusCalculator.calculateBonusFor(this, amount);
    this.currentBalance += amount + bonus;
  }

  withdraw(amount: number) {
    this.currentBalance -= amount;
  }

  getBalance() {
    return this.currentBalance;
  }
}



export class StandardBonusCalculator {

  calculateBonusFor(account: BankAccountService, amountOfDeposit: number) {
    return account.getBalance() > 7000 ? amountOfDeposit * .10 : 0;
  }
}

