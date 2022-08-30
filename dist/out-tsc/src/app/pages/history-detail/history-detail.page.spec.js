import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { HistoryDetailPage } from './history-detail.page';
describe('HistoryDetailPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [HistoryDetailPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(HistoryDetailPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=history-detail.page.spec.js.map