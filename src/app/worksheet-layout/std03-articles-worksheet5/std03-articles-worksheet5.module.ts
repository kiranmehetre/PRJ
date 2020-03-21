import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03ArticlesWorksheet5Component} from './std03-articles-worksheet5.component'
const routes: Routes = [
  { path: '', component:Std03ArticlesWorksheet5Component  }, 

];
@NgModule({
  declarations: [Std03ArticlesWorksheet5Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03ArticlesWorksheet5Module { }
