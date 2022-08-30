import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ForgotPage } from './forgot.page';
describe('ForgotPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ForgotPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(ForgotPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=forgot.page.spec.js.map