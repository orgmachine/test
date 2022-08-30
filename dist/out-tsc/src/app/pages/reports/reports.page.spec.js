import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ReportsPage } from './reports.page';
describe('ReportsPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ReportsPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(ReportsPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=reports.page.spec.js.map