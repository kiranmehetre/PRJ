import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02CommaWorksheet2Component } from './std02-comma-worksheet2.component';
import { Routes, RouterModule } from '@angular/router';
import {  ClassTwoAuth} from "../Auth/ClassTwoAuth"
const routes: Routes = [
  { path: '',  canActivate: [ClassTwoAuth], component: Std02CommaWorksheet2Component }, 

];
@NgModule({
  declarations: [Std02CommaWorksheet2Component],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02CommaWorksheet2Module { }
