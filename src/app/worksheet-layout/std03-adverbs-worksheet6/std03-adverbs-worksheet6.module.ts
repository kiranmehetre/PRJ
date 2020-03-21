import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03AdverbsWorksheet6Component} from './std03-adverbs-worksheet6.component'
const routes: Routes = [
  { path: '', component: Std03AdverbsWorksheet6Component }, 

];
@NgModule({
  declarations: [Std03AdverbsWorksheet6Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03AdverbsWorksheet6Module { }
