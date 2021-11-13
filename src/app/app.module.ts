import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { LabsComponent } from './labs/labs.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

const routes = [
  {path: '', component: MainComponent},
  {path: 'labs', component: LabsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LabsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
