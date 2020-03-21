import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03ComprehensionsWorksheet1Component} from './std03-comprehensions-worksheet1.component'
const routes: Routes = [
  { path: '', component: Std03ComprehensionsWorksheet1Component }, 

];
@NgModule({
  declarations: [Std03ComprehensionsWorksheet1Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03ComprehensionsWorksheet1Module { }
