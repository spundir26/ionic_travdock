import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from 'src/app/services/auth.service';
import { MenuController } from '@ionic/angular';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  uData: any;
  isRemainder = false;
  isTickets = false;
  mData:any;
  postData = { id:0 }

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService : AuthService,
    private menu : MenuController,
    private toastService :ToastService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  logoutAction(){
    this.menu.close();
    this.authService.logout();
  }
  closeMenu(){
    this.menu.close();
  }
  ngOnInit() {
    this.authService.userData$.subscribe(res=>{
      this.uData = res;
      this.postData.id = res.id;
      if(res){
        this.loadMenuStatus();
      }
    })
  }
  loadMenuStatus(){
    this.authService.getMenuStatus(this.postData).subscribe((res: any)=>{
      this.mData=res;
    },(error:any)=>{
      this.toastService.presentToast('Network connection error!');
    })
  }
}