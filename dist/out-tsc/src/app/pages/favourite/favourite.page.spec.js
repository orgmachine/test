import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { FavouritePage } from './favourite.page';
describe('FavouritePage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [FavouritePage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(FavouritePage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=favourite.page.spec.js.map