import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03MixedTenseWorksheet3Component} from './std03-mixed-tense-worksheet3.component'
const routes: Routes = [
  { path: '', component: Std03MixedTenseWorksheet3Component }, 

];
@NgModule({
  declarations: [Std03MixedTenseWorksheet3Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03MixedTenseWorksheet3Module { }
