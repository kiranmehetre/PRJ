import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02AdverbsWorksheet6Component } from './std02-adverbs-worksheet6.component';
import { Routes, RouterModule } from '@angular/router';
import {  ClassTwoAuth} from "../Auth/ClassTwoAuth"
const routes: Routes = [
  { path: '',  canActivate: [ClassTwoAuth], component: Std02AdverbsWorksheet6Component }, 

];
@NgModule({
  declarations: [Std02AdverbsWorksheet6Component],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02AdverbsWorksheet6Module { }
