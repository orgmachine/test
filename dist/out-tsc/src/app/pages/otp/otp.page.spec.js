import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { OtpPage } from './otp.page';
describe('OtpPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [OtpPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(OtpPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=otp.page.spec.js.map