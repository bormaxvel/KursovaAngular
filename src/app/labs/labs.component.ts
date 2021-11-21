import { Component, OnInit } from '@angular/core';
import { Laba } from '../interfaces/laba';
import { MainLogicService } from '../services/main-logic.service';

@Component({
  selector: 'app-labs',
  templateUrl: './labs.component.html',
  styleUrls: ['./labs.component.sass']
})
export class LabsComponent implements OnInit {

  constructor(private service:MainLogicService) { }
  labaList: Laba[]=[];
  ngOnInit(): void {
    this.labaList = this.service.getLaba();
  }
}
