import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03AdverbsWorksheet9Component} from './std03-adverbs-worksheet9.component'
const routes: Routes = [
  { path: '', component: Std03AdverbsWorksheet9Component }, 

];
@NgModule({
  declarations: [Std03AdverbsWorksheet9Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03AdverbsWorksheet9Module { }
