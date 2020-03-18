import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02AdjectivesWorksheet8Component } from './std02-adjectives-worksheet8.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '', component: Std02AdjectivesWorksheet8Component }, 

];
@NgModule({
  declarations: [Std02AdjectivesWorksheet8Component],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02AdjectivesWorksheet8Module { }
