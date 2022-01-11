import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ToastService } from 'src/app/services/toast.service';
import { Plugins } from '@capacitor/core';
const { Browser } = Plugins;

@Component({
  selector: 'app-monuments',
  templateUrl: './monuments.page.html',
  styleUrls: ['./monuments.page.scss'],
})
export class MonumentsPage implements OnInit {

  public postData = { id:0 }
  uData: any;
  moData :any;

  constructor(
    private authService : AuthService,
    private toastService : ToastService
  ) { }

  ngOnInit() {
    this.authService.userData$.subscribe(res => {
      this.uData = res;
      this.postData.id = res.id;
      if(res){
        this.loadMonuments();
      }
      
    })
  }

  loadMonuments(){
    this.authService.getMonuments(this.postData).subscribe((res: any)=>{
      this.moData=res;
    },(error:any)=>{
      this.toastService.presentToast('Network connection error!');
    })
  }

  openBrowser(id){
    Browser.open({
      url:id
    })
  }

}
