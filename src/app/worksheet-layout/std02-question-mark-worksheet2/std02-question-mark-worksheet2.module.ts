import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02QuestionMarkWorksheet2Component } from './std02-question-mark-worksheet2.component';
import { Routes, RouterModule } from '@angular/router';
import {  ClassTwoAuth} from "../Auth/ClassTwoAuth"
const routes: Routes = [
  { path: '',  canActivate: [ClassTwoAuth], component: Std02QuestionMarkWorksheet2Component }, 

];
@NgModule({
  declarations: [Std02QuestionMarkWorksheet2Component],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02QuestionMarkWorksheet2Module { }
