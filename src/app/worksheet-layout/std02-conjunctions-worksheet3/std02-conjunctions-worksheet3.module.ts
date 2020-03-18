import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02ConjunctionsWorksheet3Component } from './std02-conjunctions-worksheet3.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '', component: Std02ConjunctionsWorksheet3Component }, 

];
@NgModule({
  declarations: [Std02ConjunctionsWorksheet3Component],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02ConjunctionsWorksheet3Module { }
