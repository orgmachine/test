import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RatingPage } from './rating.page';
describe('RatingPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [RatingPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(RatingPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=rating.page.spec.js.map