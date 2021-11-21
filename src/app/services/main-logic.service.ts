import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Laba } from '../interfaces/laba';

@Injectable({
  providedIn: 'root'
})
export class MainLogicService {
   url:string = "http://localhost:3000/data"

  //Labs:Laba[] = [{id:1, name: "laba1", totime: "10.10.10", info: "1234567890"}, {id:2, name: "laba2", totime: "2.0.0", info: "2222222222"}, {id:3, name: "laba3", totime: "20.21.22", info: "0000000000"}]
  
  constructor(private http:HttpClient) { }
  
  getLaba():Observable<Laba[]>{
    return this.http.get<Laba[]>(this.url);
  }

}
