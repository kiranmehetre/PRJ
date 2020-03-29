import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02AntonymsWorksheet3Component } from './std02-antonyms-worksheet3.component';
import { Routes, RouterModule } from '@angular/router';
import {  ClassTwoAuth} from "../Auth/ClassTwoAuth"
const routes: Routes = [
  { path: '',  canActivate: [ClassTwoAuth], component: Std02AntonymsWorksheet3Component }, 

];
@NgModule({
  declarations: [Std02AntonymsWorksheet3Component],
  imports: [
    CommonModule,  RouterModule.forChild(routes) 
  ]
})
export class Std02AntonymsWorksheet3Module { }
