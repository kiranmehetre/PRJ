import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02ConjunctionsWorksheet6Component } from './std02-conjunctions-worksheet6.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '', component: Std02ConjunctionsWorksheet6Component }, 

];
@NgModule({
  declarations: [Std02ConjunctionsWorksheet6Component],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02ConjunctionsWorksheet6Module { }
