import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-tourcard',
  templateUrl: './tourcard.page.html',
  styleUrls: ['./tourcard.page.scss'],
})
export class TourcardPage implements OnInit {

  public postData = { id:0 }
  uData: any;
  tourData: any;
  
  constructor(
    private authService: AuthService,
    private toastService: ToastService
    ) { 

      this.authService.userData$.subscribe(res => {
        this.uData = res;
        this.postData.id = res.id;
        if(res){
          this.loadTourCard();
        }
      })
    }

  ngOnInit() {}

  loadTourCard(){
    this.authService.getTourCard(this.postData).subscribe((res: any)=>{
      this.tourData=res.data;
    },(error:any)=>{
      this.toastService.presentToast('Network connection error!');
    })
  }
}
