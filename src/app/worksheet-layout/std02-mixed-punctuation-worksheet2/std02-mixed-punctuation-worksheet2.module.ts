import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02MixedPunctuationWorksheet2Component } from './std02-mixed-punctuation-worksheet2.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '', component: Std02MixedPunctuationWorksheet2Component }, 

];
@NgModule({
  declarations: [Std02MixedPunctuationWorksheet2Component],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02MixedPunctuationWorksheet2Module { }
