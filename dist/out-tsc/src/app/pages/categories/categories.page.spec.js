import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { CategoriesPage } from './categories.page';
describe('CategoriesPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CategoriesPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(CategoriesPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=categories.page.spec.js.map