import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03ConjunctionsWorksheet8Component} from './std03-conjunctions-worksheet8.component'
const routes: Routes = [
  { path: '', component:Std03ConjunctionsWorksheet8Component  }, 

];
@NgModule({
  declarations: [Std03ConjunctionsWorksheet8Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03ConjunctionsWorksheet8Module { }
