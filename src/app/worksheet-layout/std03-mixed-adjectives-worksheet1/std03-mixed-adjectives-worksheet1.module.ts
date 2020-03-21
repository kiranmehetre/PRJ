import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03MixedAdjectivesWorksheet1Component} from './std03-mixed-adjectives-worksheet1.component'
const routes: Routes = [
  { path: '', component: Std03MixedAdjectivesWorksheet1Component }, 

];
@NgModule({
  declarations: [Std03MixedAdjectivesWorksheet1Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03MixedAdjectivesWorksheet1Module { }
