import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03DegressOfComparisonWorksheet5Component} from './std03-degress-of-comparison-worksheet5.component'
const routes: Routes = [
  { path: '', component:Std03DegressOfComparisonWorksheet5Component  }, 

];
@NgModule({
  declarations: [Std03DegressOfComparisonWorksheet5Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03DegressOfComparisonWorksheet5Module { }
