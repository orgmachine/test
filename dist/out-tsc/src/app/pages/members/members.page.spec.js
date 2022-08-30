import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { MembersPage } from './members.page';
describe('MembersPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MembersPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(MembersPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=members.page.spec.js.map