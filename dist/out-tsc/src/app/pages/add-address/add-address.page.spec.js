import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { AddAddressPage } from './add-address.page';
describe('AddAddressPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AddAddressPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(AddAddressPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=add-address.page.spec.js.map