import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { BookingsPage } from './bookings.page';
describe('BookingsPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [BookingsPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(BookingsPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=bookings.page.spec.js.map