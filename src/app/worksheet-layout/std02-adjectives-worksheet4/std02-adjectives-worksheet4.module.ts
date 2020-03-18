import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02AdjectivesWorksheet4Component } from './std02-adjectives-worksheet4.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '', component: Std02AdjectivesWorksheet4Component }, 

];
@NgModule({
  declarations: [Std02AdjectivesWorksheet4Component],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02AdjectivesWorksheet4Module { }
