import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TourcardPage } from './tourcard.page';

describe('TourcardPage', () => {
  let component: TourcardPage;
  let fixture: ComponentFixture<TourcardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TourcardPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TourcardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
