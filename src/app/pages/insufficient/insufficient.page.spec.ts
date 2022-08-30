import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InsufficientPage } from './insufficient.page';

describe('InsufficientPage', () => {
  let component: InsufficientPage;
  let fixture: ComponentFixture<InsufficientPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsufficientPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InsufficientPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
