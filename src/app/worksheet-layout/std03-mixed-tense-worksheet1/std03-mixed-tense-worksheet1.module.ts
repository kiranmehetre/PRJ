import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03MixedTenseWorksheet1Component} from './std03-mixed-tense-worksheet1.component'
import {  ClassThreeAuth} from "../Auth/ClassThreeAuth"
const routes: Routes = [
  { path: '', canActivate: [ClassThreeAuth], component: Std03MixedTenseWorksheet1Component }, 

];
@NgModule({
  declarations: [Std03MixedTenseWorksheet1Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03MixedTenseWorksheet1Module { }
