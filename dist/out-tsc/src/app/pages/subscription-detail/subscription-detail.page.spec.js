import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { SubscriptionDetailPage } from './subscription-detail.page';
describe('SubscriptionDetailPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SubscriptionDetailPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(SubscriptionDetailPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=subscription-detail.page.spec.js.map