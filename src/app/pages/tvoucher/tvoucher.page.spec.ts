import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TvoucherPage } from './tvoucher.page';

describe('TvoucherPage', () => {
  let component: TvoucherPage;
  let fixture: ComponentFixture<TvoucherPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvoucherPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TvoucherPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
