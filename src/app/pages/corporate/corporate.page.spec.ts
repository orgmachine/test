import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CorporatePage } from './contactus.page';

describe('TermsPage', () => {
  let component: CorporatePage;
  let fixture: ComponentFixture<CorporatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorporatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CorporatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
