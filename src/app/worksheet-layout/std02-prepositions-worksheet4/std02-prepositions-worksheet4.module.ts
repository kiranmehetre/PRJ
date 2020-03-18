import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02PrepositionsWorksheet4Component } from './std02-prepositions-worksheet4.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '', component: Std02PrepositionsWorksheet4Component }, 

];
@NgModule({
  declarations: [Std02PrepositionsWorksheet4Component],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02PrepositionsWorksheet4Module { }
