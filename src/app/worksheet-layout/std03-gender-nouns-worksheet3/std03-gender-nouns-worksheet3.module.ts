import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03GenderNounsWorksheet3Component} from './std03-gender-nouns-worksheet3.component'
const routes: Routes = [
  { path: '', component: Std03GenderNounsWorksheet3Component }, 

];
@NgModule({
  declarations: [Std03GenderNounsWorksheet3Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03GenderNounsWorksheet3Module { }
