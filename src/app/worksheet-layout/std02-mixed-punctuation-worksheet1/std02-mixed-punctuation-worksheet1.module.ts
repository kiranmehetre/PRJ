import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02MixedPunctuationWorksheet1Component } from './std02-mixed-punctuation-worksheet1.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '', component: Std02MixedPunctuationWorksheet1Component }, 

];
@NgModule({
  declarations: [Std02MixedPunctuationWorksheet1Component],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02MixedPunctuationWorksheet1Module { }
