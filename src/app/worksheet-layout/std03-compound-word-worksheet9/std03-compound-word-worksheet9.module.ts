import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03CompoundWordWorksheet9Component} from './std03-compound-word-worksheet9.component'
const routes: Routes = [
  { path: '', component: Std03CompoundWordWorksheet9Component }, 

];
@NgModule({
  declarations: [Std03CompoundWordWorksheet9Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03CompoundWordWorksheet9Module { }
