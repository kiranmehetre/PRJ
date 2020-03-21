import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03MixedAdjectivesWorksheet4Component} from './std03-mixed-adjectives-worksheet4.component'
const routes: Routes = [
  { path: '', component: Std03MixedAdjectivesWorksheet4Component }, 

];
@NgModule({
  declarations: [Std03MixedAdjectivesWorksheet4Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03MixedAdjectivesWorksheet4Module { }
