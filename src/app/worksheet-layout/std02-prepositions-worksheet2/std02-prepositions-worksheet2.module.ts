import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02PrepositionsWorksheet2Component } from './std02-prepositions-worksheet2.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '', component: Std02PrepositionsWorksheet2Component }, 

];
@NgModule({
  declarations: [Std02PrepositionsWorksheet2Component],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02PrepositionsWorksheet2Module { }
