import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02ActionVerbsWorksheet1Component } from './std02-action-verbs-worksheet1.component';
import { Routes, RouterModule } from '@angular/router';
import {  ClassTwoAuth} from "../Auth/ClassTwoAuth"
const routes: Routes = [
  { path: '', canActivate: [ClassTwoAuth], component: Std02ActionVerbsWorksheet1Component }, 

];
@NgModule({
  declarations: [Std02ActionVerbsWorksheet1Component],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02ActionVerbsWorksheet1Module { }
