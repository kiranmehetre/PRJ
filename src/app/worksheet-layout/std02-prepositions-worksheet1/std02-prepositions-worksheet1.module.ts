import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02PrepositionsWorksheet1Component } from './std02-prepositions-worksheet1.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '', component: Std02PrepositionsWorksheet1Component }, 

];
@NgModule({
  declarations: [Std02PrepositionsWorksheet1Component],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02PrepositionsWorksheet1Module { }
