import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03AdjectivesOfQualityWorksheet2Component} from './std03-adjectives-of-quality-worksheet2.component'
import {  ClassThreeAuth} from "../Auth/ClassThreeAuth"
const routes: Routes = [
  { path: '', canActivate: [ClassThreeAuth], component: Std03AdjectivesOfQualityWorksheet2Component }, 

];
@NgModule({
  declarations: [Std03AdjectivesOfQualityWorksheet2Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03AdjectivesOfQualityWorksheet2Module { }
