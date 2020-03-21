import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03GenderNounsWorksheet8Component} from './std03-gender-nouns-worksheet8.component'
const routes: Routes = [
  { path: '', component: Std03GenderNounsWorksheet8Component }, 

];
@NgModule({
  declarations: [Std03GenderNounsWorksheet8Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03GenderNounsWorksheet8Module { }
