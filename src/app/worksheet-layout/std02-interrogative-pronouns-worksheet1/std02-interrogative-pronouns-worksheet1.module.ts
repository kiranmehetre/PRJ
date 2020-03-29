import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02InterrogativePronounsWorksheet1Component } from './std02-interrogative-pronouns-worksheet1.component';
import { Routes, RouterModule } from '@angular/router';
import {  ClassTwoAuth} from "../Auth/ClassTwoAuth"
const routes: Routes = [
  { path: '',  canActivate: [ClassTwoAuth], component: Std02InterrogativePronounsWorksheet1Component }, 

];
@NgModule({
  declarations: [Std02InterrogativePronounsWorksheet1Component],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02InterrogativePronounsWorksheet1Module { }
