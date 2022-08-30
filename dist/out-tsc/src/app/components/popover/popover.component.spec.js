import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { PopoverComponent } from './popover.component';
describe('PopoverComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PopoverComponent],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(PopoverComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=popover.component.spec.js.map