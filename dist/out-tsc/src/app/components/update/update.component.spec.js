import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { UpdateComponent } from './update.component';
describe('UpdateComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [UpdateComponent],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(UpdateComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=update.component.spec.js.map