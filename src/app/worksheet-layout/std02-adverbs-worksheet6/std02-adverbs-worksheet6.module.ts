import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02AdverbsWorksheet6Component } from './std02-adverbs-worksheet6.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '', component: Std02AdverbsWorksheet6Component }, 

];
@NgModule({
  declarations: [Std02AdverbsWorksheet6Component],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02AdverbsWorksheet6Module { }
