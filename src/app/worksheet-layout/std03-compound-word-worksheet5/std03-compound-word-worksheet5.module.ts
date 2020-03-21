import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03CompoundWordWorksheet5Component} from './std03-compound-word-worksheet5.component'
const routes: Routes = [
  { path: '', component: Std03CompoundWordWorksheet5Component }, 

];
@NgModule({
  declarations: [Std03CompoundWordWorksheet5Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03CompoundWordWorksheet5Module { }
