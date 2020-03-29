import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02FutureTenseWorksheet2Component } from './std02-future-tense-worksheet2.component';
import { Routes, RouterModule } from '@angular/router';
import {  ClassTwoAuth} from "../Auth/ClassTwoAuth"
const routes: Routes = [
  { path: '',  canActivate: [ClassTwoAuth], component: Std02FutureTenseWorksheet2Component }, 

];
@NgModule({
  declarations: [Std02FutureTenseWorksheet2Component],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02FutureTenseWorksheet2Module { }
