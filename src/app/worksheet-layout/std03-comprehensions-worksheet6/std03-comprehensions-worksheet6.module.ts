import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03ComprehensionsWorksheet6Component} from './std03-comprehensions-worksheet6.component'
const routes: Routes = [
  { path: '', component:  Std03ComprehensionsWorksheet6Component}, 

];
@NgModule({
  declarations: [Std03ComprehensionsWorksheet6Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03ComprehensionsWorksheet6Module { }
