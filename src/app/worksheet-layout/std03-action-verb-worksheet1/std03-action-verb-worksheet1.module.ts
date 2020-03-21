import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03ActionVerbWorksheet1Component} from './std03-action-verb-worksheet1.component'
const routes: Routes = [
  { path: '', component: Std03ActionVerbWorksheet1Component }, 

];
@NgModule({
  declarations: [Std03ActionVerbWorksheet1Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03ActionVerbWorksheet1Module { }
