import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02HomophonesWorksheet9Component } from './std02-homophones-worksheet9.component';
import { Routes, RouterModule } from '@angular/router';
import {  ClassTwoAuth} from "../Auth/ClassTwoAuth"
const routes: Routes = [
  { path: '',  canActivate: [ClassTwoAuth], component: Std02HomophonesWorksheet9Component }, 

];
@NgModule({
  declarations: [Std02HomophonesWorksheet9Component],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02HomophonesWorksheet9Module { }
