import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PaymentSecurityPage } from './payment-security.page';

describe('PaymentSecurityPage', () => {
  let component: PaymentSecurityPage;
  let fixture: ComponentFixture<PaymentSecurityPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentSecurityPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PaymentSecurityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
