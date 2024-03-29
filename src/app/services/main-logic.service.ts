import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Laba } from '../interfaces/laba';

@Injectable({
  providedIn: 'root'
})
export class MainLogicService {
   url:string = "http://localhost:3000/data"

  //Labs:Laba[] = [{id:1, name: "laba1", totime: "10.10.10", info: "1234567890"}, {id:2, name: "laba2", totime: "2.0.0", info: "2222222222"}, {id:3, name: "laba3", totime: "20.21.22", info: "0000000000"}]
  
  constructor(private http:HttpClient) { }
  
  // Повертає список лаб з сервера
  getLaba():Observable<Laba[]>{
    return this.http.get<Laba[]>(this.url);
  }
  
  //public count$ = new Subject<number>();
  //public count$: number;

  public ID$:number = 0;

  public count$ = new Subject<number>();

  public mozhna_service$ = "";

	public changeCount(count: number) {
  	this.ID$ = count; 
    this.count$.next(count);
  }

  // public mozhnaZdaty(data: number, labaList$: any): string{
  //   //Czhy mozhna zdaty
  //   console.log(labaList$);
  //   if(new Date(labaList$[data].time) > new Date()){
  //     console.log("+");
  //     return("Ще можна здати");
  //   }
  //   else{
  //     console.log("-");
  //     return("Час роботи вийшов");
  //   }
  
  // }

}
