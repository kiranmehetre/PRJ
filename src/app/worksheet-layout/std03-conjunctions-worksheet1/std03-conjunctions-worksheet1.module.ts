import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03ConjunctionsWorksheet1Component} from './std03-conjunctions-worksheet1.component'
const routes: Routes = [
  { path: '', component:Std03ConjunctionsWorksheet1Component  }, 

];
@NgModule({
  declarations: [Std03ConjunctionsWorksheet1Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03ConjunctionsWorksheet1Module { }
