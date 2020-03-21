import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03AdverbsWorksheet8Component} from './std03-adverbs-worksheet8.component'
const routes: Routes = [
  { path: '', component: Std03AdverbsWorksheet8Component }, 

];
@NgModule({
  declarations: [Std03AdverbsWorksheet8Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03AdverbsWorksheet8Module { }
