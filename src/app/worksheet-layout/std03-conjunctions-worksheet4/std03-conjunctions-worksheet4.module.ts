import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03ConjunctionsWorksheet4Component} from './std03-conjunctions-worksheet4.component'
const routes: Routes = [
  { path: '', component:Std03ConjunctionsWorksheet4Component  }, 

];
@NgModule({
  declarations: [Std03ConjunctionsWorksheet4Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03ConjunctionsWorksheet4Module { }
