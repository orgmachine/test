import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { SupportPage } from './support.page';
describe('SupportPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SupportPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(SupportPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=support.page.spec.js.map