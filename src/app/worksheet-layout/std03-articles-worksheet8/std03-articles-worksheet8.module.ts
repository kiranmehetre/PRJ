import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03ArticlesWorksheet8Component} from './std03-articles-worksheet8.component'
const routes: Routes = [
  { path: '', component: Std03ArticlesWorksheet8Component }, 

];
@NgModule({
  declarations: [Std03ArticlesWorksheet8Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03ArticlesWorksheet8Module { }
