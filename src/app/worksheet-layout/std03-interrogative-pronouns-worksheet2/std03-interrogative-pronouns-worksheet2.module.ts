import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03InterrogativePronounsWorksheet2Component} from './std03-interrogative-pronouns-worksheet2.component'
const routes: Routes = [
  { path: '', component: Std03InterrogativePronounsWorksheet2Component }, 

];
@NgModule({
  declarations: [Std03InterrogativePronounsWorksheet2Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03InterrogativePronounsWorksheet2Module { }
