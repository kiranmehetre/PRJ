import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02ActionVerbsWorksheet5Component } from './std02-action-verbs-worksheet5.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '', component: Std02ActionVerbsWorksheet5Component }, 

];
@NgModule({
  declarations: [Std02ActionVerbsWorksheet5Component],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02ActionVerbsWorksheet5Module { }
