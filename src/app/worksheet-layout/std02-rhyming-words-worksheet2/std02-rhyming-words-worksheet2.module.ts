import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02RhymingWordsWorksheet2Component } from './std02-rhyming-words-worksheet2.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '', component: Std02RhymingWordsWorksheet2Component }, 

];
@NgModule({
  declarations: [Std02RhymingWordsWorksheet2Component],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02RhymingWordsWorksheet2Module { }
