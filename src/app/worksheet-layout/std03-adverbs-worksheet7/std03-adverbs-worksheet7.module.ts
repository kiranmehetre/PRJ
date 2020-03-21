import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03AdverbsWorksheet7Component} from './std03-adverbs-worksheet7.component'
const routes: Routes = [
  { path: '', component: Std03AdverbsWorksheet7Component }, 

];
@NgModule({
  declarations: [Std03AdverbsWorksheet7Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03AdverbsWorksheet7Module { }
