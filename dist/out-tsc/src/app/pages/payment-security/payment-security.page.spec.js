import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { PaymentSecurityPage } from './payment-security.page';
describe('PaymentSecurityPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PaymentSecurityPage],
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
//# sourceMappingURL=payment-security.page.spec.js.map