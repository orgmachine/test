import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { TestDetailPage } from './test-detail.page';
describe('TestsPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TestDetailPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(TestDetailPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=test-detail.page.spec.js.map