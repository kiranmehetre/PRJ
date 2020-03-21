import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03ConjunctionsWorksheet5Component} from './std03-conjunctions-worksheet5.component'
const routes: Routes = [
  { path: '', component: Std03ConjunctionsWorksheet5Component }, 

];
@NgModule({
  declarations: [Std03ConjunctionsWorksheet5Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03ConjunctionsWorksheet5Module { }
