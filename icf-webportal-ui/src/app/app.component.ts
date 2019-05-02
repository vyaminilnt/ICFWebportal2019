import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'ICFWebPortal2019';
  myresponse: any;
  readonly APP_URL = 'http://localhost:8080/test';
  
  constructor(private _http: HttpClient) { }
 
  // Method to fetch all employees from the database table.
  getResultFromJava() {
    console.log('inside angular');
    this._http.get(this.APP_URL + '/getResult').subscribe(
      data => {
        this.myresponse = data;
        console.log(data);
      },
      error => {
        console.log('Error occured', error);
      }
    );
  }
  
}
