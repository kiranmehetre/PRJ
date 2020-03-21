import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03MixedAdjectivesWorksheet2Component} from './std03-mixed-adjectives-worksheet2.component'
const routes: Routes = [
  { path: '', component: Std03MixedAdjectivesWorksheet2Component }, 

];
@NgModule({
  declarations: [Std03MixedAdjectivesWorksheet2Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03MixedAdjectivesWorksheet2Module { }
