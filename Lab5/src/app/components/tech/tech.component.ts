import { Component, OnInit } from '@angular/core';
import {TechService} from "./tech.service";
import {tech} from "./tech";
@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.scss']
})
export class TechComponent implements OnInit {

  techList: tech[]
  constructor(public techService: TechService) { }

  ngOnInit(): void {
    this.techService.getJSON().subscribe(data => {
      this.techList = data
    })
  }

}
