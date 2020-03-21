import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03AdverbsWorksheet2Component} from './std03-adverbs-worksheet2.component'
const routes: Routes = [
  { path: '', component: Std03AdverbsWorksheet2Component }, 

];
@NgModule({
  declarations: [Std03AdverbsWorksheet2Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03AdverbsWorksheet2Module { }
