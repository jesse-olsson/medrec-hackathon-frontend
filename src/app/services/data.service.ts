import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://localhost:8080/';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http: HttpClient) { }

  get meds() {
    return this.http.get(`${baseUrl}meds`).toPromise();
  }

  get patient() {
    return this.http.get(`${baseUrl}patient`).toPromise();
  }
}
