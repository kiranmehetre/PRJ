import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03AdverbsWorksheet3Component} from './std03-adverbs-worksheet3.component'
const routes: Routes = [
  { path: '', component: Std03AdverbsWorksheet3Component }, 

];
@NgModule({
  declarations: [Std03AdverbsWorksheet3Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03AdverbsWorksheet3Module { }
