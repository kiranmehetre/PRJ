import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03GenderNounsWorksheet1Component } from './std03-gender-nouns-worksheet1.component'
const routes: Routes = [
  { path: '', component:Std03GenderNounsWorksheet1Component  }, 

];
@NgModule({
  declarations: [Std03GenderNounsWorksheet1Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03GenderNounsWorksheet1Module { }
