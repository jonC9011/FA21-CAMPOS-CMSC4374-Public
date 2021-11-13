import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AboutmeService {



  constructor(public http: HttpClient) {
  }


  getJSON(): Observable<any> {
    return this.http.get(`assets/aboutme.json`);
  }


}
