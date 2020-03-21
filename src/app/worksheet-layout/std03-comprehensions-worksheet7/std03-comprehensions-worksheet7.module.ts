import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03ComprehensionsWorksheet7Component} from './std03-comprehensions-worksheet7.component'
const routes: Routes = [
  { path: '', component: Std03ComprehensionsWorksheet7Component }, 

];
@NgModule({
  declarations: [Std03ComprehensionsWorksheet7Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03ComprehensionsWorksheet7Module { }
