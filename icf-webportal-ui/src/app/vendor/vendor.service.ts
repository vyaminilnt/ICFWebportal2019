import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import {StoresVendor} from './vendor.model';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  _url = "http://localhost:8080/test";
  constructor(private _http: HttpClient) { } 
  
  
 saveStoresVendor(vendorUser:StoresVendor): any {

  console.log('In service');
  //this._http.post(this._url,)
  
  return this._http.post(this._url + '/addStoresVendor',vendorUser);
  
  }
}
