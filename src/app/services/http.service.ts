import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { headersToString } from 'selenium-webdriver/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }
  post(serviceName:string, data:any){
    data.ac= serviceName;
    const headers = new HttpHeaders;
    const options = { headers: headers, withCredintials: false };
    //const url = environment.apiUrl +'?ac='+serviceName;
    const url = environment.apiUrl;

    return this.http.post(url, JSON.stringify(data), options);
  }
}
