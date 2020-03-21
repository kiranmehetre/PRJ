import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03DegressOfComparisonWorksheet4Component} from './std03-degress-of-comparison-worksheet4.component'
const routes: Routes = [
  { path: '', component: Std03DegressOfComparisonWorksheet4Component }, 

];
@NgModule({
  declarations: [Std03DegressOfComparisonWorksheet4Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03DegressOfComparisonWorksheet4Module { }
