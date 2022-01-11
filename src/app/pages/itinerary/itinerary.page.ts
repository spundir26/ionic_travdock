import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ToastService } from 'src/app/services/toast.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-itinerary',
  templateUrl: './itinerary.page.html',
  styleUrls: ['./itinerary.page.scss'],
})
export class ItineraryPage implements OnInit {

  @Input() text: string;
  @Input() limit: number = 250;
  
  public postData = { id:0 }
  uData: any;
  itiData :any;
  iti:any;
  constructor(
    private authService: AuthService,
    private toastService: ToastService,
    private router: Router

  ) {

   }
 ngOnInit() {
  this.authService.userData$.subscribe(res => {
    this.uData = res;
    this.postData.id = res.id;
    if(res){
      this.loadItinerary();
    }
    
  })
  }

loadItinerary(){
    this.authService.getIninerary(this.postData).subscribe((res: any)=>{
      this.itiData=res.data;
      this.iti = res.data.iti;

      this.iti = this.iti.map(item => ({...item,truncating: true}));

    },(error:any)=>{
      this.toastService.presentToast('Network connection error!');
    })
}
}
