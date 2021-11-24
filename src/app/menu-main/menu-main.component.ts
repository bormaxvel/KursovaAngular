import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Laba } from '../interfaces/laba';
import { MainLogicService } from '../services/main-logic.service';

@Component({
  selector: 'app-menu-main',
  templateUrl: './menu-main.component.html',
  styleUrls: ['./menu-main.component.sass']
})
export class MenuMainComponent implements OnInit {

  ifactive1: string = "";
  ifactive2: string = "";
  
  constructor(private router: Router, private service:MainLogicService) {
    if (this.router.url === '/'){
      console.log("/labs");
      this.ifactive1 = "bactive";
      this.ifactive2 = "";
    } else{
      this.ifactive2 = "bactive";
      this.ifactive1 = "";
    }
    
  }
  
  labaList: Laba[]=[];
  ngOnInit(): void {
    this.service.count$.subscribe((count) => this.VstavkaDeadline());
    this.service.getLaba().subscribe(
    (labs)=>{
      this.labaList = labs;
    }
    );
  }

  // Vstavyty Deadline
  
  // mozhna_zdaty = [0, 0, 0, 0, 0];
  public ii$:number = 5;
  public nearest_deadline: Date = new Date(2022, 11, 30);

  public VstavkaDeadline(){
    for (var i = 0; i < this.labaList.length; i++){
      if(new Date(this.labaList[i].time) > new Date()){
        this.nearest_deadline = this.labaList[i].time;
        this.ii$ = i + 1;
        break;
      } 
    }
    console.log(this.nearest_deadline);
  } 
  //next_laba.innerHTML = `<h2> Наступна лабораторна №${ii + 1} до ${nearest_deadline} </h2>`;
  //

}
