import { Component, OnInit } from '@angular/core';
import {aboutme} from "./aboutme";
import {AboutmeService} from "./aboutme.component.service";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.scss']
})
export class AboutmeComponent implements OnInit {

  AboutMeObject: aboutme
  constructor(public AboutMeService: AboutmeService) { }

  ngOnInit(): void {
    this.AboutMeService.getJSON().subscribe(data => {
      this.AboutMeObject = data
    })
  }

}
