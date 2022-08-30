import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { MyTransactionPage } from './my-transaction.page';
describe('MyTransactionPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MyTransactionPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(MyTransactionPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=my-transaction.page.spec.js.map