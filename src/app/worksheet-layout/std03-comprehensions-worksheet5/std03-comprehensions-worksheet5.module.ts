import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03ComprehensionsWorksheet5Component} from './std03-comprehensions-worksheet5.component'
const routes: Routes = [
  { path: '', component: Std03ComprehensionsWorksheet5Component }, 

];
@NgModule({
  declarations: [Std03ComprehensionsWorksheet5Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03ComprehensionsWorksheet5Module { }
