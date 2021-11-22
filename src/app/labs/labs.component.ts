import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Laba } from '../interfaces/laba';
import { MainLogicService } from '../services/main-logic.service';

@Component({
  selector: 'app-labs',
  templateUrl: './labs.component.html',
  styleUrls: ['./labs.component.sass'],
  encapsulation: ViewEncapsulation.None,
})
export class LabsComponent implements OnInit {

  constructor(private service:MainLogicService) { }


  labaList: Laba[]=[];
  ngOnInit(): void {
    this.service.count$.subscribe((count) => this.VstavkaHTML(count));
    this.service.getLaba().subscribe(
    (labs)=>{
      this.labaList = labs;
    }
    );
  }


  vstavkaTest: string='<h1 class="vybirLaby dell" id="vybirLabyid"> Виберіть лабораторну </h1>'

  private VstavkaHTML(data: number): void {
    //console.log(data);

    //Czhy mozhna zdaty
    var mozhna: string = "";
    if(new Date(this.labaList[data].time) > new Date()){
      mozhna = "Ще можна здати";
    }
    else{
      mozhna = "Час роботи вийшов";
    }
    //

    this.vstavkaTest = `
        
        <div class="block2 dell" id="labscontent">
        <div class="flexel" id="names">
            <div class="flexel2" id="labname">
                <h1>${this.labaList[data].name}</h1>
            </div>
            <div class="flexel2" id="labstatus">
                <h1>${mozhna}</h1>
            </div>
            <div class="flexel2" id="labdeadline">
                <h1>${this.labaList[data].to_time}</h1>
            </div>
        </div>
        <div class="differ smalldiffer"></div>
        <div class="labbody">
            <div class="flexel" id=labinfo>
                <h2>Опис роботи:</h2>
                ${this.labaList[data].info}
                <ol>
                  <li>${this.labaList[data].info_steps[0]}</li>
                  <li>${this.labaList[data].info_steps[1]}</li>
                  <li>${this.labaList[data].info_steps[2]}</li>
                  <li>${this.labaList[data].info_steps[3]}</li>
                  <li>${this.labaList[data].info_steps[4]}</li>
                </ol>
            </div>
            <div class="" id="labinteract">
                <div class="insidelabinteract insidelabinteracttop">
                    <div class="flexellabint" id="labdownload">
                    <a href="${this.labaList[data].download_link}" target="_blank"><button class="downloadbutton"><img class="downloadimg" src="/assets/img/download.png">Download</button></a>
                    </div>
                    <div class="flexellabint" id="labyoutube">
                        <iframe class="labvideo" src="${this.labaList[data].video_link}" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
                <div class="insidelabinteract">
                    <div class="flexellabint" id="labgit">
                        <a href="${this.labaList[data].git_link}" target="_blank"><img class="labGitHub" src="/assets/img/GitHub.png"></a>
                    </div>
                    <div class="flexellabint" id="labscreen">
                        <img class="labscreenimg" src="${this.labaList[data].photo_link}">
                    </div>
                </div>
                
            </div>
        </div>
        
        
    </div>`
    
    
  }


}
