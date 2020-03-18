import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02RhymingWordsWorksheet3Component } from './std02-rhyming-words-worksheet3.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '', component: Std02RhymingWordsWorksheet3Component }, 

];
@NgModule({
  declarations: [Std02RhymingWordsWorksheet3Component],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02RhymingWordsWorksheet3Module { }
