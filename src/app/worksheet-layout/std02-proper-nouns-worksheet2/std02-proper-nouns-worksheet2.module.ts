import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02ProperNounsWorksheet2Component } from './std02-proper-nouns-worksheet2.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '', component: Std02ProperNounsWorksheet2Component }, 

];
@NgModule({
  declarations: [Std02ProperNounsWorksheet2Component],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02ProperNounsWorksheet2Module { }
