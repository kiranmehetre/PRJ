import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03GenderNounsWorksheet4Component} from './std03-gender-nouns-worksheet4.component'
const routes: Routes = [
  { path: '', component: Std03GenderNounsWorksheet4Component }, 

];
@NgModule({
  declarations: [Std03GenderNounsWorksheet4Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03GenderNounsWorksheet4Module { }
