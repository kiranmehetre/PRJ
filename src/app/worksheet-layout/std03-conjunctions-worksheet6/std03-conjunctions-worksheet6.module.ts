import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03ConjunctionsWorksheet6Component} from './std03-conjunctions-worksheet6.component'
const routes: Routes = [
  { path: '', component:Std03ConjunctionsWorksheet6Component  }, 

];
@NgModule({
  declarations: [Std03ConjunctionsWorksheet6Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03ConjunctionsWorksheet6Module { }
