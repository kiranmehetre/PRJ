import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03HomophonesWorksheet3Component} from './std03-homophones-worksheet3.component'
const routes: Routes = [
  { path: '', component: Std03HomophonesWorksheet3Component }, 

];
@NgModule({
  declarations: [Std03HomophonesWorksheet3Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03HomophonesWorksheet3Module { }
