import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03MixedPunctuationWorksheet1Component} from './std03-mixed-punctuation-worksheet1.component'
const routes: Routes = [
  { path: '', component: Std03MixedPunctuationWorksheet1Component }, 

];
@NgModule({
  declarations: [Std03MixedPunctuationWorksheet1Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03MixedPunctuationWorksheet1Module { }
