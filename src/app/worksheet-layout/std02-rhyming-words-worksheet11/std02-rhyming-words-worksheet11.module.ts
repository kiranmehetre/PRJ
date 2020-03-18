import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02RhymingWordsWorksheet11Component } from './std02-rhyming-words-worksheet11.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '', component: Std02RhymingWordsWorksheet11Component }, 

];
@NgModule({
  declarations: [Std02RhymingWordsWorksheet11Component],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02RhymingWordsWorksheet11Module { }
