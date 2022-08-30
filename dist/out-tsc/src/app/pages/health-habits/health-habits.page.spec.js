import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { HealthHabitsPage } from './health-habits.page';
describe('HealthHabitsPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [HealthHabitsPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(HealthHabitsPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=health-habits.page.spec.js.map