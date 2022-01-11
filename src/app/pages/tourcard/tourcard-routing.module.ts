import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TourcardPage } from './tourcard.page';

const routes: Routes = [
  {
    path: '',
    component: TourcardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TourcardPageRoutingModule {}
