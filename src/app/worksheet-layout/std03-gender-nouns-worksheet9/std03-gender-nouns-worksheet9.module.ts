import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03GenderNounsWorksheet9Component} from './std03-gender-nouns-worksheet9.component'
const routes: Routes = [
  { path: '', component: Std03GenderNounsWorksheet9Component }, 

];
@NgModule({
  declarations: [Std03GenderNounsWorksheet9Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03GenderNounsWorksheet9Module { }
