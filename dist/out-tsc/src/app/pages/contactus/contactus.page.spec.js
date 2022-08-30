import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ContactUsPage } from './contactus.page';
describe('TermsPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ContactUsPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(ContactUsPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=contactus.page.spec.js.map