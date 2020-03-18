import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02HomophonesWorksheet2Component } from './std02-homophones-worksheet2.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '', component: Std02HomophonesWorksheet2Component }, 

];
@NgModule({
  declarations: [Std02HomophonesWorksheet2Component],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02HomophonesWorksheet2Module { }
