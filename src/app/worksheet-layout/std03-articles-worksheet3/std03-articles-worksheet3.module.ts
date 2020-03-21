import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03ArticlesWorksheet3Component} from './std03-articles-worksheet3.component'
const routes: Routes = [
  { path: '', component: Std03ArticlesWorksheet3Component }, 

];
@NgModule({
  declarations: [Std03ArticlesWorksheet3Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03ArticlesWorksheet3Module { }
