import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03ComprehensionsWorksheet3Component} from './std03-comprehensions-worksheet3.component'
const routes: Routes = [
  { path: '', component: Std03ComprehensionsWorksheet3Component }, 

];
@NgModule({
  declarations: [Std03ComprehensionsWorksheet3Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03ComprehensionsWorksheet3Module { }
