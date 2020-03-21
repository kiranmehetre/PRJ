import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03MixedPunctuationWorksheet3Component} from './std03-mixed-punctuation-worksheet3.component'
const routes: Routes = [
  { path: '', component: Std03MixedPunctuationWorksheet3Component }, 

];
@NgModule({
  declarations: [Std03MixedPunctuationWorksheet3Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03MixedPunctuationWorksheet3Module { }
