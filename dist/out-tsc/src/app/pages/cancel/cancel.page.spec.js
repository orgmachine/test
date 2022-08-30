import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { CancelPage } from './cancel.page';
describe('CancelPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CancelPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(CancelPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=cancel.page.spec.js.map