import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02PossessivePronounsWorksheet2Component } from './std02-possessive-pronouns-worksheet2.component';
import { Routes, RouterModule } from '@angular/router';
import {  ClassTwoAuth} from "../Auth/ClassTwoAuth"
const routes: Routes = [
  { path: '',  canActivate: [ClassTwoAuth], component: Std02PossessivePronounsWorksheet2Component }, 

];
@NgModule({
  declarations: [Std02PossessivePronounsWorksheet2Component],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02PossessivePronounsWorksheet2Module { }
