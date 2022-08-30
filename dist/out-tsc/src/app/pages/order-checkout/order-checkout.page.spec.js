import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { OrderCheckoutPage } from './order-checkout.page';
describe('OrderCheckoutPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [OrderCheckoutPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(OrderCheckoutPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=order-checkout.page.spec.js.map