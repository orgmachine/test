import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { CheckoutPage } from './checkout.page';
describe('CheckoutPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CheckoutPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(CheckoutPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=checkout.page.spec.js.map