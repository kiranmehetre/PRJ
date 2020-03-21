import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03HomophonesWorksheet7Component} from './std03-homophones-worksheet7.component'
const routes: Routes = [
  { path: '', component: Std03HomophonesWorksheet7Component }, 

];
@NgModule({
  declarations: [Std03HomophonesWorksheet7Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03HomophonesWorksheet7Module { }
