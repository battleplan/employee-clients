import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankKioskComponent } from './bank-kiosk.component';

describe('BankKioskComponent', () => {
  let component: BankKioskComponent;
  let fixture: ComponentFixture<BankKioskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankKioskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankKioskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
