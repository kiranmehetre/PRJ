import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03AdverbsWorksheet4Component} from './std03-adverbs-worksheet4.component'
const routes: Routes = [
  { path: '', component: Std03AdverbsWorksheet4Component }, 

];
@NgModule({
  declarations: [Std03AdverbsWorksheet4Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03AdverbsWorksheet4Module { }
