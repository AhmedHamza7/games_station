import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  baseUrl:string = environment.apiBaseUrl;
  constructor(private httpClient:HttpClient) { }

  getGamesList(filterCriteria:any):Observable<any>{
    return this.httpClient.get(`${this.baseUrl}/games`, {params: filterCriteria})
  }
}
