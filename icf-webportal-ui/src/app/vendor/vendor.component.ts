import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {StoresVendor} from './vendor.model';
import {VendorService} from './vendor.service';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './vendor.component.html',
  styleUrls: ['./app.component.css']
})


export class VendorComponent {
    title = 'Vendor Portal';
    storesvendor: any;

    constructor(private _vendorService: VendorService) { }
    _storesModel= new StoresVendor();

    onFormSubmit(userForm: NgForm) {
      console.log('Vendor Name:' + userForm.controls['vendorName'].value);
      this._storesModel.vendorName = userForm.controls['vendorName'].value;
      //concat(userForm.controls['vendorName'].value);
     console.log('rr',this._storesModel.vendorName);
     
     
     this._vendorService.saveStoresVendor(this._storesModel).subscribe(
      data => {
        this.storesvendor = data;
        console.log('stv',this.storesvendor);
      },
      error => {
        console.log('Error occured', error);
      }
    );
 
    }

    resetUserForm(userForm: NgForm) {
      userForm.resetForm();
    }

} 