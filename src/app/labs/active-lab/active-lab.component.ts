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

  constructor(private service:MainLogicService) { 
    //dataNumberVstavkaID: this.service.getNumber();
  }

  labaList: Laba[]=[];
  ngOnInit(): void {
    this.service.count$.subscribe((count) => this.VstavkaHTML(count));
    this.service.getLaba().subscribe(
    (labs)=>{
      this.labaList = labs;
    }
    );
  }

  dataNumberVstavkaID=0;
  mozhna="";
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

}
