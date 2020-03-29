import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02QuestionMarkWorksheet1Component } from './std02-question-mark-worksheet1.component';
import { Routes, RouterModule } from '@angular/router';
import {  ClassTwoAuth} from "../Auth/ClassTwoAuth"
const routes: Routes = [
  { path: '',  canActivate: [ClassTwoAuth], component: Std02QuestionMarkWorksheet1Component }, 

];
@NgModule({
  declarations: [Std02QuestionMarkWorksheet1Component],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02QuestionMarkWorksheet1Module { }
