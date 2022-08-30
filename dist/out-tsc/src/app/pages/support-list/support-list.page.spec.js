import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { SupportListPage } from './support-list.page';
describe('SupportListPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SupportListPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(SupportListPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=support-list.page.spec.js.map