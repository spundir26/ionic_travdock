import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ToastService } from 'src/app/services/toast.service';
import { Plugins } from '@capacitor/core';
const { Browser } = Plugins;

@Component({
  selector: 'app-flight',
  templateUrl: './flight.page.html',
  styleUrls: ['./flight.page.scss'],
})
export class FlightPage implements OnInit {

  public postData = { id:0 }
  uData: any;
  flData :any;

  constructor(
    private authService : AuthService,
    private toastService : ToastService
  ) { }

  ngOnInit() {
    this.authService.userData$.subscribe(res => {
      this.uData = res;
      this.postData.id = res.id;
      if(res){
        this.loadFlights();
      }
    })
  }

  loadFlights(){
    this.authService.getFlights(this.postData).subscribe((res: any)=>{
      this.flData=res;
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
