import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { IframePage } from './iframe.page';
describe('IframePage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [IframePage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(IframePage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=iframe.page.spec.js.map