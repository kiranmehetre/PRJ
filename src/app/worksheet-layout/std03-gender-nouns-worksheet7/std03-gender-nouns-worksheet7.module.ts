import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03GenderNounsWorksheet7Component} from './std03-gender-nouns-worksheet7.component'
const routes: Routes = [
  { path: '', component:Std03GenderNounsWorksheet7Component  }, 

];
@NgModule({
  declarations: [Std03GenderNounsWorksheet7Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03GenderNounsWorksheet7Module { }
