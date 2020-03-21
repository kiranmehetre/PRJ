import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03AdjectivesOfQualityWorksheet1Component} from './std03-adjectives-of-quality-worksheet1.component'
const routes: Routes = [
  { path: '', component: Std03AdjectivesOfQualityWorksheet1Component }, 

];
@NgModule({
  declarations: [Std03AdjectivesOfQualityWorksheet1Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03AdjectivesOfQualityWorksheet1Module { }
