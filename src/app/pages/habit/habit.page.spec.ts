import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HabitPage } from './habit.page';

describe('HabitPage', () => {
  let component: HabitPage;
  let fixture: ComponentFixture<HabitPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HabitPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HabitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
