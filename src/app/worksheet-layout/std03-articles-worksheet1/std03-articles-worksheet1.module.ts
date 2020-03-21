import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03ArticlesWorksheet1Component} from './std03-articles-worksheet1.component'
const routes: Routes = [
  { path: '', component: Std03ArticlesWorksheet1Component }, 

];
@NgModule({
  declarations: [Std03ArticlesWorksheet1Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03ArticlesWorksheet1Module { }
