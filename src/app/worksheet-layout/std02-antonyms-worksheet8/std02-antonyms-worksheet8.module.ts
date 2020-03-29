import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Std02AntonymsWorksheet8Component} from './std02-antonyms-worksheet8.component';
import { Routes, RouterModule } from '@angular/router';
import {  ClassTwoAuth} from "../Auth/ClassTwoAuth"
const routes: Routes = [
  { path: '',  canActivate: [ClassTwoAuth], component: Std02AntonymsWorksheet8Component}
];
@NgModule({
  declarations: [Std02AntonymsWorksheet8Component],
  imports: [
    CommonModule,RouterModule.forChild(routes) 
  ]
})
export class Std02AntonymsWorksheet8Module { }
