import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private httpClient:HttpClient) { }

  getAllGames():Observable<any>{
    return this.httpClient.get(`https://api.rawg.io/api/games`, {params: {name:'aa'}})
  }
}
