import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03AbstractNounWorksheet2Component} from './std03-abstract-noun-worksheet2.component'
const routes: Routes = [
  { path: '', component: Std03AbstractNounWorksheet2Component }, 

];
@NgModule({
  declarations: [Std03AbstractNounWorksheet2Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03AbstractNounWorksheet2Module { }
