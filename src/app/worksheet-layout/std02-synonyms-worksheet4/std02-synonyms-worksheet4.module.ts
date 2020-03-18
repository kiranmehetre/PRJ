import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02SynonymsWorksheet4Component } from './std02-synonyms-worksheet4.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '', component: Std02SynonymsWorksheet4Component }, 

];
@NgModule({
  declarations: [Std02SynonymsWorksheet4Component],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02SynonymsWorksheet4Module { }
