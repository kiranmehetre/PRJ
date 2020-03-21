import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03CompoundWordWorksheet4Component} from './std03-compound-word-worksheet4.component'
const routes: Routes = [
  { path: '', component:  Std03CompoundWordWorksheet4Component}, 

];
@NgModule({
  declarations: [Std03CompoundWordWorksheet4Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03CompoundWordWorksheet4Module { }
