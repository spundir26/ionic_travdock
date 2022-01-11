import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TourcardPageRoutingModule } from './tourcard-routing.module';

import { TourcardPage } from './tourcard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TourcardPageRoutingModule
  ],
  declarations: [TourcardPage]
})
export class TourcardPageModule {}
