import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03ActionVerbWorksheet2Component} from './std03-action-verb-worksheet2.component'
const routes: Routes = [
  { path: '', component: Std03ActionVerbWorksheet2Component }, 

];
@NgModule({
  declarations: [Std03ActionVerbWorksheet2Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03ActionVerbWorksheet2Module { }
