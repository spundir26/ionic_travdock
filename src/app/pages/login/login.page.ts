import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthConstants } from 'src/app/config/auth-constants';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';
import { ToastService } from 'src/app/services/toast.service';
import { environment } from 'src/environments/environment'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public postData = {
    username: '',
    password:''
  }

  resData:any;
  errMsg:any;

  constructor(
    private authService: AuthService, 
    private storageServece: StorageService, 
    private router: Router,
    private toastService: ToastService
    ) { }

  ngOnInit() {
  }

  validateInputs(){
    let username = this.postData.username.trim();
    let password = this.postData.password.trim();
    return(this.postData.username && this.postData.password && username.length>0 && password.length>0)
  }
  loginAction(){
    if(this.validateInputs()){
      this.authService.login(this.postData).subscribe((res: any)=>{
        this.resData=res;
        if(res.userData){
          this.storageServece.store(AuthConstants.AUTH, res.userData);
          this.router.navigate(['home']);
        } else {
          this.toastService.presentToast('Incorrect Username or Password!');
        }
      },(error:any)=>{
        this.errMsg = error;
        this.toastService.presentToast('Network connection error!');
      }
      )
    } else {
      this.toastService.presentToast('Please input Username and Password!');
    }
  }
  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  passwordType: string = 'password';
 passwordIcon: string = 'eye-off';

 hideShowPassword() {
     this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
     this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
 }
}
