import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02FutureTenseWorksheet1Component } from './std02-future-tense-worksheet1.component';
import { Routes, RouterModule } from '@angular/router';
import {  ClassTwoAuth} from "../Auth/ClassTwoAuth"
const routes: Routes = [
  { path: '',  canActivate: [ClassTwoAuth], component: Std02FutureTenseWorksheet1Component }, 

];
@NgModule({
  declarations: [Std02FutureTenseWorksheet1Component],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02FutureTenseWorksheet1Module { }
