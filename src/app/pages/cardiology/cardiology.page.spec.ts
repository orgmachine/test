import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CardiologyPage } from './cardiology.page';

describe('CardiologyPage', () => {
  let component: CardiologyPage;
  let fixture: ComponentFixture<CardiologyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardiologyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CardiologyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
