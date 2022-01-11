import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'Rxjs';
import { AuthConstants } from '../config/auth-constants';
import { HttpService } from './http.service';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData$ = new BehaviorSubject<any>('');
  constructor(
    private httpService : HttpService, 
    private storageService: StorageService, 
    private router: Router) { }

    getUserData(){
      this.storageService.get(AuthConstants.AUTH).then(res=>{
        this.userData$.next(res);
      })
    }
    login(postData: any): Observable<any>{
      return this.httpService.post('login', postData);
    }
    getIninerary(postData: any): Observable<any>{
      return this.httpService.post('ITI', postData);
    }
    getTourCard(postData: any): Observable<any>{
      return this.httpService.post('TOURCARD', postData);
    }
    getHotelVoucher(postData: any): Observable<any>{
      return this.httpService.post('HVOUCHER', postData);
    }
    getRestVoucher(postData:any): Observable<any>{
      return this.httpService.post('RVOUCHER', postData);
    }
    geTransportVoucher(postData:any): Observable<any>{
      return this.httpService.post('TVOUCHER', postData);
    }
    getMenuStatus(postData:any): Observable<any>{
      return this.httpService.post('MSTATUS', postData);
    }
    getMessages(postData:any):Observable<any>{
      return this.httpService.post('SMSG', postData);
    }
    getMsgData(postData:any):Observable<any>{
      return this.httpService.post('GETMSG', postData);
    }
    getMonuments(postData:any):Observable<any>{
      return this.httpService.post('GETMONU', postData);
    }
    getFlights(postData:any):Observable<any>{
      return this.httpService.post('GETFLIGHTS', postData);
    }
    getTrains(postData:any):Observable<any>{
      return this.httpService.post('GETTRAIN', postData);
    }
    
    logout() {
      this.storageService.clear();
      this.userData$.next('');
      this.router.navigate(['/']);
      }
}
