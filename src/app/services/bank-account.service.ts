import { Injectable } from '@angular/core';

@Injectable()
export class BankAccountService {


  constructor(private bonusCalculator: StandardBonusCalculator) {
    console.log(bonusCalculator);
  }
  private currentBalance = 7000;

  deposit(amount: number) {
    const bonus = this.bonusCalculator.calculateBonusFor(this.getBalance(), amount);
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

  calculateBonusFor(balance: number, amountOfDeposit: number) {
    return balance > 7000 ? amountOfDeposit * .10 : 0;
  }
}

