import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02ConjunctionsWorksheet8Component } from './std02-conjunctions-worksheet8.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '', component: Std02ConjunctionsWorksheet8Component }, 

];
@NgModule({
  declarations: [Std02ConjunctionsWorksheet8Component],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02ConjunctionsWorksheet8Module { }
