import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { OffersPage } from './offers.page';
describe('OffersPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [OffersPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(OffersPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=offers.page.spec.js.map