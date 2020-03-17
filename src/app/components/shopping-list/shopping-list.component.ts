import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  items: ShoppingItem[] = [
    { description: 'Shampoo', purchased: false },
    { description: 'Socks', purchased: true }
  ];
  constructor() {
  }

  ngOnInit(): void {
  }

  addItem(item: HTMLInputElement) {
    const itemToAdd: ShoppingItem = {
      description: item.value,
      purchased: false
    };
    this.items.unshift(itemToAdd);
    item.value = '';
    item.focus();
  }

  markPurchased(item: ShoppingItem) {
    item.purchased = true;
  }

}

interface ShoppingItem {
  description: string;
  purchased: boolean;
}
