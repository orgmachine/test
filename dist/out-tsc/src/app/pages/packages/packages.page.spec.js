import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { PackagesPage } from './packages.page';
describe('PackagesPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PackagesPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(PackagesPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=packages.page.spec.js.map