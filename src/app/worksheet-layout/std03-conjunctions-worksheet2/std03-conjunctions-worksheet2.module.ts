import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03ConjunctionsWorksheet2Component} from './std03-conjunctions-worksheet2.component'
const routes: Routes = [
  { path: '', component:Std03ConjunctionsWorksheet2Component  }, 

];
@NgModule({
  declarations: [Std03ConjunctionsWorksheet2Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03ConjunctionsWorksheet2Module { }
