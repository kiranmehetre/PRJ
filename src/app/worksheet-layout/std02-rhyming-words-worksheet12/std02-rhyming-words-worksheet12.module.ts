import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02RhymingWordsWorksheet12Component } from './std02-rhyming-words-worksheet12.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '', component: Std02RhymingWordsWorksheet12Component }, 

];
@NgModule({
  declarations: [Std02RhymingWordsWorksheet12Component],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02RhymingWordsWorksheet12Module { }
