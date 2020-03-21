import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03ConjunctionsWorksheet9Component} from './std03-conjunctions-worksheet9.component'
const routes: Routes = [
  { path: '', component: Std03ConjunctionsWorksheet9Component }, 

];
@NgModule({
  declarations: [Std03ConjunctionsWorksheet9Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03ConjunctionsWorksheet9Module { }
