import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03ArticlesWorksheet6Component} from './std03-articles-worksheet6.component'
const routes: Routes = [
  { path: '', component: Std03ArticlesWorksheet6Component }, 

];
@NgModule({
  declarations: [Std03ArticlesWorksheet6Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03ArticlesWorksheet6Module { }
