import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02PossessivePronounsWorksheet4Component } from './std02-possessive-pronouns-worksheet4.component';
import { Routes, RouterModule } from '@angular/router';
import {  ClassTwoAuth} from "../Auth/ClassTwoAuth"
const routes: Routes = [
  { path: '',  canActivate: [ClassTwoAuth], component: Std02PossessivePronounsWorksheet4Component }, 

];
@NgModule({
  declarations: [Std02PossessivePronounsWorksheet4Component],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02PossessivePronounsWorksheet4Module { }
