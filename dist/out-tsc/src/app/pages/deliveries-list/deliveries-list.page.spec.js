import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { DeliveriesListPage } from './deliveries-list.page';
describe('DeliveriesListPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DeliveriesListPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(DeliveriesListPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=deliveries-list.page.spec.js.map