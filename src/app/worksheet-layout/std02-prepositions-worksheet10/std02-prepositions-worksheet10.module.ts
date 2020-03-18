import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02PrepositionsWorksheet10Component } from './std02-prepositions-worksheet10.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '', component: Std02PrepositionsWorksheet10Component }, 

];
@NgModule({
  declarations: [Std02PrepositionsWorksheet10Component],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02PrepositionsWorksheet10Module { }
