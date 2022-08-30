import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RisksPage } from './risks.page';

describe('RisksPage', () => {
  let component: RisksPage;
  let fixture: ComponentFixture<RisksPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RisksPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RisksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
