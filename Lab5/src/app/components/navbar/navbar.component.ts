import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public router: Router) { }


  ngOnInit(): void {
  }
  homeDisplay(): void {
    this.router.navigateByUrl("/main")
  }

  aboutMeDisplay(): void {
  this.router.navigateByUrl("/aboutme")
  }

  goalsDisplay(): void {
    this.router.navigateByUrl("/goals")
  }

  techDisplay(): void {
    this.router.navigateByUrl("/tech")
  }
}
