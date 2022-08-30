import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { WalletPage } from './wallet.page';
describe('WalletPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [WalletPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(WalletPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=wallet.page.spec.js.map