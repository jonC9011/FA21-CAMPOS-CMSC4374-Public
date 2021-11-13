import { Component, OnInit } from '@angular/core';
import {GoalsService} from "./goals.service";
import {goal} from "./goals";

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.scss']
})
export class GoalsComponent implements OnInit {

  goals: goal[]

  constructor(public goalsService: GoalsService) {
    this.goalsService.getJSON().subscribe(data => {
      this.goals = data
    })
  }

  ngOnInit(): void {
  }

}
