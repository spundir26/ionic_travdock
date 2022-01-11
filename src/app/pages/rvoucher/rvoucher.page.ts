import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ToastService } from 'src/app/services/toast.service';
import { Plugins } from '@capacitor/core';
const { Browser } = Plugins;
const { Share } = Plugins;

@Component({
  selector: 'app-rvoucher',
  templateUrl: './rvoucher.page.html',
  styleUrls: ['./rvoucher.page.scss'],
})
export class RvoucherPage implements OnInit {
  uData: any;
  postData = {id:0}
  voData:any;

  constructor(
    private authService: AuthService,
    private toastService:ToastService
  ) { }

  ngOnInit() {
    this.authService.userData$.subscribe(res => {
      this.uData = res;
      this.postData.id = res.id;
      if(res){
        this.loadRestaurantVouchers();
      }
      
    })
  }

  loadRestaurantVouchers(){
    this.authService.getRestVoucher(this.postData).subscribe((res: any)=>{
      this.voData=res.data;
    },(error:any)=>{
      this.toastService.presentToast('Network connection error!');
    })
  }

  openBrowser(id){
    Browser.open({
      url:"https://travdock.com/tms/reports/restaurant-voucher-app.php?vrcode="+id+"&type=p"
    })
  }
  async shareSocial(id,name,tourid){
    await Share.share({
      title:"File Code: "+tourid,
      text:"Restaurant Voucher: "+name,
      dialogTitle: 'Restaurant Voucher: '+name,
      url:"https://travdock.com/tms/reports/restaurant-voucher-app.php?vrcode="+id+"&type=p"
    })
  }

}
