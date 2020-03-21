import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03MixedPunctuationWorksheet2Component} from './std03-mixed-punctuation-worksheet2.component'
const routes: Routes = [
  { path: '', component: Std03MixedPunctuationWorksheet2Component }, 

];
@NgModule({
  declarations: [Std03MixedPunctuationWorksheet2Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03MixedPunctuationWorksheet2Module { }
