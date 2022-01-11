import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { IonContent } from '@ionic/angular';
import { ToastService } from 'src/app/services/toast.service';
import { interval } from 'rxjs';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {

  public postData = { id:0, msg:'',lid:0 }

  uData: any;
  messages = [
    {
      id:0,
      user:'Caper',
      created_at : 1626686415106,
      msg:'Welcome to Caper Travel, if you have any query please write here. We will respond to you within 5 minutes during working hours.'
    }

  ]
  currentUser = "You";
  newMsg ='';
  @ViewChild(IonContent) content : IonContent;

  constructor(
    private router : Router,
    private authService : AuthService,
    private toastService : ToastService
  ) { }

  ngOnInit() {
    this.authService.userData$.subscribe(res => {
      this.uData = res;
      this.postData.id = res.id;
      if(res){
          this.getMessages();
      }
    })

    //interval
    const obs$ = interval(8000);
    obs$.subscribe((d)=>{
      this.getMessages();
    })
    //close

  }

  getMessages(){
      this.postData.lid = this.messages[this.messages.length-1].id;
      this.authService.getMsgData(this.postData).subscribe((res:any)=>{
       
        this.messages = this.messages.concat(res);
        console.log(res.length);
        if(res.length>0){
          setTimeout(() => {
            this.content.scrollToBottom(200);
          }, 200);
        }
        

      },(error:any)=>{
        this.toastService.presentToast('Network connection error!');
      })    
  }
  sendMessage(){

    this.postData.msg= this.newMsg;
    this.authService.getMessages(this.postData).subscribe((res: any)=>{
      this.messages.push(res);
    },(error:any)=>{
      this.toastService.presentToast('Network connection error!');
    })

    this.newMsg = '';
    setTimeout(() => {
      this.content.scrollToBottom(200);
    }, 200);
  }
}