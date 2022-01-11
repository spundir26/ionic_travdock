import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RvoucherPage } from './rvoucher.page';

describe('RvoucherPage', () => {
  let component: RvoucherPage;
  let fixture: ComponentFixture<RvoucherPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RvoucherPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RvoucherPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
