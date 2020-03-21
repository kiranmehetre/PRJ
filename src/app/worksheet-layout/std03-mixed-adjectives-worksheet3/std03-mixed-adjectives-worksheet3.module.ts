import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03MixedAdjectivesWorksheet3Component} from './std03-mixed-adjectives-worksheet3.component'
const routes: Routes = [
  { path: '', component: Std03MixedAdjectivesWorksheet3Component }, 

];
@NgModule({
  declarations: [Std03MixedAdjectivesWorksheet3Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03MixedAdjectivesWorksheet3Module { }
