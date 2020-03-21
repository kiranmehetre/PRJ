import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03DegressOfComparisonWorksheet3Component} from './std03-degress-of-comparison-worksheet3.component'
const routes: Routes = [
  { path: '', component:  Std03DegressOfComparisonWorksheet3Component}, 

];
@NgModule({
  declarations: [Std03DegressOfComparisonWorksheet3Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03DegressOfComparisonWorksheet3Module { }
