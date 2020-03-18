import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02HomophonesWorksheet1Component } from './std02-homophones-worksheet1.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '', component: Std02HomophonesWorksheet1Component }, 

];
@NgModule({
  declarations: [Std02HomophonesWorksheet1Component],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02HomophonesWorksheet1Module { }
