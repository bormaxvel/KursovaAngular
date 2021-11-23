import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { LabsComponent } from './labs/labs.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { MenuMainComponent } from './menu-main/menu-main.component';
import { SideBarComponent } from './labs/side-bar/side-bar.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { ActiveLabComponent } from './labs/active-lab/active-lab.component';
import { AnimationComponent } from './labs/animation/animation.component';


const route: Routes = [
  {path: '', component: MainComponent},
  {path: 'labs', component: LabsComponent,
children:[
  {path: '', component: AnimationComponent},
  {path: 'actlab', component: ActiveLabComponent}
]}
]

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LabsComponent,
    MenuMainComponent,
    SideBarComponent,
    FooterComponent,
    ActiveLabComponent,
    AnimationComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot(route),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
