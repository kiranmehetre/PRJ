import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03HomophonesWorksheet8Component} from './std03-homophones-worksheet8.component'
const routes: Routes = [
  { path: '', component: Std03HomophonesWorksheet8Component }, 

];
@NgModule({
  declarations: [Std03HomophonesWorksheet8Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03HomophonesWorksheet8Module { }
