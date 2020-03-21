import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03CompoundWordWorksheet6Component} from './std03-compound-word-worksheet6.component'
const routes: Routes = [
  { path: '', component: Std03CompoundWordWorksheet6Component }, 

];
@NgModule({
  declarations: [Std03CompoundWordWorksheet6Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03CompoundWordWorksheet6Module { }
