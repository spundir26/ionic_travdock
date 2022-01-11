import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ItineraryPage } from './itinerary.page';

describe('ItineraryPage', () => {
  let component: ItineraryPage;
  let fixture: ComponentFixture<ItineraryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItineraryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ItineraryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
