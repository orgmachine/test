import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RiskPage } from './risk.page';
describe('RiskPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [RiskPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(RiskPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=risk.page.spec.js.map