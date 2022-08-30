import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ChooseAddressPage } from './choose-address.page';
describe('ChooseAddressPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ChooseAddressPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(ChooseAddressPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=choose-address.page.spec.js.map