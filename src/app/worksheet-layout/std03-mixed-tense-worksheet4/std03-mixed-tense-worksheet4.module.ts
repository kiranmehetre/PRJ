import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {Std03MixedTenseWorksheet4Component} from './std03-mixed-tense-worksheet4.component'
const routes: Routes = [
  { path: '', component: Std03MixedTenseWorksheet4Component }, 

];
@NgModule({
  declarations: [Std03MixedTenseWorksheet4Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03MixedTenseWorksheet4Module { }
