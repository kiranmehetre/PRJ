import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03GenderNounsWorksheet6Component} from './std03-gender-nouns-worksheet6.component'
const routes: Routes = [
  { path: '', component: Std03GenderNounsWorksheet6Component }, 

];
@NgModule({
  declarations: [Std03GenderNounsWorksheet6Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03GenderNounsWorksheet6Module { }
