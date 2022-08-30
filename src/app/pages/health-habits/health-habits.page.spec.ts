import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HealthHabitsPage } from './health-habits.page';

describe('HealthHabitsPage', () => {
  let component: HealthHabitsPage;
  let fixture: ComponentFixture<HealthHabitsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthHabitsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HealthHabitsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
