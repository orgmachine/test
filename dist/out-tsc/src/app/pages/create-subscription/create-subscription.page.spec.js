import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { CreateSubscriptionPage } from './create-subscription.page';
describe('CreateSubscriptionPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CreateSubscriptionPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(CreateSubscriptionPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=create-subscription.page.spec.js.map