import { Component, OnInit } from '@angular/core';
import { MainLogicService } from 'src/app/services/main-logic.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.sass']
})
export class SideBarComponent implements OnInit {

  constructor(private readonly simpleService: MainLogicService) {}

  public changeNumberOfCurrentLab(n:number): void {
    this.simpleService.changeCount(n);


  }

  ngOnInit(): void {
  }

}

