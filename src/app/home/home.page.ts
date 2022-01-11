import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  uData: any;

  constructor(
    private authService : AuthService, 
    private router: Router, 
    private activatedRoute: ActivatedRoute
    ) { }
  ngOnInit() {
    this.authService.userData$.subscribe(res=>{
      this.uData = res;
    })
  }
  goHomePage(){
    this.router.navigate(['../../home'], { relativeTo: this.activatedRoute.parent });
  }
  someThing() {
    console.log('inside page');
  }
}
