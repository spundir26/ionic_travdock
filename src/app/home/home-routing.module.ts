import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeGuard } from '../guards/home.guard';
import { UserDataResolver } from '../resolvers/userData.resolvers';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'home',
    canActivate: [HomeGuard],
    resolve:{userData: UserDataResolver},
    children:[
      {
        path:'',
        component: HomePage
      },
      {
        path:'feed',
        loadChildren:()=>import('../pages/feed/feed.module').then(
          m=> m.FeedPageModule
        )
      },
      {
        path:'itinerary',
        loadChildren:()=>import('../pages/itinerary/itinerary.module').then(
          m=> m.ItineraryPageModule
        )
      },
      {
        path:'tourcard',
        loadChildren:()=>import('../pages/tourcard/tourcard.module').then(
          m=> m.TourcardPageModule
        )
      },
      {
        path:'vouchers',
        loadChildren:()=>import('../pages/vouchers/vouchers.module').then(
          m=> m.VouchersPageModule
        )
      },
      {
        path:'rvouchers',
        loadChildren:()=>import('../pages/rvoucher/rvoucher.module').then(
          m=> m.RvoucherPageModule
        )
      },
      {
        path:'tvouchers',
        loadChildren:()=>import('../pages/tvoucher/tvoucher.module').then(
          m=> m.TvoucherPageModule
        )
      },
      {
        path:'helpline',
        loadChildren:()=>import('../pages/helpline/helpline.module').then(
          m=> m.HelplinePageModule
        )
      },
      {
        path:'monuments',
        loadChildren:()=>import('../pages/monuments/monuments.module').then(
          m=>m.MonumentsPageModule
        )
      },
      {
        path:'train',
        loadChildren:()=>import('../pages/train/train.module').then(
          m=>m.TrainPageModule
        )
      },
      {
        path:'flight',
        loadChildren:()=>import('../pages/flight/flight.module').then(
          m=>m.FlightPageModule
        )
      },
      {
        path:'main',
        loadChildren:()=>import('../pages/main/main.module').then(
          m=>m.MainPageModule
        )
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
