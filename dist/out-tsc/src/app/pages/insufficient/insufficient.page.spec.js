import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { InsufficientPage } from './insufficient.page';
describe('InsufficientPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [InsufficientPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(InsufficientPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=insufficient.page.spec.js.map