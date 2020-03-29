import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02AdverbsWorksheet1Component } from './std02-adverbs-worksheet1.component';
import { Routes, RouterModule } from '@angular/router';
import {  ClassTwoAuth} from "../Auth/ClassTwoAuth"
const routes: Routes = [
  { path: '',  canActivate: [ClassTwoAuth], component: Std02AdverbsWorksheet1Component }, 

];
@NgModule({
  declarations: [Std02AdverbsWorksheet1Component],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02AdverbsWorksheet1Module { }
