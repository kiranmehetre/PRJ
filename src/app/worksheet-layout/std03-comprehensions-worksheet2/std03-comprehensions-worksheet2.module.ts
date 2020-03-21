import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03ComprehensionsWorksheet2Component} from './std03-comprehensions-worksheet2.component'
const routes: Routes = [
  { path: '', component: Std03ComprehensionsWorksheet2Component }, 

];
@NgModule({
  declarations: [Std03ComprehensionsWorksheet2Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03ComprehensionsWorksheet2Module { }
