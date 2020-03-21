import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03HomophonesWorksheet1Component} from './std03-homophones-worksheet1.component'
const routes: Routes = [
  { path: '', component: Std03HomophonesWorksheet1Component }, 

];
@NgModule({
  declarations: [Std03HomophonesWorksheet1Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03HomophonesWorksheet1Module { }
