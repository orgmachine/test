import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { PrivacyPage } from './privacy.page';
describe('PrivacyPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PrivacyPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(PrivacyPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=privacy.page.spec.js.map