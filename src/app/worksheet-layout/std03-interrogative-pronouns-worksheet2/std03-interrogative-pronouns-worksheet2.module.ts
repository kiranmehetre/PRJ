import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03InterrogativePronounsWorksheet2Component} from './std03-interrogative-pronouns-worksheet2.component'
import {  ClassThreeAuth} from "../Auth/ClassThreeAuth"
const routes: Routes = [
  { path: '', canActivate: [ClassThreeAuth], component: Std03InterrogativePronounsWorksheet2Component }, 

];
@NgModule({
  declarations: [Std03InterrogativePronounsWorksheet2Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03InterrogativePronounsWorksheet2Module { }
