import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { SubscriptionsPage } from './subscriptions.page';
describe('SubscriptionsPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SubscriptionsPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(SubscriptionsPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=subscriptions.page.spec.js.map