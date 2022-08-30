import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { MyWalletPage } from './my-wallet.page';
describe('MyWalletPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MyWalletPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(MyWalletPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=my-wallet.page.spec.js.map