import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03ArticlesWorksheet10Component} from './std03-articles-worksheet10.component'
const routes: Routes = [
  { path: '', component: Std03ArticlesWorksheet10Component }, 

];
@NgModule({
  declarations: [Std03ArticlesWorksheet10Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03ArticlesWorksheet10Module { }
