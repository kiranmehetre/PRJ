import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03ActionVerbWorksheet3Component} from './std03-action-verb-worksheet3.component'
const routes: Routes = [
  { path: '', component: Std03ActionVerbWorksheet3Component }, 

];
@NgModule({
  declarations: [Std03ActionVerbWorksheet3Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03ActionVerbWorksheet3Module { }
