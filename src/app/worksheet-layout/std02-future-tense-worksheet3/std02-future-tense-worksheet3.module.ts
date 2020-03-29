import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02FutureTenseWorksheet3Component } from './std02-future-tense-worksheet3.component';
import { Routes, RouterModule } from '@angular/router';
import {  ClassTwoAuth} from "../Auth/ClassTwoAuth"
const routes: Routes = [
  { path: '',  canActivate: [ClassTwoAuth], component: Std02FutureTenseWorksheet3Component }, 

];
@NgModule({
  declarations: [Std02FutureTenseWorksheet3Component],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02FutureTenseWorksheet3Module { }
