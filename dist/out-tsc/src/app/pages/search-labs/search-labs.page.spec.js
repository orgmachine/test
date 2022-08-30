import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { SearchLabsPage } from './search-labs.page';
describe('SearchLabsPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SearchLabsPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(SearchLabsPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=search-labs.page.spec.js.map