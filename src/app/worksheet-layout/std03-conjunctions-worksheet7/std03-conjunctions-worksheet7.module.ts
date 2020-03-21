import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03ConjunctionsWorksheet7Component} from './std03-conjunctions-worksheet7.component'
const routes: Routes = [
  { path: '', component: Std03ConjunctionsWorksheet7Component }, 

];
@NgModule({
  declarations: [Std03ConjunctionsWorksheet7Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03ConjunctionsWorksheet7Module { }
