import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { NotificationsPage } from './notifications.page';
describe('NotificationsPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [NotificationsPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(NotificationsPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=notifications.page.spec.js.map