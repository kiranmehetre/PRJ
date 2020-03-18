import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02ActionVerbsWorksheet4Component } from './std02-action-verbs-worksheet4.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '', component: Std02ActionVerbsWorksheet4Component }, 

];
@NgModule({
  declarations: [Std02ActionVerbsWorksheet4Component],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02ActionVerbsWorksheet4Module { }
