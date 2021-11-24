import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Laba } from 'src/app/interfaces/laba';
import { MainLogicService } from 'src/app/services/main-logic.service';

@Component({
  selector: 'app-active-lab',
  templateUrl: './active-lab.component.html',
  styleUrls: ['./active-lab.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class ActiveLabComponent implements OnInit {
  this: any;

  constructor(private service:MainLogicService) { 
  }
  labaList: Laba[]=[];
  ngOnInit(): void {
    this.ToSubscribe();
    //return this.this.service.mozhnaZdaty(this.dataNumberVstavkaID, this.labaList);
  }
  dataNumberVstavkaID:number = this.service.ID$;

  //mozhna = "Ще можна здати";
  //public mozhna:string = this.service.mozhnaZdaty(this.dataNumberVstavkaID, this.ToSubscribe());
  //mozhna = this.ngOnInit();

  public ToSubscribe(): Laba[]{
    this.service.count$.subscribe((count) => this.VstavkaHTML(count));
    this.service.getLaba().subscribe(
    (labs)=>{
      console.log(labs);
      this.labaList = labs;
    }
    );
    return (this.labaList);
  }

  
  private VstavkaHTML(data: number): void{
    this.dataNumberVstavkaID=data;
    //Czhy mozhna zdaty
    if(new Date(this.labaList[data].time) > new Date()){
      this.mozhna = "Ще можна здати";
    }
    else{
      this.mozhna = "Час роботи вийшов";
    }
  
  }
    mozhna: string = "Час роботи вийшов";
    //mozhna:string = "TEST";

}
