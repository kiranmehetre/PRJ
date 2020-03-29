import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02InterrogativePronounsWorksheet3Component } from './std02-interrogative-pronouns-worksheet3.component';
import { Routes, RouterModule } from '@angular/router';
import {  ClassTwoAuth} from "../Auth/ClassTwoAuth"
const routes: Routes = [
  { path: '',  canActivate: [ClassTwoAuth], component: Std02InterrogativePronounsWorksheet3Component }, 

];
@NgModule({
  declarations: [Std02InterrogativePronounsWorksheet3Component],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02InterrogativePronounsWorksheet3Module { }
