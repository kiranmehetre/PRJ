import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  Std02ProperNounsWorksheet1Component } from './std02-proper-nouns-worksheet1.component';
import { Routes, RouterModule } from '@angular/router';
import {  ClassTwoAuth} from "../Auth/ClassTwoAuth"
const routes: Routes = [
  { path: '',  canActivate: [ClassTwoAuth], component: Std02ProperNounsWorksheet1Component }, 

];
@NgModule({
  declarations: [Std02ProperNounsWorksheet1Component],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02ProperNounsWorksheet1Module { }
