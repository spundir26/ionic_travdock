import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TvoucherPageRoutingModule } from './tvoucher-routing.module';

import { TvoucherPage } from './tvoucher.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TvoucherPageRoutingModule
  ],
  declarations: [TvoucherPage]
})
export class TvoucherPageModule {}
