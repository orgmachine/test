import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { AddPrescriptionPage } from './add-prescription.page';
describe('AddPrescriptionPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AddPrescriptionPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(AddPrescriptionPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=add-prescription.page.spec.js.map