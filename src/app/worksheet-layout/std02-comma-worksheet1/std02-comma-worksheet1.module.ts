import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02CommaWorksheet1Component } from './std02-comma-worksheet1.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '', component: Std02CommaWorksheet1Component }, 

];
@NgModule({
  declarations: [Std02CommaWorksheet1Component],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02CommaWorksheet1Module { }
