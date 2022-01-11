import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { AuthService } from 'src/app/services/auth.service';
import { ToastService } from 'src/app/services/toast.service';
const { Browser } = Plugins;
const { Share } = Plugins;

@Component({
  selector: 'app-vouchers',
  templateUrl: './vouchers.page.html',
  styleUrls: ['./vouchers.page.scss'],
})
export class VouchersPage implements OnInit {
  public postData = { id:0 }
  uData: any;
  voData: any;
  constructor(
    private authService: AuthService,
    private toastService: ToastService
  ) { }

  ngOnInit() {
    this.authService.userData$.subscribe(res => {
      this.uData = res;
      this.postData.id = res.id;
      this.loadHotelVouchers();
    })
  }
  async shareSocial(id,name,tourid){
    await Share.share({
      title:"File Code: "+tourid,
      text:'Hotel Voucher: '+name,
      dialogTitle: 'Hotel Voucher: '+name,
      url:"https://travdock.com/tms/reports/hotel-voucher-app.php?vrcode="+id+"&type=p"
    })
  }

  loadHotelVouchers(){
    this.authService.getHotelVoucher(this.postData).subscribe((res: any)=>{
      this.voData=res.data;
    },(error:any)=>{
      this.toastService.presentToast('Network connection error!');
    })
  }
  openBrowser(id){
    Browser.open({
      url:"https://travdock.com/tms/reports/hotel-voucher-app.php?vrcode="+id+"&type=p"
    })
  }
}
