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
    this.service.count$.subscribe((count) => this.getList());
    this.service.getLaba().subscribe(
    (labs)=>{
      this.labaList = labs;
    }
    );
  }

  private getList(){

  }

  // Vstavyty Deadline
  mozhna_zdaty = [0, 0, 0, 0, 0];
  nearest_deadline: any;
  ii: any;
  private VstavkaDeadline(){
    for (var i = 0; i < this.labaList.length; i++){
      if(new Date(this.labaList[i].time) > new Date()){
        this.mozhna_zdaty[i] = 1;
        if(i == 0){
          this.nearest_deadline = this.labaList[i].time;
          this.ii = i;
        }
        else if(new Date(this.nearest_deadline.time) > new Date(this.labaList[i].time)){
          this.nearest_deadline = this.labaList[i].time;
          this.ii = i;
        }
      } 
    }
    console.log(this.mozhna_zdaty);
    console.log(this.nearest_deadline);
  } 
  //next_laba.innerHTML = `<h2> Наступна лабораторна №${ii + 1} до ${nearest_deadline} </h2>`;
  //

}
