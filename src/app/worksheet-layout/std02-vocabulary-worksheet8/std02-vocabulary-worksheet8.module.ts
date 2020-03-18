import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02VocabularyWorksheet8Component } from './std02-vocabulary-worksheet8.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '', component: Std02VocabularyWorksheet8Component }, 

];
@NgModule({
  declarations: [Std02VocabularyWorksheet8Component],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02VocabularyWorksheet8Module { }
