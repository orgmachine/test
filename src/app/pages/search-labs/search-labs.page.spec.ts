import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearchLabsPage } from './search-labs.page';

describe('SearchLabsPage', () => {
  let component: SearchLabsPage;
  let fixture: ComponentFixture<SearchLabsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchLabsPage ],
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
