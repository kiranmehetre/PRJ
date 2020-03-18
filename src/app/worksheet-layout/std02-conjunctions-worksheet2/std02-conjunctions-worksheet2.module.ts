import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02ConjunctionsWorksheet2Component } from './std02-conjunctions-worksheet2.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '', component: Std02ConjunctionsWorksheet2Component }, 

];
@NgModule({
  declarations: [Std02ConjunctionsWorksheet2Component],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02ConjunctionsWorksheet2Module { }
