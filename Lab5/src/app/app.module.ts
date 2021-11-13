import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TechComponent } from './components/tech/tech.component';
import { GoalsComponent } from './components/goals/goals.component';

import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import {HttpClientModule} from "@angular/common/http";
import { MainComponent } from './components/main/main.component';



@NgModule({
  declarations: [
    AppComponent,
    TechComponent,
    GoalsComponent,
    PagenotfoundComponent,
    NavbarComponent,
    AboutmeComponent,
    MainComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
