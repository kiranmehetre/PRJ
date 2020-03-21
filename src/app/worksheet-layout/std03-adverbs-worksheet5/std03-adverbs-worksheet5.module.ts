import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03AdverbsWorksheet5Component} from './std03-adverbs-worksheet5.component'
const routes: Routes = [
  { path: '', component: Std03AdverbsWorksheet5Component }, 

];
@NgModule({
  declarations: [Std03AdverbsWorksheet5Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03AdverbsWorksheet5Module { }
