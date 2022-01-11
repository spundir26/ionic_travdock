import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TvoucherPage } from './tvoucher.page';

const routes: Routes = [
  {
    path: '',
    component: TvoucherPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TvoucherPageRoutingModule {}
