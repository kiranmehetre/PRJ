import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03CompoundWordWorksheet8Component} from './std03-compound-word-worksheet8.component'
const routes: Routes = [
  { path: '', component: Std03CompoundWordWorksheet8Component }, 

];
@NgModule({
  declarations: [Std03CompoundWordWorksheet8Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03CompoundWordWorksheet8Module { }
