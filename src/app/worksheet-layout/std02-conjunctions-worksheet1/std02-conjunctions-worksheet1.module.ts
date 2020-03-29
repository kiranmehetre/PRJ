import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02ConjunctionsWorksheet1Component } from './std02-conjunctions-worksheet1.component';
import { Routes, RouterModule } from '@angular/router';
import {  ClassTwoAuth} from "../Auth/ClassTwoAuth"
const routes: Routes = [
  { path: '',  canActivate: [ClassTwoAuth], component: Std02ConjunctionsWorksheet1Component }, 

];
@NgModule({
  declarations: [Std02ConjunctionsWorksheet1Component],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02ConjunctionsWorksheet1Module { }
