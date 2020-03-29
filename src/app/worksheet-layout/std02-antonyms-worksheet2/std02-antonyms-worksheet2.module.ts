import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Std02AntonymsWorksheet2Component} from "./std02-antonyms-worksheet2.component"
import { Routes, RouterModule } from '@angular/router';
import {  ClassTwoAuth} from "../Auth/ClassTwoAuth"
const routes: Routes = [
  { path: '',  canActivate: [ClassTwoAuth], component: Std02AntonymsWorksheet2Component }, 

];
@NgModule({
  declarations: [Std02AntonymsWorksheet2Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Std02AntonymsWorksheet2Module { }
