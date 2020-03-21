import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03DegressOfComparisonWorksheet2Component} from './std03-degress-of-comparison-worksheet2.component'
const routes: Routes = [
  { path: '', component:Std03DegressOfComparisonWorksheet2Component }, 

];
@NgModule({
  declarations: [Std03DegressOfComparisonWorksheet2Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03DegressOfComparisonWorksheet2Module { }
