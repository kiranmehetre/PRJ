import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03ArticlesWorksheet7Component} from './std03-articles-worksheet7.component'
const routes: Routes = [
  { path: '', component:Std03ArticlesWorksheet7Component  }, 

];
@NgModule({
  declarations: [Std03ArticlesWorksheet7Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03ArticlesWorksheet7Module { }
