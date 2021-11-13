import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TechComponent} from "./components/tech/tech.component";
import {GoalsComponent} from "./components/goals/goals.component";
import {PagenotfoundComponent} from "./components/pagenotfound/pagenotfound.component";
import {AboutmeComponent} from "./components/aboutme/aboutme.component";
import {MainComponent} from "./components/main/main.component";




const routes: Routes = [
  {path:'tech', component: TechComponent},
  {path: 'aboutme', component: AboutmeComponent},
  {path: 'main', component: MainComponent},
  {path: 'goals', component: GoalsComponent},
  {path: '**', component: PagenotfoundComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

