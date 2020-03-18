import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02VocabularyWorksheet4Component } from './std02-vocabulary-worksheet4.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '', component: Std02VocabularyWorksheet4Component }, 

];
@NgModule({
  declarations: [Std02VocabularyWorksheet4Component],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02VocabularyWorksheet4Module { }
