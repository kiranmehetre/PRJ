import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03AdverbsWorksheet1Component} from './std03-adverbs-worksheet1.component'
const routes: Routes = [
  { path: '', component: Std03AdverbsWorksheet1Component }, 

];
@NgModule({
  declarations: [Std03AdverbsWorksheet1Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03AdverbsWorksheet1Module { }
