import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03DegressOfComparisonWorksheet6Component} from './std03-degress-of-comparison-worksheet6.component'
const routes: Routes = [
  { path: '', component: Std03DegressOfComparisonWorksheet6Component }, 

];
@NgModule({
  declarations: [Std03DegressOfComparisonWorksheet6Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03DegressOfComparisonWorksheet6Module { }
