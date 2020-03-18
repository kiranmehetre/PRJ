import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02VocabularyWorksheet2Component } from './std02-vocabulary-worksheet2.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '', component: Std02VocabularyWorksheet2Component }, 

];
@NgModule({
  declarations: [Std02VocabularyWorksheet2Component],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02VocabularyWorksheet2Module { }
