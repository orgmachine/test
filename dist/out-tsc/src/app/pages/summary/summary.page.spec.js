import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { SummaryPage } from './summary.page';
describe('SummaryPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SummaryPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(SummaryPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=summary.page.spec.js.map