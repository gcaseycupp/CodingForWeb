import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }

  async post<T>(url:string, body:any): Promise<T>{
    return new Promise((res,rej)=>{
      this.http.post<T>(url,body)
        .subscribe(
          (data:T) => {
            res(data);
          },
          (error:HttpErrorResponse) => {
            rej(error);
          }
        )    
    });    
  }
  
}
