import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-main',
  templateUrl: './menu-main.component.html',
  styleUrls: ['./menu-main.component.sass']
})
export class MenuMainComponent implements OnInit {

  ifactive1: string = "";
  ifactive2: string = "";
  
  constructor(private router: Router ) {
    if (this.router.url === '/'){
      console.log("/labs");
      this.ifactive1 = "bactive";
      this.ifactive2 = "";
    } else{
      this.ifactive2 = "bactive";
      this.ifactive1 = "";
    }
  }
  
  ngOnInit(): void {
  }

}
