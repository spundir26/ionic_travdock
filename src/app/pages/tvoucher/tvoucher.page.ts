import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ToastService } from 'src/app/services/toast.service';
import { Plugins } from '@capacitor/core';
const { Browser } = Plugins;
const { Share } = Plugins;

@Component({
  selector: 'app-tvoucher',
  templateUrl: './tvoucher.page.html',
  styleUrls: ['./tvoucher.page.scss'],
})
export class TvoucherPage implements OnInit {
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
        this.loadTransportVouchers();
      }
      
    })
  }
  loadTransportVouchers(){
    this.authService.geTransportVoucher(this.postData).subscribe((res: any)=>{
      this.voData=res.data;
    },(error:any)=>{
      this.toastService.presentToast('Network connection error!');
    })
  }

  openBrowser(id){
    Browser.open({
      url:"https://travdock.com/tms/reports/transport-voucher-app.php?vrcode="+id+"&type=p"
    })
  }
  async shareSocial(id,name,tourid){
    await Share.share({
      title:"File Code: "+tourid,
      text:"Transport Voucher: "+name,
      dialogTitle: 'Transport Voucher: '+name,
      url:"https://travdock.com/tms/reports/transport-voucher-app.php?vrcode="+id+"&type=p"
    })
  }

}
