import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RvoucherPageRoutingModule } from './rvoucher-routing.module';

import { RvoucherPage } from './rvoucher.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RvoucherPageRoutingModule
  ],
  declarations: [RvoucherPage]
})
export class RvoucherPageModule {}
