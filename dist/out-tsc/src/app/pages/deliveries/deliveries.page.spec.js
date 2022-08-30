import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { DeliveriesPage } from './deliveries.page';
describe('DeliveriesPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DeliveriesPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(DeliveriesPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=deliveries.page.spec.js.map