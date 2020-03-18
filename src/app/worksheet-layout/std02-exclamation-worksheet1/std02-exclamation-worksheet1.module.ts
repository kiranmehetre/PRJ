import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02ExclamationWorksheet1Component } from './std02-exclamation-worksheet1.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '', component: Std02ExclamationWorksheet1Component }, 

];
@NgModule({
  declarations: [Std02ExclamationWorksheet1Component],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02ExclamationWorksheet1Module { }
