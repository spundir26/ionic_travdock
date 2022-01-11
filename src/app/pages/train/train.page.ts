import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ToastService } from 'src/app/services/toast.service';
import { Plugins } from '@capacitor/core';
const { Browser } = Plugins;

@Component({
  selector: 'app-train',
  templateUrl: './train.page.html',
  styleUrls: ['./train.page.scss'],
})
export class TrainPage implements OnInit {

  public postData = { id:0 }
  uData: any;
  trData :any;

  constructor(
    private authService : AuthService,
    private toastService : ToastService
  ) { }

  ngOnInit() {
    this.authService.userData$.subscribe(res => {
      this.uData = res;
      this.postData.id = res.id;
      if(res){
        this.loadTrains();
      }
    })
  }

  loadTrains(){
    this.authService.getTrains(this.postData).subscribe((res: any)=>{
      this.trData=res;
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
