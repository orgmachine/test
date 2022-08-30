import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ModalPage } from './modal.page';
describe('ModalPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ModalPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(ModalPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=modal.page.spec.js.map