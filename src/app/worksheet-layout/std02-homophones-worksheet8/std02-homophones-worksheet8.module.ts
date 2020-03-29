import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02HomophonesWorksheet8Component } from './std02-homophones-worksheet8.component';
import { Routes, RouterModule } from '@angular/router';
import {  ClassTwoAuth} from "../Auth/ClassTwoAuth"
const routes: Routes = [
  { path: '',  canActivate: [ClassTwoAuth], component: Std02HomophonesWorksheet8Component }, 

];
@NgModule({
  declarations: [Std02HomophonesWorksheet8Component],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02HomophonesWorksheet8Module { }
