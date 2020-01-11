import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { AccountResponse } from '../models/account-response';
import { AccountRequest } from '../models/account-request';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http:HttpService) { }

  async login(email:string,password:string):Promise<string>{
    let url = 'https://72jjb480ol.execute-api.us-east-1.amazonaws.com/dev/login';
    url = 'https://vci3m8u7rc.execute-api.us-east-1.amazonaws.com/dev/login';

    let request = new AccountRequest(email,password);
    let response =await this.http.post<AccountResponse>(url,request);
    return response.error ? response.error: null;
  }
}
