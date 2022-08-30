import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ProductsListPage } from './products-list.page';
describe('ProductsListPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ProductsListPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(ProductsListPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=products-list.page.spec.js.map