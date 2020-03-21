import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03ExclamationWorksheet2Component} from './std03-exclamation-worksheet2.component'
const routes: Routes = [
  { path: '', component: Std03ExclamationWorksheet2Component }, 

];
@NgModule({
  declarations: [Std03ExclamationWorksheet2Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03ExclamationWorksheet2Module { }
