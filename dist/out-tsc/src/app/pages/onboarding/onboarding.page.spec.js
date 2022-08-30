import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { OnboardingPage } from './onboarding.page';
describe('OnboardingPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [OnboardingPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(OnboardingPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=onboarding.page.spec.js.map