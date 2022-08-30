import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { HealthPackagesPage } from './health-packages.page';
describe('HealthPackagesPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [HealthPackagesPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(HealthPackagesPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=health-packages.page.spec.js.map