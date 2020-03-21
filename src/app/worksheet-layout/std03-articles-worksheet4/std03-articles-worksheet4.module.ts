import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03ArticlesWorksheet4Component} from './std03-articles-worksheet4.component'
const routes: Routes = [
  { path: '', component: Std03ArticlesWorksheet4Component }, 

];
@NgModule({
  declarations: [Std03ArticlesWorksheet4Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03ArticlesWorksheet4Module { }
