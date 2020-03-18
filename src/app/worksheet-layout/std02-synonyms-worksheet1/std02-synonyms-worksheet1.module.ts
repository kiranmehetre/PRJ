import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02SynonymsWorksheet1Component } from './std02-synonyms-worksheet1.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '', component: Std02SynonymsWorksheet1Component }, 

];
@NgModule({
  declarations: [Std02SynonymsWorksheet1Component],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02SynonymsWorksheet1Module { }
