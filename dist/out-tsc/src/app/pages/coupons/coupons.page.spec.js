import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { CouponsPage } from './coupons.page';
describe('CouponsPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CouponsPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(CouponsPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=coupons.page.spec.js.map