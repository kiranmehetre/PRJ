import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03ConjunctionsWorksheet10Component} from './std03-conjunctions-worksheet10.component'
const routes: Routes = [
  { path: '', component: Std03ConjunctionsWorksheet10Component }, 

];
@NgModule({
  declarations: [Std03ConjunctionsWorksheet10Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03ConjunctionsWorksheet10Module { }
