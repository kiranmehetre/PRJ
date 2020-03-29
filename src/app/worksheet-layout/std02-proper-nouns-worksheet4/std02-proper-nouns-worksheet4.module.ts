import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02ProperNounsWorksheet4Component } from './std02-proper-nouns-worksheet4.component';
import { Routes, RouterModule } from '@angular/router';
import {  ClassTwoAuth} from "../Auth/ClassTwoAuth"
const routes: Routes = [
  { path: '',  canActivate: [ClassTwoAuth], component: Std02ProperNounsWorksheet4Component }, 

];
@NgModule({
  declarations: [Std02ProperNounsWorksheet4Component],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02ProperNounsWorksheet4Module { }
