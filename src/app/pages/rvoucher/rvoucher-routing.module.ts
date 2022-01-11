import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RvoucherPage } from './rvoucher.page';

const routes: Routes = [
  {
    path: '',
    component: RvoucherPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RvoucherPageRoutingModule {}
