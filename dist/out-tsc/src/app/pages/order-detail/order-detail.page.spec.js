import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { OrderDetailPage } from './order-detail.page';
describe('OrderDetailPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [OrderDetailPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(OrderDetailPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=order-detail.page.spec.js.map