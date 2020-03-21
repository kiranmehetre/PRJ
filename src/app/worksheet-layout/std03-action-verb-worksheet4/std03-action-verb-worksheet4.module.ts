import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03ActionVerbWorksheet4Component} from './std03-action-verb-worksheet4.component'
const routes: Routes = [
  { path: '', component: Std03ActionVerbWorksheet4Component }, 

];
@NgModule({
  declarations: [Std03ActionVerbWorksheet4Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03ActionVerbWorksheet4Module { }
