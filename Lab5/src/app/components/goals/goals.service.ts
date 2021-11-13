import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GoalsService {

  constructor(public httpClient: HttpClient) { }

  getJSON(): Observable<any> {
    return this.httpClient.get(`assets/goals.json`);
  }
}
