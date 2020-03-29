import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03AdjectivesOfNumberWorksheet1Component} from './std03-adjectives-of-number-worksheet1.component'
import {  ClassThreeAuth} from "../Auth/ClassThreeAuth"
const routes: Routes = [
  { path: '', canActivate: [ClassThreeAuth], component: Std03AdjectivesOfNumberWorksheet1Component }, 

];
@NgModule({
  declarations: [Std03AdjectivesOfNumberWorksheet1Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03AdjectivesOfNumberWorksheet1Module { }
