import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { HistoryPage } from './history.page';
describe('HistoryPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [HistoryPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(HistoryPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=history.page.spec.js.map