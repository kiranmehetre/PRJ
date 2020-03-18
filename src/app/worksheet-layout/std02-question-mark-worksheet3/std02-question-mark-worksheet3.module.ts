import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02QuestionMarkWorksheet3Component } from './std02-question-mark-worksheet3.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '', component: Std02QuestionMarkWorksheet3Component }, 

];
@NgModule({
  declarations: [Std02QuestionMarkWorksheet3Component],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02QuestionMarkWorksheet3Module { }
