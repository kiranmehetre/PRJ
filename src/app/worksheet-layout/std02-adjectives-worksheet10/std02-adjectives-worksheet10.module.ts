import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02AdjectivesWorksheet10Component } from './std02-adjectives-worksheet10.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '', component: Std02AdjectivesWorksheet10Component }, 

];
@NgModule({
  declarations: [Std02AdjectivesWorksheet10Component],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02AdjectivesWorksheet10Module { }
