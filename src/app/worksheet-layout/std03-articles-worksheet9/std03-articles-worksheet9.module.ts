import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03ArticlesWorksheet9Component} from './std03-articles-worksheet9.component'
const routes: Routes = [
  { path: '', component:Std03ArticlesWorksheet9Component  }, 

];
@NgModule({
  declarations: [Std03ArticlesWorksheet9Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03ArticlesWorksheet9Module { }
