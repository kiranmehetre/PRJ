import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02SynonymsWorksheet7Component } from './std02-synonyms-worksheet7.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '', component: Std02SynonymsWorksheet7Component }, 

];
@NgModule({
  declarations: [Std02SynonymsWorksheet7Component],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02SynonymsWorksheet7Module { }
