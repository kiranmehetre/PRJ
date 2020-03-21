import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03GenderNounsWorksheet2Component} from './std03-gender-nouns-worksheet2.component'
const routes: Routes = [
  { path: '', component: Std03GenderNounsWorksheet2Component }, 

];
@NgModule({
  declarations: [Std03GenderNounsWorksheet2Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03GenderNounsWorksheet2Module { }
