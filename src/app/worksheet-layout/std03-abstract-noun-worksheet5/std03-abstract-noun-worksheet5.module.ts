import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03AbstractNounWorksheet5Component} from './std03-abstract-noun-worksheet5.component'
const routes: Routes = [
  { path: '', component: Std03AbstractNounWorksheet5Component }, 

];
@NgModule({
  declarations: [Std03AbstractNounWorksheet5Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03AbstractNounWorksheet5Module { }
