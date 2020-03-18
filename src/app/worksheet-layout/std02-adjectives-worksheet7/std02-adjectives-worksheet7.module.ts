import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02AdjectivesWorksheet7Component } from './std02-adjectives-worksheet7.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '', component: Std02AdjectivesWorksheet7Component }, 

];
@NgModule({
  declarations: [Std02AdjectivesWorksheet7Component],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02AdjectivesWorksheet7Module { }
