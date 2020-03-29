import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02AdverbsWorksheet7Component } from './std02-adverbs-worksheet7.component';
import { Routes, RouterModule } from '@angular/router';
import {  ClassTwoAuth} from "../Auth/ClassTwoAuth"
const routes: Routes = [
  { path: '',  canActivate: [ClassTwoAuth], component: Std02AdverbsWorksheet7Component }, 

];
@NgModule({
  declarations: [Std02AdverbsWorksheet7Component],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02AdverbsWorksheet7Module { }
