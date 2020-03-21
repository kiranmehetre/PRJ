import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03AdjectivesOfNumberWorksheet2Component} from './std03-adjectives-of-number-worksheet2.component'
const routes: Routes = [
  { path: '', component: Std03AdjectivesOfNumberWorksheet2Component }, 

];
@NgModule({
  declarations: [Std03AdjectivesOfNumberWorksheet2Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03AdjectivesOfNumberWorksheet2Module { }
