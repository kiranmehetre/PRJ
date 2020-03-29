import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02InterrogativePronounsWorksheet2Component } from './std02-interrogative-pronouns-worksheet2.component';
import { Routes, RouterModule } from '@angular/router';
import {  ClassTwoAuth} from "../Auth/ClassTwoAuth"
const routes: Routes = [
  { path: '',  canActivate: [ClassTwoAuth], component: Std02InterrogativePronounsWorksheet2Component }, 

];
@NgModule({
  declarations: [Std02InterrogativePronounsWorksheet2Component],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02InterrogativePronounsWorksheet2Module { }
