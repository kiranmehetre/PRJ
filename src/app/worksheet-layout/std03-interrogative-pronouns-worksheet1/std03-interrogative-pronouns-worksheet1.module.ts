import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03InterrogativePronounsWorksheet1Component} from './std03-interrogative-pronouns-worksheet1.component'
import {  ClassThreeAuth} from "../Auth/ClassThreeAuth"
const routes: Routes = [
  { path: '', canActivate: [ClassThreeAuth], component:Std03InterrogativePronounsWorksheet1Component  }, 

];
@NgModule({
  declarations: [Std03InterrogativePronounsWorksheet1Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03InterrogativePronounsWorksheet1Module { }
