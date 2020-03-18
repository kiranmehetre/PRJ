import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02AdverbsWorksheet4Component } from './std02-adverbs-worksheet4.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '', component: Std02AdverbsWorksheet4Component }, 

];
@NgModule({
  declarations: [Std02AdverbsWorksheet4Component],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02AdverbsWorksheet4Module { }
