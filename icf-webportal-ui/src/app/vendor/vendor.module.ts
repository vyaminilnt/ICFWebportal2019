import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { VendorComponent } from './vendor.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    VendorComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})

export class VendorModule { 
  title = 'Vendor Portal';
}
